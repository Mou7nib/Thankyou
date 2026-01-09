const userService = require('../services/user.services')

exports.start = async (bot,msg)=>{
    const user = await userService.findOrCreateUser(msg)
    bot.sendMessage(
        msg.chat.id,
        `welcome ${user.username || 'friend'}! \n Coins:${user.coins}`
    )
}

exports.balance = async (bot,msg)=>{
    const user = await userService.findOrCreateUser(msg);

    bot.sendMessage(
        msg.chat.id,
        `your balance:${user.coins} coins`
    )
}

exports.addBalance_admin = async (amount,user_id)=>{
    // console.log('calling the controller addBalance_admin')
    await userService.addCoin(parseInt(user_id),amount);
}

exports.addBalance = async (amount,msg)=>{
    await userService.findOrCreateUser(msg)
    await userService.addCoin(msg.from.id,amount);
}