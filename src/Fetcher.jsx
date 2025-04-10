import { useDispatch,useSelector } from "react-redux"
import { fetchPost } from "./AsyncSlice";
import { useEffect } from "react";
const Fetcher=()=>{
    const dispatch=useDispatch();
    const {status,post}=useSelector((state)=>state.post);
    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    return(
        <>
        {status==="Loading"&&<p>Loading</p>}
        {status==="Success"&&
        post.map((post)=><div key={post.key}>{post.title}</div>)
        }
        {status==="rejected"&&<p>Rejected</p>}
        </>
    )
}
export default Fetcher