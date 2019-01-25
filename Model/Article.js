//define schema first

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    headline: { type: String, required: true},
    url: {type: String, required: true}

});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;