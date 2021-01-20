const authController = {
    register: async (req, res, next) => {
        const result = await signup(req.body);
        if (result instanceof Error) next(result);
        else res.status(201).json({ success: true });
    },
    login : (req, res, next) => {},
};

module.exports = authController;