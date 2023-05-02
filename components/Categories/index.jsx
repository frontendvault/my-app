import Category from "./Category";
import PickupLocations from "./PickupLocations";
import PriceRange from "./PriceRange";

const CategoriesSection = ({ category, filterCategories }) => {
  return (
    <div className="bg-blue-100  border border-blue-300 p-5 rounded shadow-md mr-4 w-full md:w-[300px]">
      <PriceRange />
      <Category category={category} filterCategories={filterCategories} />
      <PickupLocations />
    </div>
  );
};

export default CategoriesSection;
