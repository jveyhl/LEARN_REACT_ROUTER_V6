import { Link } from "react-router-dom";
import styles from "./PetNotFound.module.css";

const PetNotFound = () => {
  return (
    <div className={styles.page}>
      <h3>Pet not found.</h3>
      <img
        className={styles.image}
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt="three dogs running in confusion"
      />
      <div className={styles.actionsContainer}>
        <Link to="/" className="button">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default PetNotFound;
