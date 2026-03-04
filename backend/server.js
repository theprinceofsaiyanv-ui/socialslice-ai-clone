import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/auth", require("./routes/auth"));
app.use("/stripe", require("./routes/stripe"));
app.use("/youtube", require("./routes/youtube"));
app.use("/clips", require("./routes/clips"));
app.use("/instagram", require("./routes/instagram"));
app.use("/tiktok", require("./routes/tiktok"));

app.listen(5000, () => console.log("API running"));
