const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken');
app.use(express.json());

const posts = [{
    name: "Ali",
    title: "JWT"
},
{
    name: "Haider",
    title: "Tutorial",
}]

app.get('/post', (req, res) => {
    const postdetails = posts.map(post => ({
        name: post.name,
        title: post.title
    }))
    res.json(postdetails);
})

app.get('/', (req, res) => {
    res.json('Server is running');
})
app.listen(PORT);