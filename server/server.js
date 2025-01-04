const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();


app.use(express.json());
app.use(cors());


const db = require('./models')


// Routers 

const postRouter  = require('./routes/Services');
app.use('/service',postRouter)

const contactRouter = require('./routes/Contacts');
app.use('/contacts',contactRouter)


const adminRouter  = require('./routes/Admins');
app.use('/autho',adminRouter);

const ministriesRoute = require('./routes/Ministries');
app.use('/ministries', ministriesRoute);
// Serve static images from the 'images' folder in the root directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));





 
db.sequelize.sync().then(()=>{
// Start the server
app.listen(4040, () => {
  console.log('Server is running on http://localhost:4040');
});

})
