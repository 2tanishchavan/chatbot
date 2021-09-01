const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const chatbot1 = require("./routes/chatbot1");
app.use("/abc", chatbot1);
const chatbot2 = require("./routes/chatbot2");
app.use("/xyz", chatbot2);

db.sequelize.sync({force:true}).then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port 3001");
  });
});
