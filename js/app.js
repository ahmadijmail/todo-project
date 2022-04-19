
'use strict';
/*var username = prompt("Enter your name:");
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
else {alert("Hello " + username)} ;} */

var Q1 = prompt("Do you like JavaScript?:");
if(Q1=="") {Q1="invalid"}
var Q2 = prompt("Did you learn HTML?:");
if(Q2=="") {Q2="invalid"}
var Q3 = prompt("Do you learn CSS?:");
if(Q3=="") {Q3="invalid"}

var Arr= [Q1, Q2, Q3]
for(var i=0; i<Arr.length;i++) {
    console.log(Arr[i]) }


