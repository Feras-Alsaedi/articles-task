"use client";
import Empty from "@/components/Empty";
import Spinner from "@/components/Spinner";
import { useGetPostDetailsQuery } from "@/redux/services/posts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa6";

interface IProps {
  id: string;
}

const ArticleDetailsView = ({ id }: IProps) => {
  const { back } = useRouter();
  const {
    data,
    isFetching: isLoading,
    isError,
    error,
  } = useGetPostDetailsQuery(id, {
    skip: !id,
  });

  useEffect(() => {
    if (isError) toast.error(error?.data?.message ?? "Something Wrong");
  }, [isError]);

  if (isLoading)
    return (
      <div className="flex justify-center mt-[20px]">
        <Spinner />
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-col gap-2 mt-[50px] justify-center items-center">
        <Empty />
        <Link className="hover:text-blue-500" href="/posts">
          Back to Articles
        </Link>
      </div>
    );

  const { title, body, tags, reactions, views, userId } = data;

  return (
    <div className="p-[30px] bg-gray-50 w-full max-w-4xl mx-auto rounded-md shadow-md dark:bg-gray-800">
      <div className="flex items-center gap-8">
        <div
          className="hover:bg-gray-200 p-2 cursor-pointer rounded-md dark:hover:bg-gray-700"
          onClick={() => {
            back();
          }}
        >
          <FaArrowLeft className="text-gray-500" />
        </div>
        <div className="px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-400">
            Article Details
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            All Article details below
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <InfoRow label="Title" value={title} />
          <InfoRow label="Description" value={body} />
          <InfoRow label="Tags" value={tags.join(", ")} />
          <InfoRow
            label="Reactions"
            value={`👍 ${reactions.likes} / 👎 ${reactions.dislikes}`}
          />
          <InfoRow label="Views" value={views.toLocaleString()} />
          <InfoRow label="Author ID" value={`User #${userId}`} />
        </dl>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
    </dt>
    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-400">
      {value}
    </dd>
  </div>
);

export default ArticleDetailsView;
