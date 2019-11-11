let Koa = require("koa")
let app = new Koa()
let static = require("koa-static")
let axios = require("axios")
let querystring = require("querystring")
const Router = require("koa-router")
const {
    needToken
} = require("./mongoose")

app.use(static(__dirname + "/"))
let router = new Router()

let config = {
    client_id: "d8e43f0609005d94415f",
    client_secret: "9c24058d1108ea705ae4f9231693d0092c7b8765"
}

router.get("/github/login", ctx => {
    let path = "https://github.com/login/oauth/authorize?client_id=" + config.client_id
    ctx.redirect(path)
})

router.get("/oauth/redirect", async ctx => {  //配置时指定的
    let code = ctx.request.query.code
    //  console.log(code) //6422bc48c5e695e762f6
    let params = {
        client_id: config.client_id,
        client_secret: config.client_secret,
        code: code
    }
    let res = await axios.post("https://github.com/login/oauth/access_token", params)
    // console.log(res.data) //access_token=cc9b0c6c897173d73e7aa73dbd3b7b61ac09c0da&scope=&token_type=bearer
    let access_token = querystring.parse(res.data).access_token
    // console.log(access_token) //10e27fc4e17983dc61137628fd1666802bb04d1f
    let {data} = await axios.get("https://api.github.com/user?access_token="+access_token)
    // console.log(result.data)
    ctx.body=`<h1>你好,${data.login}</h1><img src=${data.avatar_url} />`
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)