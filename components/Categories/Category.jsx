import React from "react";

const Category = ({ category, filterCategories }) => {
  return (
    <>
      <div className="py-5">
        <h4 className="mb-4 font-semibold">Categories</h4>
        {category.map((cate) => {
          return (
            <button
              className="bg-white rounded-full shadow text-blue-500 px-4 py-1 mr-2 mb-2 hover:bg-blue-500 hover:text-white"
              onClick={() => filterCategories(cate)}
            >
              {cate}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Category;
