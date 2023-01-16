import { getDocs, collection, doc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { StringSchema } from "yup";
import {db} from "../../config/firebase"
import Post from "./post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

const Main = () => {
  const [postlist, setPostList] = useState <Post[] | null >(null)
  const postRef = collection(db, "posts");

  const getPosts = async()=>{
    const data = await getDocs(postRef)
    setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})) as Post[]);
  };

useEffect(()=>{getPosts()}, [])

  return (
    <div>
      {postlist?.map((post)=>(
        <Post post={post}/>
      ))}
    </div>
  )
}

export default Main