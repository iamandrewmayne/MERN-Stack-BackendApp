import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*HTTP Post we are making the HTTP Post request from here and 
not from Signin.js because logged in user details should be shared 
across the app by redux, below mentioned slice. Whereas Signup HTTP Post
request is made directly because the other components don't care if 
the user is registered or not. Logged in user needs to shared across!*/

export let promiseLifeCycle = createAsyncThunk(
  "userLogin",
  async (userCredObj, thunkApi) => {
    //HTTP Post Request
    let response = await axios.post("/user/login", userCredObj);
    let data = response.data;
    if (data.message === "success") {
      //store token in local storage
      localStorage.setItem("token", data.token);
      //return user
      return data.user;
    }
    //if creddentials are invalid
    if (
      data.message === "Invalid username" ||
      data.message === "Invalid password"
    ) {
    }
    return thunkApi.rejectWithValue(data);
  }
);

//create a slice
const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: { user: {}, isError: false, errMsg: "", isPending: false },
  reducers: {
    resetState: (state) => {
      state.user = {};
      state.isError = false;
      state.errMsg = "";
      state.isPending = false;
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [promiseLifeCycle.pending]: (state, action) => {
      state.isPending = true;
    },
    [promiseLifeCycle.fulfilled]: (state, action) => {
      console.log(("Action Obj in fulfilled is ", action));
      state.user = action.payload;
      state.isPending = false;
      state.isError = false;
      state.isSuccess = true;
      state.errMsg = "";
    },
    [promiseLifeCycle.rejected]: (state, action) => {
      console.log(("Action Obj in rejected is ", action));
      state.isError = true;
      state.user = {};
      state.errMsg = action.payload.message;
      state.isSuccess = false;
      state.isPending = false;
    },
  },
});

export default userLoginSlice.reducer;
//action creator functions
export let { resetState } = userLoginSlice.actions;
