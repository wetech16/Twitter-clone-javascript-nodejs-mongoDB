const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.json({
        message: 'mew!Nodemon'
    });
});

app.listen(5000, () => {
    console.log('Listening on localhost:5000')
})
//start your server on the command.
//before start, setup start server command on package.json file. start: node index.js 