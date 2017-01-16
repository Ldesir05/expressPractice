var express = require('express');
var app = express();

//using the Port number 9000 can be any number you like.
var PORT = 9000;

//"/" welcome to my first assignment
app.get("/", function(req,res){
    res.send("Hi there, Welcome to my assignment!")
});
// "/speak/pig should print "The pig says Oink"
app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "onik",
        dog: "Woof",
        cow: "Moo",
        cat: " I hate you humans"
    }
    //storing the animal parameter to a variable
    var animal = req.params.animal.toLowerCase();
    //empty variable that will be used later
    var sound = sounds[animal];
    // //if statement is one way to do this
    // if (animal === "pig"){
    //     sound = "oink";
    // }else if (animal === "dog"){
    //     sound = "Woof Woof"
    // }else if (animal === "cow"){
    //     sound = "Moo"
    // }

    //Printing the results to the page
    res.send("The " + animal + " says " + sound);
});


//visiting /repeat/hello/3 should print "hello hello hello"
app.get("/repeat/:message/:times ", function(req,res){
    var message = req.params.message;
    var times = Number(req.params.times);
    //
    var result = "";

    for(var i = 0; i < times;i ++){
        result += message + " ";
    }
    res.send(result);

});

//when a user visit's any other route
app.get("*",function(req,res){
    res.send("Sorry, page not found.... What are you doing with your life?")
});

//this is where we listen for the connection.
app.listen(PORT,function(){
    console.log("Connected !!!")
});