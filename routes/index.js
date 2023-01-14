const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  // If no API routes are hit, send error message
  res.send(
    `<h1>Wrong Route! <strong> ${req.url} </strong> does not work!</h1>`
  );
});

module.exports = router;
