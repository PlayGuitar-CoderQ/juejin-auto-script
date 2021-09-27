<div align="center"> <img alt="CoderQ" width="200" height="200" src="https://static01.imgkr.com/temp/bfc1e4e2d4b24ec588ba58a4a1ba5bf3.png"><br> <br>

[![license](https://img.shields.io/badge/Javascript-11.0.0-F7DF1E?logo=Javascript)](LICENSE)

<h1>掘金自动化签到</h1>
</div>


## 🤲 感谢掘金的 "爱掘金嗳萝莉" 提供的代码 V1.0版本
1. 原文：https://juejin.cn/post/7011025504186662949
- 后续功能以及版本>=V1.x.x，新功能的迭代将继续以本人（CoderQ） 持续维护和迭代

##  💡 功能
- 📙 自动化掘金签到，发送邮件通知状态，自动免费抽奖。
- ☁️ 云函数部署，定时执行

<br />


## ☂️ 腾讯云自动部署

<br />

<img alt="CoderQ" src="https://cdn.jsdelivr.net/gh/PlayGuitar-CoderQ-Sub/img_bed@master/uPic/WeChat99bd9beed20cd261ad400d2bc075c364.png">

<br />

<br />


## ‼️  部署的时候注意 要修改执行方法为自己执行的那个函数

<br />

## 🟡  请注意先创建一个config.js 写自己的配置文件

<br />


```bash
mkdir config.js


// config.js

const config = {
    "baseUrl": "https://api.juejin.cn",
    "apiUrl": {
        "getTodayStatus": "/growth_api/v1/get_today_status",
        "checkIn": "/growth_api/v1/check_in",
        "getLotteryConfig": "/growth_api/v1/lottery_config/get",
        "drawLottery": "/growth_api/v1/lottery/draw"
    },
    "cookie": "",
    "email": {
        "qq": {
            "user": "xxxxxx@qq.com",
            "from": "xxxxxx@qq.com",
            "to": "xxxxxxxx@qq.com",
            "pass": ""
        }
    }
}

```

## 🔔 Git的提交规则

 - 一个新的功能: git commit -m '✨ feat:   '

- 修复bug: git commit -m '🐛  fix:   '

- 改进代码结构/代码格式: git commit -m '💅  style:   '

- 提升性能: git commit - m '⚡️ perf:   '

- 重构代码: git commit -m ' ♻️ refactor:   '

- 撤销更改: git commit -m '⏪  revert:   '

- 更新测试: git commit -m '✅ test:    '

- 撰写文档和注释: git commit -m ' 📝  docs:    '

- 依赖更新/脚手架配置修改等: git commit -m ' 🔧 chore:     '

- 一个新的语义化版本: git commit -m '🛳  release:    '

- 工作流改进 （git的分支整改等等）: git commit -m ' 📦  workflow:     '

- 持续集成: git commit -m '👷 ci:       '

- 不确定分类的修改: git commit -m '🤡 mod:      '

- 开发中, 正在进行的工作: git commit -m '🚧   wip:        '

- 类型修改: git commit -m '🏷  types:        '

- 更新文件: git commit -m ' ✏️  update:   '

- 初始化项目: git commit -m '🌈  init:   '



