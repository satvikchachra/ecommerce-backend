import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.json({ result: "Server is healthy" });
});

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
