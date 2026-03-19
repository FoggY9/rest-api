import express from 'express'
import cors from 'cors'
const app = express()
const port = 3200

//allow cors
app.use(cors({
    origin: "*"
}))

// Scanning routes and registering them to the express server
import registerRoutes from "./get-routes.js";
registerRoutes(app);


app.listen(port, ()=> {
    console.log(`rest-api running on port ${port}`)
})

export default app;
