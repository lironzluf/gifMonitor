# gifMonitor
Gif / Image app for dev team monitor
Express (Node.js) server, Jade For templating, MongoDB for DB

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

#Demo
![alt tag](https://s17.postimg.org/r3q0k9pxr/demo_Gif_Monitor.png)

#License
2016 Liron Zluf &copy; MIT License