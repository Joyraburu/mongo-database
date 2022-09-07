// install the mongodb package(npm install mongodb) and the package json files(npm init -y)
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

//connect your mongodb connection url link here
const connectionURL = "mongodb+srv://Joy_Raburu:****@cluster0.bk2wnhj.mongodb.net/?retryWrites=true&w=majority"
const databaseName = "task-manager";

//this fuction has two parameters: error and client

MongoClient.connect(connectionURL, (error, client) => {   
    if(error) {
        return console.log ("Ooops!unable to connect to database");
    }

    // this  gives a sort of directory/path of the added client(s) to the database location ie. database name and collection in mongodb
    const db = client.db(databaseName);
    db.collection("users").insertMany([
        {
            name:"Joy Bulima",
            age: 21,
            city:"Turkana",

         },
        {
            name: "Faith Ndung'u",
            age: 28,
            city:"Nairobi",
        },
        {
            name:"Steve Ali",
            age: 80,
            city:"Eldoret",
        },
        {
            name:"Pradep Shakir",
            age: 37,
            city:"Nakuru",
        },
        {
            name:"Bushra Mohammed",
            age:34,
            city:"Mombasa",
        },
    ]);

    (error, result) => { 
        if(error) {
            return console.log("Sorry,unable to create user");
        };
        console.log(result);
    };

});