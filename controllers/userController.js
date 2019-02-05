const axios = require("axios");
const Member = require("../models/member");
const bcrypt = require("bcryptjs");

let saltRounds = 10;
module.exports = {

    registerUser: function (req, res) {
        // need to find user first
        console.log("register user");
        Member.findOne({email: req.body.email}, function (err, user) {
            console.log("inside Onefind");
            if (err) {
                console.log("error");
                return res.status(500).json({
                    message: "login error",
                    err: err
                })
            }
            else {
                console.log("not found, can register: user: "+JSON.stringify(user));
                if (user === null) {
                    console.log("user not found");
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        bcrypt.hash(req.body.password, salt, function(err, hash) {
                            console.log(hash);
                            req.body.password = hash;
                            console.log("user: "+req.body.email+" hash: "+req.body.password);
                            Member.create(req.body, (err, newMember) => {
                                if (err) {
                                    console.log("error");
                                    return res.status(500).json({
                                        message: "register error",
                                        err: err
                                    })
                                }
                                else {
                                    console.log("newuser: "+newMember);
                                    console.log("register new member, encrypt password");
                                    return res.status(200).json(newMember)
                                }
                            })
                        })
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
    },

     loginUser: function (req, res) {
        console.log("call login: req.body: "+req.body.email);

        return Member.findOne({email: req.body.email}, function (err, user) {
            if (err) {
                console.log("error");
                return res.status(500).json({
                    message: "login error",
                    err: err
                })
            }
            else {
                console.log("user:"+user)
                if (user === null) {
                    console.log("not found");
                    return res.status(404).json({
                        message: "user not found",
                        err: err
                    })
                }
                else {
                    console.log("find it here");
                    console.log("req.body.email: "+req.body.email);
                    console.log("req.body.password: "+req.body.password);
                    
                    bcrypt.compare(req.body.password, user.password, function(err, response) {
                        if (response) {
                            console.log("good: "+user);
                            return res.status(200).json(user);
                        }
                        else {
                            return res.status(404).json({
                                message: "password not match",
                                err: err
                            })
                        }
                    })
                }
            }
        })
    }
}