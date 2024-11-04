import { createServer, Model } from "miragejs";
import { dataProducts } from "./data";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,
    models: {
      product: Model,
      products: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return dataProducts;
      });
    },
  });
}
