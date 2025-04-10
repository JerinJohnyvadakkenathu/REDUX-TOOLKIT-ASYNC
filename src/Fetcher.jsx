import { useDispatch,useSelector } from "react-redux"
import { fetchPost } from "./AsyncSlice";
import { useEffect } from "react";
const Fetcher=()=>{
    const dispatch=useDispatch();
    const status=useSelector((state)=>state.post);
    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    return(
        <>
        {status==="Loading"&&<p>Loading</p>}
        {status==="Success"&&
        status.map((state)=><div key={state.key}>{state.title}</div>)
        }
        
        </>
    )
}
export default Fetcher