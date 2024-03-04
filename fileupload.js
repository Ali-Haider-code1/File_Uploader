const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' });

// User can upload one file at a time.
// app.post('/uploadsingle', upload.single('files', uploadFiles);


//  for filtering the files
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null,'/uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null,file.originalname)
//     }
// })

// const uploads = multer({
//     storage: storage,
//     fileFilter:fileFilter,
// })
// const fileFilter = function (req, file, cb) {
//     const allowdfiles = ['.jpg', '.png', '.jpeg'];
//     const validfile = allowdfiles.includes(path.extname(file.originalname).toLowerCase());
//     if (validfile) {
//         cb(null, true)
//     }
//     else {
//         cb(null, false);
//     }
// }

// User can upload any number of files at a time.
app.post("/upload", upload.any(), uploadFiles);

function uploadFiles(req, res) {
    try {
        res.json({ message: "Successfully uploaded files" });
    } catch (error) {
        res.status(500).json({ message: "Error uploading files" });
    }
}



app.get('/', (req, res) => {
    res.send("Server is Running");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
