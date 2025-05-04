import RequireAuth from "@/components/RequireAuth";
import AddPostView from "@/sections/add-post/add-post-view";
import React from "react";

export const metadata = {
  title: "Add Post",
};
const AddPost = () => {
  return (
    <>
      <RequireAuth>
        <AddPostView />
      </RequireAuth>
    </>
  );
};

export default AddPost;
