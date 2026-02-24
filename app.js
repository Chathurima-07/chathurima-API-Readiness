require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const userRoutes = require("./routes/user.routes");
const swaggerSpec = require("./swagger");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// global error handler (MUST be last)
app.use(errorHandler);

module.exports = app;