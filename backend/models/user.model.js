const mongoose = "mongoose";

const schema = mongoose.schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

model.exports = User;