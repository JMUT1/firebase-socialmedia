import { Link } from "react-router-dom"
import { auth } from "../../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"



const Navbar = () => {

  const [user] = useAuthState(auth)
  const SingUserOut = async ()=>{
    await signOut(auth)

  }



  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>


        <>
        {user && (
        <div>
          {user?.displayName}
          <img src={user?.photoURL || ""} width="100" height="100" alt="" />
          <button onClick={SingUserOut}>Log Out</button>
        </div>
        )}
        
        </>

    </div>
  )
}

export default Navbar