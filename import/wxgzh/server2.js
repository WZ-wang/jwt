let Koa = require("koa")
let app = new Koa()
let static = require("koa-static")
const Router = require("koa-router")
const fs = require("fs")
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



app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)