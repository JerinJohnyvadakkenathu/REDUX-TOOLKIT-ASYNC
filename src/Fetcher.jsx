import { useDispatch,useSelector } from "react-redux"
import { fetchPost } from "./AsyncSlice";
const Fetcher=()=>{
    const dispatch=useDispatch();
    const status=useSelector((state)=>state.post);
    return(
        <>
        {status==="Loading"&&<p>Loading</p>}
        {status==="Success"&&<p>Success</p>}
        <button onClick={()=>dispatch(fetchPost())}>Fetch</button>
        </>
    )
}
export default Fetcher