
const express = require("express");

const cartItems = express.Router();


class CartAPI {
    constructor() {
        this.items = require(`./cartData`);
    }
}

let api = new CartAPI();

// GET
cartItems.get("/", (req, res) => {
    console.log("Here are items in cart...")
    res.send(api);
});

// POST
cartItems.post("/", (req, res) => {
    console.log(req.body); 
    res.send("Add item to cart...");
});
// PUT
cartItems.put("/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send("Updating cart item...");
});
// DELETE
cartItems.delete("/:id", (req, res) => {
    console.log(req.params.id);
});

module.exports = cartItems;