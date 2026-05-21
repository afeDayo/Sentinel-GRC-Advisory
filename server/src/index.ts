import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ─────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS — allow requests from the client
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:5173",
  "https://sentinel-grc-advisory.vercel.app/", // update this to your actual Vercel URL
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. Postman, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS policy: origin ${origin} not allowed`));
    },
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

// ── Routes ─────────────────────────────────────────────────────────────────────
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Sentinel GRC Advisory API is running ✅" });
});

app.use("/api/contact", contactRoutes);

// 404 fallback
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// ── Start server ───────────────────────────────────────────────────────────────
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log("🖥️  Database connected successfully");

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(
      `📧 Email service: ${process.env.EMAIL_USER ? "✅ configured" : "⚠️  not configured (set EMAIL_USER and EMAIL_PASS)"}`,
    );
  });
};

start();

export default app;
