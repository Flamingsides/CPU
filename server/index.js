const express = require("express"); //record libraries
const app = express();
const cors = require("cors");
//middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server has started on port 5000.");
});

//hello zhen hao 2nd try
