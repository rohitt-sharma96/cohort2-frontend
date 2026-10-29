const express = require('express')

const app = express()

const dummy = [
    {
        name: 'rohit',
        city: 'Bhopal',
        age: 23
    }
]

app.get('/data', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173').json({data: dummy})
})


app.listen(8000,()=>{
    console.log('server is running... on port 8000')
})