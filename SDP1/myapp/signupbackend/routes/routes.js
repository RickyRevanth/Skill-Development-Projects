const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel')

router.post('/signup',(request,response) => {
    const SignedUpUser = new signUpTemplateCopy({
        Username: request.body.Username,
        Email: request.body.Email,
        Phone: request.body.Phone,
        Password: request.body.Password
    })
    SignedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router