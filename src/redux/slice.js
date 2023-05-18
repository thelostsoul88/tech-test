import { createSlice } from "@reduxjs/toolkit";

export const followersSlice = createSlice({
  name: "followers",
  initialState: {
    followers: [],
  },
  reducers: {
    addFollower({ followers }, { payload }) {
      followers.push(payload);
    },
    removeFollower({ followers }, { payload }) {
      followers.pop(payload);
    },
  },
});

export const { addFollower, removeFollower } = followersSlice.actions;
