// const city =require("../models/city")
module.exports = {
    search: (req, res) => {
        console.log(req.query)
        return res.status(200).json({params: req.query})
        // City.find(req.query)
        //     .then(cities => res.status(200).json({ cities }))
    }
}