import ArticleDetailsView from "@/sections/articles/article-details-view";
import React from "react";

export const metadata = {
  title: "Article details",
};

export default async function ArticleDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex justify-center mt-[20px] mb-[30px]">
      <ArticleDetailsView id={id} />
    </div>
  );
}
