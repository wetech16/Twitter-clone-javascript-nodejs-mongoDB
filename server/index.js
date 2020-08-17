const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    res.json({
        message: 'mew!Nodemon'
    });
});
function isValidMew (mew) {
    return mew.content && mew.content.toString().trim() !== '' &&
    mew.name && mew.name.toString().trim() !== '';
}

app.post('/mews', (req,res) => {
    if (isValidMew(req.body)) {
        //insert into db...
        const mew = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        };
        console.log(mew);
    } else {
        res.status(422);
        res.json({
            message: 'Hey! Name and Content are required!'
        });
    }
})

app.listen(5000, () => {
    console.log('Listening on localhost:5000')
})
//start your server on the command.
//before start, setup start server command on package.json file. start: node index.js 