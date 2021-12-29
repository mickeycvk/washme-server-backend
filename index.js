const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());



// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//database
const db = require("./models");
const Role = db.role;

//db.sequelize.sync()
db.sequelize.sync()
// .then(() => {
//   console.log("No Drop and Resync Db");
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Go live !!!" });
});

//to check database connection
db.sequelize.authenticate().then(()=>console.log('connected to database')).catch(error=>console.error("error",error))
        
//routes
require('./routes/auth.routes')(app);
// require('./routes/user.routes')(app);

// set port, listen for requests
//for production use process env instead of define port
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });
}

