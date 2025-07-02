const fs = require('fs').promises;
const fsSync = require('fs'); // For existsSync or callback-based checks
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
console.log("This is for testing");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/feedback', express.static('feedback'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'feedback.html');
  res.sendFile(filePath);
});


app.get('/exists', (req, res) => {
  const filePath = path.join(__dirname, 'pages', 'exists.html');
  res.sendFile(filePath);
});

app.post('/create', async (req, res) => {
  const title = req.body.title;
  const content = req.body.text;
  const adjTitle = title.toLowerCase();

  const tempFilePath = path.join(__dirname, 'temp', `${adjTitle}.txt`);
  const finalFilePath = path.join(__dirname, 'feedback', `${adjTitle}.txt`);

  try {
    await fs.writeFile(tempFilePath, content);

    if (fsSync.existsSync(finalFilePath)) {
      res.redirect('/exists');
    } else {
      await fs.copyFile(tempFilePath, finalFilePath); // Fixed typo: was `CopyFile`
      await fs.unlink(tempFilePath);
      res.redirect('/');
    }
  } catch (error) {
    console.error('Error handling file:', error);
    res.status(500).send('Server Error');
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port 80');
});
