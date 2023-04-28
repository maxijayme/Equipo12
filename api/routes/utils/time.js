export default function getDate(oldDate){
    let time;
    if(oldDate){
        time = oldDate;
    }else{
        time = moment()
    }
    let postTime = moment((time), "DD/MM/YYYY hh:mm");
    let getTime = moment();
    let diffTime = moment(postTime).from(getTime);
    return diffTime;
}