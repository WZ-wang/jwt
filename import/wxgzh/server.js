let Koa = require("koa")
let app = new Koa()
let static = require("koa-static")
const Router = require("koa-router")
const OAuth = require("co-wechat-oauth")
const {
    needToken
} = require("./mongoose")

let WechatAPI = require("co-wechat-api")
let wechat = require("co-wechat")


app.use(static(__dirname + "/"))
let router = new Router()



let config = {
    token: 'wz',
    appID: 'wxe9e4cdbe5766ba11',
    appsecret: 'e42f065780a24a5a1d3947aeecadc026'
};
let menu = {
    "button": [
        {
            "name": "微金融",
            "sub_button": [{
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "黄金",
                    "key": "V1001_GOOD"
                }
            ]
        },
        {
            "name": "悦生活",
            "sub_button": [{
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "生活缴费",
                    "key": "V1001_GOOD"
                }
            ]
        },
        {
            "name": "信用卡",
            "sub_button": [{
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "账单",
                    "key": "V1001_GOOD"
                }
            ]
        }
    ]
}

router.all("", wechat(config).middleware(async (message, ctx) => {
    return message.Content
}));

let api = new WechatAPI(config.appID, config.appsecret,
    async () => needToken.findOne(),
        async token => await needToken.updateOne({}, token, {
            upsert: true
        }))

router.get("/getMore", async ctx => {
    let res = await api.getFollowers()
    api.createMenu(menu);
    ctx.body = res
})

let oauth = new OAuth(config.appID,config.appsecret)

router.get("/login",async ctx=>{
    let state = ctx.query.id
    let redirect = ctx.href.replace("login","callback")
    // console.log(redirect)
    let scope = "snsapi_userinfo"
    let url = oauth.getAuthorizeURL(redirect,state,scope)
    // console.log(url)
    // https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe9e4cdbe5766ba11&redirect_uri=http%3A%2F%2Fwangwx.free.idcfengye.com%2Fcallback&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect
    ctx.redirect(url)
})
router.get("/callback",async ctx=>{
    let code = ctx.query.code
    let token =await oauth.getAccessToken(code)
    console.log(token)
    const accessToken = token.data.access_token;
    const openid = token.data.openid;
    let userInfo = await oauth.getUser(openid)
    console.log(userInfo)
    ctx.body = `
        <h1>${userInfo.nickname}</h1>
    `
})



app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)