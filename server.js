const express = require("express");
const path = require("path");

const app = express();
const PORT = 3333;

// Middleware untuk parsing body request (jika dibutuhkan)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, "public")));

// Route untuk menangani POST request ke "/"
app.post("/", (req, res) => {
    res.send("POST request berhasil");
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
