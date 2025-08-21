// Chapter 07: exercise 2.
"use strict";

function usToBrazil(usDate){
    const brazilianHolidays = {
    "01/01": "Confraternização Universal",
    "21/04": "Tiradentes",
    "01/05": "Dia do Trabalhador",
    "07/09": "Independência do Brasil",
    "12/10": "Nossa Senhora Aparecida",
    "02/11": "Finados",
    "15/11": "Proclamação da República",
    "25/12": "Natal"
    };

    let brazilianDate ="";
    let day = "";

    const dateUsRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
    const found = usDate.match(dateUsRegex);
    if(found){
        day += found[2]+"/"+found[1];
        brazilianDate += day +"/"+found[3];

        if(brazilianHolidays[day]) return `${brazilianDate} (${brazilianHolidays[day]})`
        return brazilianDate;
    }
    throw new Error("Input must be a date in U.S. format: MM/DD/YYYY.");
    
}

const testDate = "11/15/2024";
console.log(usToBrazil(testDate));

const testError ="yepyep"
console.log(usToBrazil(testError));