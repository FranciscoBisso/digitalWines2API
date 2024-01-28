import express from "express";
import dotenv from "dotenv";
import winesRouter from "./routes/winesRouter.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.use(express.static("public"));

// ↓ Routing system ↓
app.use("/wines", winesRouter);

app.listen(port, () => {
	console.log(`App listening in port: ${port}!`);
});
