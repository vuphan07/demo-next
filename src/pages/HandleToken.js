import {useRouter} from "next/router"
import React from "react"


const  HandleToken = () => {
  const router = useRouter()
  const {type} = router.query
  switch (type) {
    case "create":
      localStorage.setItem('SENKYO_PREVIEW_DATA', JSON.stringify(router.query))
      break
    case "delete":
      localStorage.removeItem('SENKYO_PREVIEW_DATA')
      break
    default:
      break
  }
  return <div style={{width: 20, height: 20, backgroundColor:'red'}}>123456</div>
}

export default HandleToken;
