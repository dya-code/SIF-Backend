import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { Neis } from "https://deno.land/x/neis@1.0.1/mod.ts"
const neis = new Neis({})

const app = new Application()
const router = new Router()
const port = 8000

router
  .get("/",(ctx) => {
    ctx.response.body = "SIF Backend API, Made with Neis API.";
   })

  .get("/api/info/:school", async (ctx) => {

    const school_name = ctx.params.school

    const school = await neis.getSchoolInfo({
      SCHUL_NM: school_name
    })
    
    ctx.response.body = school
   });

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`http://localhost:${port}/`)
app.listen({port: port})