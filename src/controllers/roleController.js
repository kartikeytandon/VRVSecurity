const Role = require('../models/Role');

const createRole = async (req, res) => {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ message: 'Role created successfully' });
};

module.exports = { createRole };