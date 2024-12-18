const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the React dist build directory
const DIST_DIR = path.join(__dirname, "dist");
app.use(express.static(DIST_DIR));

// Serve the React app for all routes
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5171;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
