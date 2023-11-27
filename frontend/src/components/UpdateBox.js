import styles from "./UpdateBox.module.css";

function UpdateBox({ title, type, value, onChange, placeholder }) {
  return (
    <div>
      <p>{title}</p>
      <input
        className={styles.UpdateBox}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default UpdateBox;
