
var username = prompt("Enter your name:");
console.log(username);

var gender = prompt("Enter your Gender:");
if(gender == "male" || gender == "female" ) {
    console.log(gender);}

else { alert("Are you LGBT?");

}
var Age = prompt("Enter your Age:");
console.log(Age);
if (Age <= 0 ) {
    alert("Are you dead bruh?") 
}



var useranswer = confirm("Skip Welcome Message") ;
console.log(useranswer);

if (useranswer == false) {
if (gender == "male") {
    alert("Hello Mr " + username ) ;
    }
     else { alert("Hello MS " + username) ;  
} 
}