# gifMonitor
Gif / Image app for dev team monitor

#Installation
```js
npm install
```

This implementation uses a MongoDB Database for saving the gifs, 
but you're free to use what ever you'd like.

You need the change the following line in routes/index.js with your mongodb url:

```js
mongoose.connect('mongodb://yourmongolink');
```

That's it! Have fun and feel free to hit me with improvements!

#License
2016 Liron Zluf &copy; MIT License