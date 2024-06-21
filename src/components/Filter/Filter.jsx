import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchParam } from "../../Slices/paramsSlice";
import { Link } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.params);
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const resetHandler = () => {
    dispatch(setSearchParam(""));
    dispatch(setCategory(""));
  };

  return (
    <div className="flex justify-around content-center bg-landingPrimary-0 px-2">
      <div className="flex md:gap-10 gap-2">
        <Link
          to="/favourite"
          className="md:text-xl border-2 border-slate-900 rounded-md p-1"
        >
          Favourites
        </Link>
        <button
          onClick={resetHandler}
          className="md:text-xl border-2 border-slate-900 rounded-md p-1"
        >
          Reset Filters
        </button>
      </div>
      <div>
        <select
          value={category || "Category"}
          className="md:text-xl border-2 border-slate-900 rounded-md p-1"
          onChange={(event) => dispatch(setCategory(event.target.value))}
        >
          {categories.map((cate) => (
            <option key={cate} value={cate}>
              {cate}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
