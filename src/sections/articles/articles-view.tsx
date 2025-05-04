"use client";
import ArticleCard from "@/components/BlogCard";
import Empty from "@/components/Empty";
import SearchInput from "@/components/SearchInput";
import Spinner from "@/components/Spinner";
import { useDebounce } from "@/hooks/use-debounce";
import { useGetAllPostsQuery } from "@/redux/services/posts";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ArticlesView = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const {
    data,
    isFetching: isLoading,
    isError,
    refetch,
  } = useGetAllPostsQuery(debouncedSearch, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isError) toast.error("Something Wrong happened");
  }, [isError]);

  return (
    <div className="flex flex-col h-full gap-2 p-2 overflow-y-auto">
      <div className="flex justify-center ">
        <SearchInput
          onSearchChange={(val) => {
            console.log("val");

            setSearch(val);
          }}
        />
      </div>

      {data?.posts.length === 0 && !isLoading && (
        <div className="flex justify-center items-center">
          <Empty />
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center mt-[20px]">
          <Spinner />
        </div>
      ) : (
        <div className="grid place-items-center grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 overflow-y-auto p-2 h-full">
          {data?.posts.map((item) => {
            return (
              <ArticleCard
                onClick={() => {
                  router.push(`/posts/${item.id}`);
                }}
                key={item.id}
                title={item.title}
                description={item.body}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArticlesView;
