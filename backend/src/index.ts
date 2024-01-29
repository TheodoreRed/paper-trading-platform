import express from "express";
import cors from "cors";
import accountRouter from "./routes/accountRouter";

// create the Express server
const app = express();

// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors());

// allow POST and PUT requests to use JSON bodies
app.use(express.json());

app.use("/account", accountRouter);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));
