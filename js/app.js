
var username = prompt("Enter your name:");
console.log(username);

var gender = prompt("Enter your Gender:");
(gender == "male" || gender == "female")? console.log(gender): alert("Are you LGBT?");

var Age = prompt("Enter your Age:");
if(Age <= 0){alert("Are you dead bruh?")} 

var useranswer = confirm("Skip Welcome Message ?") ;
console.log(useranswer);
if (useranswer == false) {
if (gender == "male") {alert("Hello Mr " + username ) ;}
else if (gender == "female") { alert("Hello MS " + username) ; } 
else {alert("Hello " + username)} ;} 


