import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import PetNotFound from "./pages/petNotFound";
import SearchPage from "./pages/search";
import Root from "./components/root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<DetailPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="pet-details-not-found" element={<PetNotFound />} />
    </Route>,
  ),
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default function App() {
  return <RouterProvider router={router} />;
}
