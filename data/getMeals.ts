import { Neis } from "https://deno.land/x/neis@1.0.1/mod.ts"
const neis = new Neis({})

export async function getSchoolMeal ( school_name: string ) {
  const school = await neis.getSchoolInfo({
    SCHUL_NM: school_name
  })



  const { ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE } = school.schools[0]

  const meal = await neis.getMealServiceDietInfo({
    ATPT_OFCDC_SC_CODE: ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE: SD_SCHUL_CODE,
  })

  return meal
}