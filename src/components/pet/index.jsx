import { Link } from "react-router-dom";
import styles from "./Pet.module.css";

export default function Pet({ animal }) {
  return (
    <Link
      className={styles.pet}
      to={`/${animal.type.toLowerCase()}/${animal.id}`}
    >
      <div className={styles.petImageContainer}>
        <img
          className={styles.petImage}
          src={animal.photos?.[0]?.medium || "/missing-animal.png"}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = "/missing-animal.png")}
        />
      </div>
      <h3 className={styles.petName}>{animal.name}</h3>
      <p className={styles.petInfo}>{animal.breeds.primary}</p>
      <p className={styles.petInfo}>{animal.contact.address.state}</p>
    </Link>
  );
}
