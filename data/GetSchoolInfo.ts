import { Neis } from "https://deno.land/x/neis@1.0.1/mod.ts"
const neis = new Neis({})

export async function getSchoolInfo ( school_name: string ) {
  const school = await neis.getSchoolInfo({
    SCHUL_NM: school_name
  })

  return school
}