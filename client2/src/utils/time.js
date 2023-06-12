const moment = require('moment');

export default function getMoment(oldDate){
    moment.locale('es');
    let time= moment(oldDate).format("DD-MM-YYYY kk:mm:ss");
    let postTime = moment((time), "DD/MM/YYYY kk:mm:ss");
    let getTime = moment().utc(2);
    let diffTime = moment(postTime).from(getTime);
    return diffTime;
  }
  moment.updateLocale('en', {
    months : {
         standalone: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
         isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
    },
    relativeTime : {
      future: "en %s",
      past:   "%s atrás",
      s  : 'unos segundos',
      ss : '%d segundos',
      m:  "un minuto",
      mm: "%d minutos",
      h:  "una hora",
      hh: "%d horas",
      d:  "un día",
      dd: "%d días",
      w:  "una semana",
      ww: "%d semanas",
      M:  "un mes",
      MM: "%d meses",
      y:  "un año",
      yy: "%d años"
  }
});

