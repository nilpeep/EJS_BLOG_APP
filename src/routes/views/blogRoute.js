"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { BlogCategory, BlogPost } = require('../../controllers/views/blogController')

// ------------------------------------------
// BlogCategory
// ------------------------------------------

router.all('/category',BlogCategory.list)
router.all('/categorycreate',BlogCategory.create)
router.all('/category:categoryId', BlogCategory.read)
router.all('/category:categoryId/update',BlogCategory.update)
router.all('/category:categoryId/delete',BlogCategory.delete)

// ------------------------------------------
// BlogPost
// ------------------------------------------

router.all('/post',BlogPost.list)
router.all('/postcreate',BlogPost.create)
router.all('/post:postId', BlogPost.read)
router.all('/post:postId/update',BlogPost.update)
router.all('/post:postId/delete',BlogPost.delete)

router.get('/category/:categoryId/posts', BlogPost.listCategoryPosts)

module.exports = router