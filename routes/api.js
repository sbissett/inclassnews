const DB = require("../Model");

module.exports = app => {

    
    app.get('/api/scrape', (req, res) => {
        DB.Article.deleteMany({});
        for (let x = 0; x < 10; x++) {

            DB.Article.create({
                headline: "Test Article "+ x,
                url: "http://www.example.com." + x

            });
        }
        res.json("done");
    });

    app.get('/api/articles', (req,res) => {

        DB.Article.find({}).then(records => res.json(records));

    });
}