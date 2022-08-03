const { render } = require('ejs')
const userModel = require('../models/user')
const comments = require('../models/comment')

function homePage(req, res){

    comments.find()
        .then( data => {
            res.render('index', {
                data: data
                })
        }).catch(err => {
            console.log(err)
        })
    
}

const aboutPage = (req, res) => {
    res.send('This is About')
}

const contactPage = (req, res) => {
    res.send('This is Contact page')
}
const notFound = (req, res) => {
    res.send('This is a 404 not found')
}

const addPost = (req, res) => {
    res.send('This is a 404 not found')
}

const newComment = (req, res) => {
    let newMassage = new comments(req.body)
    newMassage.save()
    .then( () => {
        
        res.redirect('/')
    })
    .catch(err => {
        console.log(err)
    })

}


module.exports = {
    homePage,
    aboutPage,
    contactPage,
    notFound,
    addPost,
    newComment,

}