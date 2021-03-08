const mongoose = require('mongoose')
const config = require('../../config')

const Connect = async() => {
    try{
        //mongofb cloud connection
        const con = await mongoose.connect(config.mdb_url ,{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('mongoDB connected ')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = Connect