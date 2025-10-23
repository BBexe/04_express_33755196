// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send ("<h1>This is my contact email: asant002@gold.ac.uk </h1>"));
router.get("/date", (req, res) => {
    const currentDate = new Date();
    res.send(`<h1>Current date and time is: ${currentDate}</h1>`);
}); 
router.get("/welcome/:name", (req, res) => {
    const userName = req.params.name; // Get the 'name' parameter from the URL
    res.send(`<h1>Welcome, ${userName}!</h1>`);
});
// Export the router object so index.js can access it
module.exports = router;

