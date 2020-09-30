const hbs = require ("hbs");
const dayjs = require('dayjs');

hbs.registerHelper("formatDateInput", function (date) {
    return dayjs(date).format("YYYY-MM-DD");
  });
  
  hbs.registerHelper("formatDate", function (date) {
    return dayjs(date).format("DD/MM/YYYY");
  });