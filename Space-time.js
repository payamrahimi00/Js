var years = 365;
var month = 30;
var day = 1;
var insertYears = prompt("Insert years of birthday:");
var insertMonth = prompt("Insert Month of birthday:");
var insertDay = prompt("Insert day of birthday:");
insertDay = +insertDay * day;
insertMonth = +insertMonth * month;
insertYears = +insertYears * years;
var defaultyears = 2025 * years;
var defaultmonth = 4 * month;
var defaultday = 26 * day;
var convertYears = (defaultyears - insertYears);
var convertMonth = (defaultmonth - insertMonth);
var convertDay = (defaultday - insertDay);
sum = (convertDay + convertMonth + convertYears);
sum = Number(sum)
var reault = (sum / years);
reault= +reault
alert(reault)

