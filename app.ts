import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { getSchoolInfo } from "./data/GetSchool.ts"
import { getSchoolMeal } from "./data/GetMeal.ts"

const app = new Application()
const router = new Router()
const port = 8000

router
  .get("/",(ctx) => {
    ctx.response.body = "SIF Backend API, Made with Neis API.";
  })

  .get("/api/info/:school", async (ctx) => {
    const school_name = ctx.params.school
    
    ctx.response.body = await getSchoolInfo(school_name)
  })

  .get("/api/meal/:school", async (ctx) => {
    const school_name = ctx.params.school

    ctx.response.body = await getSchoolMeal(school_name)
  })

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`http://localhost:${port}/`)
app.listen({port: port})