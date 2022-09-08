import React from 'react'
import { useEffect } from 'react'


const Login = () => {

  function handleCallbackResponse(response){
    console.log(response.credentials);
  }

  useEffect( () =>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "141969149273-o3ecgejgptobev5v12f1nbpng43tru6i.apps.googleusercontent.com",
      callback: handleCallbackResponse()
    })

    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      { theme: "outline", size: "large"}
    ) 


  }, [])


  return (
    <div id='SignIn'>
      
    </div>
  )
}

export default Login