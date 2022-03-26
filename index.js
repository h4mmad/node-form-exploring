const express = require('express');
const mysql = require('mysql');
const moment = require('moment');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended : true}));


const PORT = process.env.PORT || 6969;

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'user',
    password : 'root',
    database : 'projectdb',
    port : '3306'
})

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connection successful');
})

app.get('/', (req, res)=>{
    res.send("go to /api for using the api");
})


const sqlQuery1 = 'select * from players, on_field_stats where players.player_id = on_field_stats.player_id';
const sqlQuery2 = 'select * from players';
const sqlQuery3 = 'select * from players, gk_stats where players.player_id = gk_stats.player_id';
const sqlQuery4 = `insert into players
                    (player_name,
                    player_dob,
                    player_nationality,
                    player_pic_url, 
                    player_flag_url, 
                    player_height)
                    
                    values(?,?,?,?,?,?)`;

app.get('/api/players', (req, res) => {
    db.query(sqlQuery2, (err, result)=>{
        if(err) throw err;
        
        const arr = result;
        arr.forEach(element => {
            element.PLAYER_DOB = moment(element.PLAYER_DOB).format('YYYY-MM-DD');
        });
        res.json(arr);

    });
})

app.get('/api/add/players', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/add/players', (req, res)=>{
    const {
        PLAYER_NAME, 
        PLAYER_DOB, 
        PLAYER_NATIONALITY,
        PLAYER_PIC_URL, 
        PLAYER_FLAG_URL,
        PLAYER_HEIGHT
    } = req.body;

    db.query(sqlQuery4,
         [ PLAYER_NAME,
            PLAYER_DOB,
            PLAYER_NATIONALITY,
            PLAYER_PIC_URL,
            PLAYER_FLAG_URL,
            PLAYER_HEIGHT] ,
            (err, result)=>{
             
                if(err) throw err;

                console.log(result);

    })
    console.log(PLAYER_DOB);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/api/players/stats', (req, res) => {
    db.query(sqlQuery1, (err, result)=>{
        if(err) throw err;
        
        const arr = result;
        arr.forEach(element => {
            element.PLAYER_DOB = moment(element.PLAYER_DOB).format('YYYY-MM-DD');
        });
        res.json(arr);

    });
})

app.get('/api/players/gk/stats', (req, res) => {
    db.query(sqlQuery3, (err, result)=>{
        if(err) throw err;
        
        const arr = result;
        arr.forEach(element => {
            element.PLAYER_DOB = moment(element.PLAYER_DOB).format('YYYY-MM-DD');
        });
        res.json(arr);

    });
})




app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
})
