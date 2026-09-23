import { rest } from "msw";
import animals from "./data/animals.json";
import details from "./data/details.json";
import types from "./data/types.json";
// updated after github pages deployment presented image load bug
const baseUrl = import.meta.env.BASE_URL;

export const handlers = [
  rest.get(`${baseUrl}types`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(types));
  }),
  rest.get(`${baseUrl}animals`, (req, res, ctx) => {
    const type = req.url.searchParams.get("type");
    const query = req.url.searchParams.get("query");

    let response = animals.animals;

    if (type) {
      response = response.filter(
        (animal) => animal.type.toLowerCase() === type.toLowerCase(),
      );
    }
    if (query) {
      response = response.filter((animal) => {
        return (
          animal.contact.address.state
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          animal.name.toLowerCase().includes(query.toLowerCase())
        );
      });
    }
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get(`${baseUrl}animals/:id`, (req, res, ctx) => {
    const { id } = req.params;
    const response = details[id];

    if (!response) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(response));
  }),
];
