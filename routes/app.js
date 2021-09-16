const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csvtojson");
const File = require("../models/csv.model");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

var uploads = multer({ storage: storage });

router.post("/", uploads.single("csv"), async (req, res) => {
  try {
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        jsonObj = jsonObj.map((obj) => {
          obj.age = parseInt(obj.age);
          return obj;
        });
        const files = await File.insertMany(jsonObj);
        res.json(jsonObj);
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/files/:id',async (req,res)=>{
  try {
    const data=await File.findById(req.params.id)
    res.json(data)
  } catch (error) {
    
  }
})
router.delete("/files/:id", async (req, res) => {
  try {
    const data = await File.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/files/:id", async (req, res) => {
  try {
    const data = await File.findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/files", async (req, res) => {
  try {
    const data = await File.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
