import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getPetDetails } from "../../api/petfinder";
import styles from "./DetailPage.module.css";

const DetailPage = () => {
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState("/missing-animal.png");

  const { id } = useParams();

  useEffect(() => {
    async function loadPet() {
      try {
        setLoading(true);
        const data = await getPetDetails(id);
        setPetData(data);
        setImageSrc(data.photos?.[0]?.full || "/missing-animal.png");
        setError(false);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadPet();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <Navigate to="/pet-details-not-found" />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.detailContainer}>
        <img
          className={styles.image}
          src={imageSrc}
          alt={petData.name}
          onError={() => {
            setImageSrc("/missing-animal.png");
          }}
        />
        <div className={styles.content}>
          <h1>{petData.name}</h1>
          <h3>Breed</h3>
          <p>{petData.breeds.primary}</p>
          <h3>Location</h3>
          <p>
            {petData.contact.address.city}, {petData.contact.address.state}
          </p>
          <h3>Description</h3>
          <p>{petData.description || "No description available"}</p>
          <Link className="button" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
