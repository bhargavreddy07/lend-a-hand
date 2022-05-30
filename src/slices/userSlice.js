import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const userlogin=createAsyncThunk("loginuser",async(userCredentialObject,thunkApi)=>{
    let response=await axios.post("/user-api/login",userCredentialObject)
    let data=response.data
    if(data.message=='login sucessfull')
    {
        localStorage.setItem("token",data.payload)
        return data.userobj
    }
    if(data.message=='invalid username' || data.message=='invalid password')
    {
        return thunkApi.rejectWithValue(data)
    }
})

export const userSlice=createSlice({
    name:"users",
    initialState:{
        userobj:{},
        iserror:false,
        isloading:false,
        success:false,
        errmsg:""
    },
    reducers:{
        logoutuser:(state)=>{
        state.userobj={};
        state.iserror=false;
        state.isloading=false;
        state.success=false;
        state.errmsg="";
        return state;
        }
    },
    extraReducers:{
        [userlogin.pending]:(state,action)=>{
            state.isloading=true;
        },
        [userlogin.fulfilled]:(state,action)=>{
            state.userobj=action.payload;
            state.isloading=false;
            state.iserror=false;
            state.success=true;
            state.errmsg="";
        },
        [userlogin.rejected]:(state,action)=>{
            state.userobj={};
            state.isloading=false;
            state.iserror=true;
            state.success=false;
            state.errmsg=action.payload.message;
        }
    }
})
export const {logoutuser}=userSlice.actions;
export default userSlice.reducer;