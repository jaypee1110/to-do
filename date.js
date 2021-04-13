exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  return today.toLocaleDateString("en-us", options,);
}
exports.getDay = function () {
  let today = new Date();

  let options = {
    weekday: "long",

  }
  let day = today.toLocaleDateString("en-us", options);
  return day;
}
console.log(module.exports);