let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/googlebooks",{
    useNewUrlParser: true,
});

const bookSeed = [
    {
        authors: ["Michael Reaves"],
        description: "The Emperor's ruthless Order 66 has all but exterminated the Jedi. The few remaining who still wield the Force for good have been driven into exile or hiding. But not Jax Pavan, who's been steadily striking blows against the Empire—as a lone guerrilla fighter and a valued partner of Whiplash, a secret Coruscant-based resistance group. ",
        image: "https://books.google.com/books/content?id=NDu43aklSi4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73vsGW4cWVTMe55rLM03Lnc-yhziUmG5P7EkxlvAQm3dC37NcBt6MXHEPy6sD7I8DquHXAuWvLTR5NjWEr6ry3EtgPC7ZFLnlwcCJPTQk4U8Y8_9PO4OcgUm_zW1dsOAKACSTS-",
        link: "https://books.google.com/books?id=NDu43aklSi4C&newbks=1&newbks_redir=0&hl=en",
        title: "Star Wars: The Last Jedi",
        id: "NDu43aklSi4C"
    
    }
  
]

db.Book.remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.insertedCount + " record(s) inserted!");
        process.exit(0);
    })
    .catch(err =>{
        console.error(err);
        process.exit(1);
    })