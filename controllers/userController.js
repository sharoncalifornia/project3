const axios = require("axios");
const Member = require("../models/member")
module.exports = {

    registerUser: function (req, res) {
        // need to find user first
        return Member.create(req.body, (err, newMember) => {
            if (err) {
                console.log("error");
                return res.status(500).json({
                    message: "register error",
                    err: err
                })
            }
            else {
                console.log("register new member");
                res.status(200).json(newMember)
            }
        })
    },

    loginUser: function (req, res) {
        Member.findOne(req.body, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: "login error",
                    err: err
                })
            }
            else {
                if (!user) {
                    return res.status(404).json({
                        message: "user not found",
                        err: err
                    })
                }
                else {
                    res.status(200).json(user);
                }
            }
        })
    }
}