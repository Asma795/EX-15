// let guestLeast: string[] = ["Ali", "Dua", "Saba"];
// for (let i = 0; i < guestLeast.length; i++) {
//   console.log(
//     `Dear friend, ${guestLeast} ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You`
//   );
// }
var guestLeast = ["Ali", "Dua", "Saba"];
guestLeast.pop();
guestLeast.push("Ali");
for (var i = 0; i < guestLeast.length; i++) {
    console.log("Dear friend, ".concat(guestLeast, " ,\n\n it is my pleasure to invite  you for dinner.\n\nThank You"));
}
