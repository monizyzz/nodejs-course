const axios = require("axios");

axios
  .get("http://www.wikipedia.com")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("All done!");
  });
