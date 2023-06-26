import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  role:'',
  id:''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
    state.token= action.payload 
  
    },
    setRole: (state, action) => {
      state.role= action.payload 
     },
     setId: (state, action) => {
      state.id= action.payload 
     },
    logout:  (state, action) => {
      return {
        ...initialState
      }
   },
  
  },
});




export const { setToken,logout,setRole,setId } = userSlice.actions;
export default userSlice.reducer;