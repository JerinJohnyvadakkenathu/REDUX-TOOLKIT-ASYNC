import {createAsyncThunk ,createSlice} from "@reduxjs/toolkit"
const fetchPost=createAsyncThunk('post/fetchPosts',async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
});
const postSlice=createSlice({
    name:"post",
    initialState:{
        status:"Not available",
        post:[]
    },
    reducers:[],
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state)=>{
            state.status="Loading"
        })
        .addCase(fetchPost.fulfilled,(state)=>{
            state.status="Success"
        })
        .addCase(fetchPost.rejected,(state)=>{
            state.status="rejected"
        })
    }
})
export default postSlice.reducer;
export {fetchPost};
