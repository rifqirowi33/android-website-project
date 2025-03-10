import express from "express";
import path from "path";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();
const PORT = 3333;

// Middleware Keamanan & Performa
app.use(helmet()); // Tambahkan header keamanan
app.use(compression()); // Kompresi respons
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); // Atur asal yang diizinkan (ubah sesuai kebutuhan)

// Rate Limiter untuk membatasi jumlah request
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100, // Maksimal 100 request per IP per windowMs
});
app.use(limiter);

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(import.meta.dir, "public")));

// Route untuk menangani POST request ke "/"
app.post("/", (req, res) => {
    res.json({ message: "POST request berhasil" });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});

