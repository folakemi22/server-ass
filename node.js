const express = require('express')

const app = express()

const PORT = 4000

app.listen(4000)

app.get('/', (req, res) =>{
    console.log('folake');
    //res.send("This is folake's serve")
    res.sendFile('./views/home.html', { root: __dirname});
})

app.get('/about', (req, res) =>{
    console.log('georhge');
   // res.send("Talo")
   res.sendFile('./views/about.html', { root: __dirname});
})

app.get('/contactme', (req, res) =>{
    console.log('olumoroti');
   // res.send("T.gmail.com")
   res.sendFile('./views/cotactme.html', { root: __dirname});
})

app.get('/about-us', (req, res) =>{
    console.log('georhge');
   // res.send("Talo")
   res.redirect('./about')
})


app.use((req, res) => {
    res.status('404').sendFile('./views/404.html', { root: __dirname});
})
