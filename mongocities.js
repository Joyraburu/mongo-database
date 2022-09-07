const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb+srv://Joy_Raburu:****@cluster0.bk2wnhj.mongodb.net/?retryWrites=true&w=majority"
const databaseName = "task-manager";
MongoClient.connect(connectionURL, (error, client) => {   
    if(error) {
        return console.log ("Ooops!unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection("cities").insertMany([
        {
            name: "Joy Bulima",
            city: "Turkana",
        },
        {
            name: "Faith Ndung'u",
            city:"Nairobi",
        },
        {
            name:"Steve Ali",
            city:"Eldoret",
        },
        {
            name:"Pradep Shakir",
            city:"Nakuru",
        },
        {
            name:"Bushra Mohammed",
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