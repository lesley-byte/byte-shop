const express = require("express");
const routes = require("./routes");
const { clog } = require("./middleware/clog");
const logo = require("asciiart-logo");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!🚀`),
      console.log(
        logo({
          name: "Byte Shop",
          font: "Electronic",
          lineChars: 10,
          padding: 2,
          margin: 3,
          borderColor: "bold-cyan",
          logoColor: "bold-blue",
          textColor: "green",
        })
          .emptyLine()
          .right(`Open for business on port ${PORT}!🚀`)
          .render()
      );
  });
});
