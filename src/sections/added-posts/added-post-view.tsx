"use client";
import ArticleCard from "@/components/BlogCard";
import { usePostsSliceData } from "@/hooks/reduxSlices/postsSlice/usePostsSlice";
import { ShortPost } from "@/types";
import React from "react";

const AddedPostsView = () => {
  const { addedPosts } = usePostsSliceData();
  return (
    <div className="flex flex-col h-full gap-2 p-2 overflow-y-auto">
      <div className="grid place-items-center grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 overflow-y-auto p-2 h-full">
        {addedPosts.map((item: ShortPost, index: number) => {
          return (
            <ArticleCard
              onClick={() => {}}
              key={index}
              title={item.title}
              description={item.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddedPostsView;
