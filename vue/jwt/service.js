let express = require("express")
let bodyParser = require("body-parser")
let jwt = require("jsonwebtoken")
let app = express()

let mid = "sdsd"

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization")
    if(req.method.toLowerCase() === "options"){
        return res.end();
    }
    next();
})

app.use(bodyParser.json())

app.get("/user",(req,res)=>{
    res.json({name:"wangcai"})
})

app.post("/login",(req,res)=>{
    let {username} = req.body
    console.log(username)
    if(username == "admin"){
        res.json({
            code:0,
            data:"登录成功",
            token:jwt.sign({username:"admin"},mid,{expiresIn:60})
        })
    }else{
        res.json({
            code:1,
            data:"用户名不存在"
        })
    }
})

app.get("/validate",(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token,mid,(err,decode)=>{
        if(err){
            return res.json({
                code:1,
                data:"token失效了"
            })
        }else{
            res.json({
                code:0,
                username:decode.username,
                token:jwt.sign({username:"admin"},mid,{expiresIn:60})
            })
        }
    })
})

app.listen(3000)