const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Sachin Kaushik',
            age: 24
        },
        {
            id: 2,
            name: 'Naman Ojha',
            age: 29
        },
        {
            id: 3,
            name: 'Aman Kumar',
            age: 44
        },
        {
            id: 4,
            name: 'Vidya Sharma',
            age: 19
        }
    ]);
});

app.listen(6000, () => {
    console.log("Server is running on 6000 port")
});
