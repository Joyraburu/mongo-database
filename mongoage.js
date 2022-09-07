const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb+srv://Joy_Raburu:*****@cluster0.bk2wnhj.mongodb.net/?retryWrites=true&w=majority"
const databaseName = "task-manager";
MongoClient.connect(connectionURL, (error, client) => {   
    if(error) {
        return console.log ("Ooops!unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection("users").insertMany([
        {
            name:"Joy Bulima",
            age: 21,
        },
        {
            name: "Faith Ndung'u",
            age: 28,
        },
        {
            name:"Steve Ali",
            age: 80,
        },
        {
            name:"Pradep Shakir",
            age: 37,
        },
        {
            name:"Bushra Mohammed",
            age:34,
        },
    ]);

    (error, result) => { 
        if(error) {
            return console.log("Sorry,unable to create user");
        };
        console.log(result);
    };

});