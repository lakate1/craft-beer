const mongoose = "mongoose";

const Schema = mongoose.schema;

const beerSchema = new Schema ({
    username: { type: String, required: true },
    category: { type: String, required: true },
    beerStyle: { type: String, required: true }
}, {
    timestamps: true,
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;