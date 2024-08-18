const { getUserData } = require('./database');

async function checkUser(name, password){
    let isPresent = false;
    let isPresentIndex = null;

    let database = await getUserData()

    for (let i = 0; i < database.length; i++) {

        if (database[i].name === name
            && database[i].password === password) {
            isPresent = true;
            isPresentIndex = i;
            break;
        }
    }

    return {isPresent,isPresentIndex,user:database[isPresentIndex]}
}

module.exports = {checkUser}