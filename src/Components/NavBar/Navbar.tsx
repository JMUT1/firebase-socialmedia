import { Link } from "react-router-dom"
import { auth } from "../../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"
import "./Navbar.css"
import CreatePost from "../../Pages/Create-post/CreatePost"

const Navbar = () => {

  const [user] = useAuthState(auth)

  
  const SingUserOut = async ()=>{
    await signOut(auth)

  }



  return (
    <nav className="container">
        <div className="links-nav">

        <Link to="/">Home</Link>
{      !user ?  <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}        

        </div>

        <>
        {user && (
        <div className="login-data-user">
          {user?.displayName}
          <img src={user?.photoURL || ""} width="50" height="50" alt="" />
          <button onClick={SingUserOut}>Log Out</button>
        </div>
        )}
        
        </>

    </nav>
  )
}

export default Navbar