const {readdirSync} = require('fs');
const path = "./routings/"
const routings = readdirSync(path).filter(file => file.endsWith('.js'));


module.exports = (app) => {
    console.log(`routes found => [${routings.map(file => file.replace(".js", "").replace(",", " "))}] = ${routings.length}`);
    for (const file of routings) {
        const route = require(path + file);
        app.get(route.route, (req, res) => route.action(req, res))
    }
}
