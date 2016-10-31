// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday

var day = "Friday";

switch (day) {
  case "Monday":
    console.log("It's Monday, this is witty");
    break;
  case "Tuesday":
    console.log("It's Tuesday, this is witty-er.");
    break;
  case "Wednesday":
    console.log("It's Wednesday, this is witty-er-er.");
    break;
  case "Thursday":
    console.log("It's Thursday, this is witty-er-er-er.");
    break;
  case "Friday":
    console.log("It's Friday, this is witty-est.");
    break;
  default:
    console.log("I don't think that's a day.");
}
