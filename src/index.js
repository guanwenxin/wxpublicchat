const Koa = require('koa')

const KoaRouter = require('koa-router')
const { valid } = require('./services/valid-wx')
const app = new Koa();
const router = new KoaRouter()

app.use(router.routes()).use(router.allowedMethods())

// 验证接口
router.get('/msg', (ctx) => {
    console.log(ctx.request.query)
    if (valid(ctx.request.query)) {
        ctx.body = ctx.request.query.echostr
    } else {
        ctx.body = ''
    }
})

app.listen(80, () => console.log('server is listening on http://localhost:80'))