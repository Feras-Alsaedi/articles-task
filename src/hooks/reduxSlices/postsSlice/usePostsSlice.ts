"use client";

import { addPost } from "@/redux/features/postsSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";

export const usePostsSliceData = () => {
  const dispatch = useAppDispatch();
  let addedPosts: any = useAppSelector(
    (state: RootState) => state.posts.addedPosts
  );

  const handleAddPost = (data: { title: string; body: string }) => {
    dispatch(addPost({ ...data }));
  };

  return {
    addedPosts,
    handleAddPost,
  };
};
