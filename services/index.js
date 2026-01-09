const db = require('../models')

exports.findOrCreateUser = async (msg) => {
    let user = await db.Users.findOne({
        telegramID: msg.from.id
    })

    if (!user) {
        const role = await db.Roles.findOne({
            name: 'noob'
        })
        user = await db.Users.create({
            telegramID: msg.from.id,
            userName: msg.from.username,
            role: role._id
        })
    }

    return user
}

exports.addCoin = async (telegramID, amount) => {
    const user = await db.Users.findOne({
        telegramID: telegramID
    })

    console.log(user)

    user.coins += amount
    await user.save()

    return user
}
