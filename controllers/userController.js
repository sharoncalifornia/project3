const axios = require("axios");
const Member = require("../models/member")
module.exports = {

    // userExist: (email) => {
        // function myuserExist(email) {
        myuserExist: function(email) {
        let status = false;
        console.log("userExist");
        Member.findOne(email, function (err, user) {
            if (err) {
                status = false
            }
            else {
                if (!user) {  // not exist
                    status = fase;
                }
                else {
                    status = true;
                }
            }
        })
        return status;
        //console.log(userExist);
    },

    registerUser: function (req, res) {
        // need to find user first
        Member.findOne(req.body, function (err, user) {
            if (err) {
                console.log("error");
                return res.status(500).json({
                    message: "login error",
                    err: err
                })
            }
            else {
                if (!user) {
                    console.log("user not found")
                    Member.create(req.body, (err, newMember) => {
                        if (err) {
                            console.log("error");
                            return res.status(500).json({
                                message: "register error",
                                err: err
                            })
                        }
                        else {
                            console.log("register new member");
                            return res.status(200).json(newMember)
                        }
                    })
                }
                else {
                    console.log("found user");
                    return res.status(404).json({
                        message: "user is already in the system, please login",
                        err: err
                    })

                }
            }
        })
        // if (this.userExist(req.body.email)) {
        //     return res.status(404).json({
        //         message: "user exist",
        //         err: err
        //     })
        // }
        // else {
        //     return Member.create(req.body, (err, newMember) => {
        //         if (err) {
        //             console.log("error");
        //             return res.status(500).json({
        //                 message: "register error",
        //                 err: err
        //             })
        //         }
        //         else {
        //             console.log("register new member");
        //             res.status(200).json(newMember)
        //         }
        //     });
        // }
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