import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPetTypes } from "../../api/petfinder";
import Logo from "../../assets/logo_new.svg";
import Search from "../search";

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      try {
        const { types } = await getPetTypes();
        setPetTypes(types);
      } catch (error) {
        console.error(error);
      }
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Adopt-A-Pet!" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            All Pets
          </NavLink>
        </li>
        {petTypes.length > 0
          ? petTypes.map((type) => (
              <li key={type.name}>
                <NavLink
                  to={`/${type._links.self.href.split("/").pop()}`}
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }
                >
                  {type.name}s
                </NavLink>
              </li>
            ))
          : "Loading..."}
      </ul>
    </nav>
  );
};

export default Navigation;
