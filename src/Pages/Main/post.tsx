import {Post as Ipost} from "./Main"


interface Props {
    post: Ipost
}

const Post = (props: Props) => {
    const {post} = props
  return (
    <div>post</div>
  )
}

export default Post