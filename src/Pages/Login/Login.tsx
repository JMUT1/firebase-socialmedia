import {auth, provider} from "../../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import "./login.css"


const Login = () => {

  const navigate = useNavigate()

  const signInwithGoogle = async () => {
   const result = await signInWithPopup(auth, provider)
   console.log(result);
   navigate("/")
   
  }
  return (
    <div className="container-login">
      <p className="">Sing in with google to continue</p>
      <button onClick={signInwithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login