const { getCollection } = require('./mongoClient')

async function getUserData(){
    try{
        let collection = await getCollection('users')
        let result = collection.find().toArray()
        if(result){
            return result
        }else{
            return []
        }
    }catch(err){
        throw err
    }
}


module.exports = {getUserData}