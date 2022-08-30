const express=require('express')
const cors=require('cors')
const app =express()
const connect=require('./config/db')

require('dotenv').config()
const PORT =process.env.PORT|| 8080
const authRouter= require('./routes/user.route')

app.use(cors())
app.use(express.json())
app.use('/user',authRouter)


app.get("/", (req,res)=>{
res.send("<h1>Gajraj Singh Shekhawat</h1>")
})

app.listen(PORT, async()=>{
    try {
        await connect
        console.log(`app listening on port ${PORT}`)
    } catch (error) {
        console.log(`Something went wrong`)
    }

})