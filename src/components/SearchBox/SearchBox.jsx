import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const handleSearch = (filter) => dispatch(changeFilter(filter));

  return (
    <div className="s.wrapper">
      <label htmlFor={searchInputId} className={s.text}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
