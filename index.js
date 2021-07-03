require("dotenv").config();
const app = require("./app");
const monGoose = require("mongoose");
const port = process.env.PORT;
const DB_Connection = process.env.DB_CONNECTION;

monGoose
    .connect(DB_Connection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(port, () => {
            console.log(`Database Connection Established\nOn port: ${port}`);
        })
    )
    .catch((error) => console.log(error.message));
