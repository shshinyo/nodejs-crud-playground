
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;
const app = express();
app.use(bodyParser.json());
app.use(cors({"origin":"*"}))
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const connectDb = require ('./config/db'); // import 
connectDb();
app.get('/',(req,res)=>{
  res.redirect(307, '/api-docs');
})
// Routes
app.use('/api', require('./routes/router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`App opened at port > ${port}!`)
});


