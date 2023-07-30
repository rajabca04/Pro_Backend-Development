const express = require('express')
const dateFormat = require('date-format')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res)=>{
    res.status(200).send('Hello World')
})

// Gate Route for /api/v1/instagram

app.get('/api/v1/instagram',(req,res)=>{
    const instagram = {
        userName: 'ethical_raja_offical',
        followers:599,
        follows:59,
        date:dateFormat.asString('dd.MM.yyyy - hh:mm:ss', new Date())
    }
     res.status(200).json(instagram)
})

// Gate Route for /api/v1/facebook

app.get('/api/v1/facebook',(req,res)=>{
    const facebook = {
        userName: 'Raja kumar sharma',
        followers:569,
        follows:99,
        date:dateFormat.asString('dd.MM.yyyy - hh:mm:ss', new Date())
    }
     res.status(200).json(facebook)
})

// Gate Route for /api/v1/linkedin

app.get('/api/v1/linkedin',(req,res)=>{
    const linkedin = {
        userName: 'Raja Kumar',
        followers:899,
        follows:87,
        date:dateFormat.asString('dd.MM.yyyy - hh:mm:ss', new Date())
    }
     res.status(200).json(linkedin)
})

// Gate Route for /api/v1/:token: it return params of url

app.get('/api/v1/:token', (req, res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
