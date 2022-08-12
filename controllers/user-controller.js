const {User, Thought } = require("../models");

const userController = {

    getAll(req, res){
        User.find()
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    getOne(req, res){
        User.findOne({ _id: req.params.id})
        .populate("friends")
        .populate("thoughts")
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    createUser(req, res){
        User.create(req.body)
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: req.body
            },
            {
                runValidators: true, 
                new: true
            }
        )
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.id})
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    addFriend(req, res){
        User.findOneAndUpdate({_id: req.params.id}, {$addToSet: { friends: req.params.friendId }}, {new: true})
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    },

    removeFriend(req, res){
        User.findOneAndUpdate({_id: req.params.id}, {$pull: { friends: req.params.friendId }}, {new: true})
        .then((userData)=>{
            res.json(userData)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json(err)
        });
    }

}

module.exports = userController;