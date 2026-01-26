const express = require("express");
const personRouter = require("./routers/person.routers");
const locationRouter = require("./routers/location.routers");
const technicalRouter = require("./routers/technical.routers");
const history_brRouter = require("./routers/history_br.routers");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(
  "/api",
  personRouter,
  locationRouter,
  technicalRouter,
  history_brRouter,
);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
