const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const users = require('./users');

app.use(bodyParser.json());
app.use(cors({ origin: ['http://localhost:3000'] }))

let favoriteMovies=[]
let moreInfo=[]

app.get('/health', (req, res) => {
    return res.send('ok')}
);

app.get('/authenticate-user', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const userId = users.authenticateUser(email, password);
    const userIdExists = !!userId;

    if(userIdExists) return res.send({id: userId});
    return res.status(403).send('either email or password is incorrect');

})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const user = users.findById(id);
    
    if(user) return res.send(user);
    return res.status(404).send(`user ${id} not found`);
})

app.put('/favorites', (req, res) => {
    favoriteMovies.push(req.body.movie)
    res.send("Saved to Favorites Successfully")
})

app.get('/favorites', (req, res) => {
    res.send(favoriteMovies)
})

app.delete('/favorites/:id', (req, res) =>{
   favoriteMovies = favoriteMovies.filter(movie => {
       return movie.imdbID !== req.params.id
    })
    res.send(favoriteMovies)
})

app.put('/info', (req, res) => {
    moreInfo.push(req.body.info)
    res.send("Saved to Info")
})

app.get('/info', (req, res) => {
    res.send(moreInfo)
})


app.listen(8080, function() {
    console.log(`http://localhost:${this.address().port}`);
})

