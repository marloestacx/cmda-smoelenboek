import express from "express";
import * as prismicH from "@prismicio/helpers";

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Add a middleware function that runs on every route. It will inject
// the prismic context to the locals so that we can access these in
// our templates.
app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  };
  next();
});

// Routes
import { homeRoute } from "./routes/homeRoute.js";
import { catalogRoute } from "./routes/catalogRoute.js";
import { detailRoute } from "./routes/detailRoute.js";
import { searchRoute } from "./routes/searchRoute.js";
import { filterRoute } from "./routes/filterRoute.js";
import { filterSearchRoute } from "./routes/filterSearchRoute.js";
import { searchFilterRoute } from "./routes/searchFilterRoute.js";

app.use("/", homeRoute);
app.use("/catalog", catalogRoute);
app.use("/detail", detailRoute);
app.use("/search", searchRoute);
app.use("/filter", filterRoute);
app.use("/filterSearch", filterSearchRoute);
app.use("/searchFilter", searchFilterRoute);

// Listen to application port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
