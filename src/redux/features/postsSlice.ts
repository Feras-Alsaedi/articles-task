import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, ShortPost } from "@/types";

interface PostsState {
  addedPosts: ShortPost[];
}

const initialState: PostsState = {
  addedPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<ShortPost>) => {
      state.addedPosts.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
