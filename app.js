const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./Models/Books');
const app = express();
const compression = require('compression');

app.use(cors());
app.use(compression()); // Use compression middleware properly by calling it as a function

const port = 3000;

mongoose.connect("mongodb+srv://mo7hamedsaeed:ABCabc123@cluster0.oqswxw8.mongodb.net/Books")
.then(() => {
    console.log("Connected to the database");
})
.catch(err => {
    console.log(err);
});

app.get('/books', (req, res) => {
    Books.find()
    .then((booksData) => {
        res.json(booksData); // Send data as JSON
    })
    .catch(err => {
        res.status(500).json({ error: err.message }); // Handle errors properly
    });
});

app.get('/books/:id', (req, res) => {
    var id = +req.params.id;
    Books.findOne({ id: id })
    .then((bookData) => {
        if (!bookData) {
            return res.status(404).json({ error: 'Book not found' }); // Handle not found
        }
        res.json(bookData);
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});

app.listen(process.env.PORT||port, () => {
    console.log(`Server is running on port ${port}`);
});
