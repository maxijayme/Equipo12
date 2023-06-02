const bcrypt = require('bcrypt');

async function hashPassword(password, saltRounds){
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;
}

module.exports = hashPassword;