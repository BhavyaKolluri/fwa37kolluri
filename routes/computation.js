const express = require('express')
const router = express.Router()
router.get('/',(req,res,next) =>{
    console.log(req.query)           
    if(Object.keys(req.query).length === 0){        
        console.log("entered")
        let rand = Math.random()
        res.render('computation', {value : `exp applied to ${rand} is ${Math.log2(rand)}`})
        res.render('computation', {value1 : `exp applied to ${rand} is ${Math.cosh(rand)}`})
        res.render('computation', {value2 : `exp applied to ${rand} is ${Math.floor(rand)}`})
    }
    else
    for(let a in req.query)
    {
    {        
        console.log(a)
    res.render('computation', {value : `exp applied to ${req.query[a]} is ${Math.log2(req.query[a])}`})
    res.render('computation', {value1 : `exp applied to ${req.query[a]} is ${Math.cosh(req.query[a])}`})
    res.render('computation', {value2 : `exp applied to ${req.query[a]} is ${Math.floor(req.query[a])}`}) 
    }
}       
})
module.exports = router