import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPets } from "../../api/petfinder";
import Hero from "../../components/hero";
import Pet from "../../components/pet";

const SearchPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("name") || "";

  useEffect(() => {
    async function loadPets() {
      setLoading(true);
      const data = await getPets("", query);
      setPets(data);
      setLoading(false);
    }
    loadPets();
  }, [query]);

  if (loading) {
    return <h2>Loading pets...</h2>;
  }

  return (
    <div className="page">
      <Hero image="/pets-hero.png" />
      <h3>{pets.length} pets found</h3>
      <div className="grid">
        {pets.map((pet) => (
          <Pet key={pet.id} animal={pet} />
        ))}
        {pets.length === 0 && (
          <p className="prompt">No pets found for this search</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
