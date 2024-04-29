"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

const { User } = require('../../controllers/views/userController')

// ------------------------------------------
// User
// ------------------------------------------

// Login/logout:
router.all('/login', User.login)
router.all('/logout', User.logout)

router.all('/user', User.list)
router.all('/user/create', User.create)
router.all('/user/:id', User.read)
router.all('/user/:id/update', User.update)
router.all('/user/:id/delete', User.delete)

module.exports = router