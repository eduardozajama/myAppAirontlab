function auth(){
    var email= document.getElementById(email).value;
    var password= document.getElementById(password).value;
    if (email=="admin@email.com"&& password=="admin123"){
        window.location.assign("search3.html");
        console.log("Login succesfully");

    }
    else{
        console.log("Invalid information");
    }
}