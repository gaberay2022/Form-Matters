const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const cors = require('cors');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());  // Enable CORS to allow requests from your React Native app

app.post('/upload', upload.single('video'), (req, res) => {
    const videoPath = req.file.path;
    const outputDir = `${req.file.destination}/frames-${req.file.filename}/`;

    extractFrames(videoPath, outputDir)
        .then(frames => {
            console.log('Extraction complete');
            res.json({ frames: frames });  // Send frame data or analysis results back to the client
        })
        .catch(err => {
            console.error('Error extracting frames:', err);
            res.status(500).send('Error extracting frames');
        });
});

function extractFrames(videoPath, outputDir) {
    return new Promise((resolve, reject) => {
        ffmpeg(videoPath)
            .on('end', () => resolve(outputDir))
            .on('error', (err) => reject(err))
            .screenshots({
                count: 10, // Number of frames to extract
                folder: outputDir,
                filename: 'frame-%i.jpg'
            });
    });
}

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
