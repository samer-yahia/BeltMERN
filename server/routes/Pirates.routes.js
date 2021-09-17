// Deconstruct the functions from controller
const {create, findAll, findOne, update, deleteItem} = require("../controllers/Pirates.controller")

// Create a route for each CRUD function
module.exports = (app) => {
    // ===== Create ===== //
    app.post("/api/pirates/create", create);

    // ===== Find All ===== //
    app.get("/api/pirates/all", findAll);

    // ===== Find One ===== //
    app.get("/api/pirates/:id", findOne);

    // ===== Update ===== //
    app.put("/api/pirates/update/:id", update);

    // ===== Delete ===== //
    app.delete("/api/pirates/delete/:id", deleteItem)
}