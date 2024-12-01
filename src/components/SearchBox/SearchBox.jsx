import s from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className="s.wrapper">
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
