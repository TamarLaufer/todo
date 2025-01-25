import { createSlice } from "@reduxjs/toolkit";

interface UserSliceType {
  id: string;
  name: string;
  password: string;
}

const initialState: UserSliceType = {
  id: "",
  name: "",
  password: "",
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
