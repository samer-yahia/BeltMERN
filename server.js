const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

// Middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));

// Import Routes and Mongoose Config. REMEMBER (APP) on routes
require("./server/routes/Pirates.routes")(app);
require("./server/config/mongoose.config");


// Start Server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
