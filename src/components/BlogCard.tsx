import React from "react";

interface IProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ArticleCard = ({ title, description, onClick }: IProps) => {
  const truncatedDescription =
    description.length > 90 ? description.slice(0, 90) + "..." : description;

  return (
    <div
      onClick={onClick}
      className="flex flex-col hover:cursor-pointer min-w-[300px] max-w-[360px] h-full max-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-ellipsis break-words dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {truncatedDescription}
      </p>
    </div>
  );
};

export default ArticleCard;
