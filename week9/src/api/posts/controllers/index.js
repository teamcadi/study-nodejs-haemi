const { Result } = require('express-validator');
const postController = require('../services');

const response = (result, res, next) => {
    if (result instanceof Error) next (result);
    else
}

const postController = {
    getList : async (req,res, next) => {

    },
    getPost : async (req,res, next) => {},
    addPost : async (req,res, next) => {},
    modifPost : async (req,res, next) => {},
    removePost : async (req,res, next) => {},
    likePost : async (req,res, next) => {
        const {id : postId} = req.params;
        const {id : userId} = req.params;

    },
}

module.exports = postController;