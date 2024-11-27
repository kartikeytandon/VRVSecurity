const authorize = (roles) => {
    return (req, res, next) => {
        const userRoles = req.user.roles.map(role => role.name);
        if (!roles.some(role => userRoles.includes(role))) {
            return res.status(403).json({ message: 'Access forbidden' });
        }
        next();
    };
};

module.exports = { authorize };