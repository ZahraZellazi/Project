const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' directory

// MongoDB
mongoose.connect("mongodb+srv://zahra:zahra030702@cluster0.e6d8kvo.mongodb.net/project3A?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Schema
const itemSchema = new mongoose.Schema({
  image: String,
  url: String,
  path: String,
});

const Item = mongoose.model('Item', itemSchema);

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
  },
});

const upload = multer({ storage });

// Define routes
app.post('/items', upload.single('image'), async (req, res) => {
  const { url, path } = req.body;
  const image = req.file ? req.file.filename : null; // Retrieve filename
  const newItem = new Item({ image, url, path });

  try {
    await newItem.save();
    res.status(201).json(newItem); // Send JSON response
  } catch (error) {
    res.status(400).json({ error: error.message }); // Send error message
  }
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items); // Send JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error message
  }
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
