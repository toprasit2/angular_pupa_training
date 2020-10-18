const express = require('express')
const _ = require('lodash')
const u4 = require('uuid');
const uuidv4 = u4.v4;
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = 3000

let MUSIC_LIST = [
{
    id: uuidv4(),
    title: 'Believer - Imagine Dragons - Fingerstyle Guitar Cover',
    youtubeId: 'hXQxSi34GWY',
    imageLink:
    'https://img.freepik.com/free-photo/guitarist-stage-sings-concert_34200-319.jpg?size=626&ext=jpg',
},
{
    id: uuidv4(),
    title: 'La Casa De Papel - My Life Is Going On',
    youtubeId: 'XNT8hf49HCE',
    imageLink:
    'https://cdn.telanganatoday.com/wp-content/uploads/2020/06/Money-Heist-trends-on-Twitt.jpg',
},
{
    id: uuidv4(),
    title: 'Pirates of the Caribbean Theme',
    youtubeId: 'e_k-yLShHC8',
    imageLink:
    'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2017%2F05%2Fpirates_of_the_caribbean_dead_men_tell_no_tales_by_mintmovi3-db23j4w.jpg',
},
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/music', (req, res) => {
    res.send({resut: MUSIC_LIST, totalCount: MUSIC_LIST.length})
})
app.get('/music/:id', (req, res) => {
    res.send(_.find(MUSIC_LIST, (music) => {
        return music.id === req.params.id;
    }));
})

app.post('/music/create', (req, res) => {
    const result = {
        id: uuidv4(),
        ...req.body,
    };
    MUSIC_LIST.push(result);
    res.send(result);
})

app.put('/music/edit', (req, res) => {
    const index = MUSIC_LIST.findIndex((music) => music.id === req.body.id);
    MUSIC_LIST[index] = {
      ...req.body,
    };
    res.send(MUSIC_LIST);
})

app.delete('/music/delete/:id', (req, res) => {
    const results = _.filter(MUSIC_LIST, (music) => {
        return music.id !== req.params.id;
    });
    MUSIC_LIST = results;
    res.send(MUSIC_LIST);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})