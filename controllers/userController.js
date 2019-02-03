const axios = require("axios");
const Member = require("../models/member")
module.exports = {

    registerUser: function (req, res) {
        return Member.create(req.body, (err, newMember) => {
            if (err) {
                return res.status(500).json({
                    message: "register error",
                    err: err
                })
            }
            else {
                res.status(200).json(newMember)
            }
        })
    },

    loginUser: function (req, res) {
        console.log(req.body);
        Member.find(req.body, function(err, user){
            if (err) {
                return res.status(500).json({
                    message: "login error",
                    err: err
                })
            }
            else {
                res.status(200).json(user);
            }
        })
        // return Member.create(req.body, (err, newMember) => {
        //     if (err) {
        //         return res.status(500).json({
        //             message: "login error",
        //             err: err
        //         })
        //     }
        //     else {
        //         res.status(200).json(newMember)
        //     }
        // })
    }
}