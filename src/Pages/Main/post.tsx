import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { Post as Ipost } from "./Main";

interface Props {
  post: Ipost;
}

const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth)

    const likesRef = collection(db, "likes")

const addLike = async()=>{
    await addDoc(likesRef, {userId: user?.uid , postId: post.id})
}


  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <p>@{post.username}</p>
        <button onClick={addLike}>&#128077;</button>
      </div>
    </div>
  );
};

export default Post;
