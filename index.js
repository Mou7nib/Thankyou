const db = reqiue('./models')
require('./bot')

let roles = ['admin','noob','junior','senior']


async function main(){
    try{
        await db.mongoose.connect("mongodb://localhost:27017/exo")
                await db.mongoose.sync({force:true})

         for(let role of roles){
            await db.Roles.create({
                name:role
            })
        }
        let role = await db.Roles.findOne({
            name:'admin'
        })

        let admin = await db.Users.create({
            telegramID:1701682483,
            userName:'ousslr',
            coins:99999,
        })
        await admin.setRole(role)
        console.log('bot is RUNNING...')
    }catch(e){
        console.error(e)
    }
}

main()