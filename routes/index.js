var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://yourmongolink');

var db = mongoose.connection;

var gifSchema = mongoose.Schema({
  gifUrl: String,
  meme: String,
  created_at: Number
});

var GIFS = mongoose.model('gifs', gifSchema);

// default
var currentGIF = "http://i.giphy.com/VOPK1BqsMEJRS.gif";
var currentMeme = "Good Morning Sir!";

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // connected!
  console.log('connected to mongolab database');
  GIFS.findOne().sort('-created_at').exec(function(err, result) {
    if (err){
      console.log(err);
    }
    else if (result !== null) {
        currentGIF = result.gifUrl;
        currentMeme = result.meme;
      }
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { gif: currentGIF , meme: currentMeme});
});

router.post('/gif', function(req, res, next) {
  try {
    var gifUrl = req.body.gifUrl;
    var meme = req.body.meme;
    if (gifUrl && gifUrl.length > 0) {
      currentGIF = gifUrl;
      currentMeme = meme || '';
      var date = new Date();
      var gifObj = {gifUrl: currentGIF, meme: currentMeme, created_at: Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())};
      var gif = new GIFS(gifObj);
      try{
        gif.save(function(err, result){
          if (err || !result){
            console.log(err);
          }
        })
      } catch (e) {}
    }

    res.redirect('/');
  }
  catch(e){
    res.send(e);
  }
});

module.exports = router;
