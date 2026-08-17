import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPets } from "../../api/petfinder";
import Hero from "../../components/hero";
import Pet from "../../components/pet";

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    async function loadPets() {
      setLoading(true);
      const petData = await getPets(type);
      setPets(petData);
      setLoading(false);
    }
    loadPets();
  }, [type]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero image="/pets-hero.png" displayText={type} />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : "Pets"}</span>{" "}
        available for adoption near you
      </h3>
      <div className="grid">
        {pets.map((pet) => (
          <Pet key={pet.id} animal={pet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
