const moment = require('moment');

function getDate(){
    let time = moment().utc(2)
    let postTime = time.format("YYYY-MM-DD kk:mm:ss");
    return postTime;
}

function getMoment(oldDate){
    let time= moment(oldDate).format("DD-MM-YYYY kk:mm:ss");
    let postTime = moment((time), "DD/MM/YYYY kk:mm:ss");
    let getTime = moment().utc(2);
    let diffTime = moment(postTime).from(getTime);
    return diffTime;
}

module.exports = {getDate, getMoment}