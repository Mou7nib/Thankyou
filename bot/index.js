const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const userService = require('../services")/users.service')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => userController.start(bot,ctx.msg))
bot.command('balance', (ctx) => userController.balance(bot,ctx.msg))
bot.hears(/\/addBalance (\d+) (\d+)/, async (ctx) => {    

let amount = parseInt(match[1])
    let id = match[2]

    let user = await db.Users.findOne({
        where:{
            telegramID:msg.from.id
        },
        include: [{
            model: db.Roles
        }]
    })
//SELECT * FROM users u WHER u.id = msg.from.id JOIN Roles r ON r.id = u.roleId;

    if(user.role.name == 'admin'){
        // console.log('admin is allowed')
        await userController.addBalance_admin(amount,id)
    }else{
        bot.sendMessage(
            msg.chat.id,
            `you are not allowed`
        )
    }
    
})


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))