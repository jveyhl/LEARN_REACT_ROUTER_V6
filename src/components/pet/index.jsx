import { Link } from "react-router-dom";
import styles from "./Pet.module.css";

// added after github pages deployment presented image load bug
import CatImage from "../../assets/images/Cat.jpeg";
import DogImage from "../../assets/images/Dog.jpeg";
import BirdImage from "../../assets/images/Bird.jpeg";
import LizardImage from "../../assets/images/Lizard.jpeg";

// added after github pages deployment presented image load bug
const localImages = {
  "Cat.jpeg": CatImage,
  "Dog.jpeg": DogImage,
  "Bird.jpeg": BirdImage,
  "Scales, Fins & Other.jpeg": LizardImage,
};

export default function Pet({ animal }) {
  return (
    <Link
      className={styles.pet}
      to={`/${animal.type.toLowerCase()}/${animal.id}`}
    >
      <div className={styles.petImageContainer}>
        {/*updated src after github pages deployment presented image load bug*/}
        <img
          className={styles.petImage}
          src={localImages[animal.localImage] || "/missing-animal.png"}
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
