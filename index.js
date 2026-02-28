function createExpressServer() {
    return require("./expressServer")
}

function getAllRoutes(params) {
   
}
function saveLogs(params) {
    //save it in a local file or database
}
const app = createExpressServer()
function getAllRoutes() {
 require("./getAllRoutes")(app)
}
getAllRoutes()