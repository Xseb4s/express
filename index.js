const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const whitelsit = ['http:localhost:8080', 'https://my-app.com']
const options = {
  origin: (origin, callback)=>{
    if (whitelsit.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no acceso'))
    }
  }
}
app.use(cors(options))

app.get('/', (req, res)=>{
  res.send('app en servicio')
})
routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('puerto', port)
})

////////////////
/*
heroku, vercel(todo a carpeta api) para backend en nube
*/
////////////////
