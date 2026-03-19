import {readdir} from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routesDir = path.join(__dirname, "../routings")

const getRoutes = async (app: any) => {
  const routings = await readdir(routesDir);
  const filteredRoutings = routings.filter(file => file.endsWith(".js"));

  console.log(
    `routes found -> ${filteredRoutings.map(file => file.replace(".js", "")).join(", ")} = ${filteredRoutings.length}`
  )

  for (const file of filteredRoutings) {
    const modulePath = path.join(routesDir, file)
    const routeModule: any = await import("file://" + modulePath)

    app.get(routeModule.route, routeModule.action)
    
  }
}

export default getRoutes