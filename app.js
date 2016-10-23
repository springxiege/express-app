var express = require('express')
var nunjucks = require('nunjucks')
var port = process.env.PORT || 3000
var app = express()

nunjucks.configure('views/nunjucks',{
    autoescape: true,
    express: app
})
app.listen(port)
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index.html',{
        title: '新首页模板继承',
        list: [
            {
                id: 0,
                title: '标题',
                content: '内容' 
            },
            {
                id: 1,
                title: '标题2',
                content: '内容2' 
            },
            {
                id: 2,
                title: '标题3',
                content: '内容3' 
            }
            
        ]
    });
})

app.get('/detail/:id', (req, res) => {
    res.render('detail.html',{
        title: '详情页',
        content: '这里是详情页内容'
    })
})