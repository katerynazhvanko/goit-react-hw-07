import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="search"
        id={searchId}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.field}
      />
    </div>
  );
}
