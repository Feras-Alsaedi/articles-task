"use client";
import Button from "@/components/Button";
import Error from "@/components/error-message";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { usePostsSliceData } from "@/hooks/reduxSlices/postsSlice/usePostsSlice";
import { ShortPost } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddPostView = () => {
  const { push } = useRouter();
  const { handleAddPost, addedPosts } = usePostsSliceData();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  const onSubmit = (data: ShortPost) => {
    handleAddPost({ ...data });
    toast.success("Added Successfully");
  };
  return (
    <div className="flex  flex-col items-center justify-center px-6 py-2 mx-auto h-[90vh] md:h-[90vh] lg:py-0">
      <div className="w-full relative bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Link
            className="hover:text-blue-500 absolute top-0 left-0 ms-2 text-[0.7rem]"
            href="/posts"
          >
            Back to Articles
          </Link>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Add Post
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <Controller
                name="title"
                rules={{
                  required: { value: true, message: "Title is Required" },
                }}
                control={control}
                render={({ field }) => {
                  return <Input {...field} placeholder="Title" />;
                }}
              />
              <Error errors={errors} name="title" />
            </div>
            <div>
              <label
                htmlFor="body"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Body
              </label>
              <Controller
                name="body"
                rules={{
                  required: { value: true, message: "Body is Required" },
                }}
                control={control}
                render={({ field }) => {
                  return (
                    <TextArea
                      {...field}
                      placeholder="Place a Body..."
                      id="body"
                    />
                  );
                }}
              />
              <Error errors={errors} name="body" />
            </div>

            <div className="flex justify-center items-center gap-2">
              <Button text="Add" onClick={() => {}} />
              {addedPosts.length > 0 && (
                <Link
                  className=" bg-gray-200 p-2 rounded-md hover:bg-gray-300 ease-in-out duration-300 dark:bg-gray-600 dark:hover:bg-gray-500"
                  href="/added-posts"
                >
                  View Added Posts
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPostView;
