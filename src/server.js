const express = require('express')
const cors = require('cors')
const { PORT } = require('./utils/config')
const modules = require('./modules/modules.js')




const app = express()
app.use(express.json())
app.use(cors())
app.use(modules)
app.use((error, req, res, next) => {
    return res.send({ error: error.error?.message || error.message || 'ERROR!' })
})



app.listen(PORT, () => console.log(`http://localhost:${PORT}`))