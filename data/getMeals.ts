import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts"
import { dateToString } from "https://deno.land/x/date_format_deno@v1.1.0/mod.ts"
import { Neis } from "https://deno.land/x/neis@1.0.1/mod.ts"
const neis = new Neis({})

let meal = {}

export async function getSchoolMeal ( school_name: string ) {

  if (school_name == "포항제철중학교") school_name = "포항제철공업고등학교"

  const school = await neis.getSchoolInfo({
    SCHUL_NM: school_name
  })

  
  const { ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE } = school.schools[0]
  
  await axiod.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=d374573af8d34cddaf4e4c250b995c8c&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=${ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${SD_SCHUL_CODE}&MLSV_YMD=${dateToString("yyyyMMdd")}`)
  .then(resp => { meal = resp.data.mealServiceDietInfo[1].row[1] })  // resp.data.mealServiceDietInfo[1].row[1]
  
  return meal
}