const router = require("express").Router();
const { Post, User, Comment} = require("../models");
const withAuth = require("../utils/auth");


router.get('/', (req, res) => {
  Post.findAll({
    atributes: [
      'id', 
      'title',
      'post_body',
      'date_created'
    ],
    include: [
    {
      model: User,
      attributes: ['username']
    },
    {
      model: Comment,
      attributes: [ 
        'id',
        'description'
      ],
      include: {
        model: User,
        atributes: ['username']
      }
    }
  ]
})
.then(dbPostData => {
  const posts = dbPostData.map(post => post.get({ plain: true}));
  res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn
  });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});




module.exports = router;
