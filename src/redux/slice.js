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
    removeFollower(state, { payload }) {
      state.followers = state.followers.filter(
        (follower) => follower !== payload
      );
    },
  },
});

export const { addFollower, removeFollower } = followersSlice.actions;
