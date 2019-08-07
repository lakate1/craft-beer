const router = require("express").Router();
let Beer = require("../models/beer.model");

router.route("/").get((req, res) => {
    Beer.find()
        .then(beers => res.json(beers))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const category = req.body.category;
    const beerStyle = req.body.beerStyle;

    const newBeer = new Beer({
        username,
        category,
        beerStyle
    });

    newBeer.save()
    .then(() => res.json("Beer added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Beer.findById(req.params.id)
    .then(beer => res.json(beer))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Beer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Beer deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Beer.findById(req.params.id)
    .then(beer => {
        beer.username = req.body.username;
        beer.category = req.body.category;
        beer.beerStyle = req.body.beerStyle;

        beer.save()
        .then(() => res.json("Beer updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;