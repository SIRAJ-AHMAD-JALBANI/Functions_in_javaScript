function isLeapYear(year)  {
  let result = ((year % 400 === 0) || year % 4 === 0 && year % 100 !== 0 )? `${year} is a leap year.`: `${year} is not a leap year.`
  return result;
}
let year = 2024
let result = isLeapYear(year)
console.log(result)