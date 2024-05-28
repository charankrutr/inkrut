const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const EMAILS_FOLDER = path.join(__dirname, 'emails');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

// Submit email route
app.post('/submit-email', (req, res) => {
  const { email } = req.body;
  const timestamp = new Date().toISOString();
  const emailEntry = `${email}, ${timestamp}\n`;

  const filename = path.join(EMAILS_FOLDER, `${timestamp}.txt`);

  fs.writeFile(filename, emailEntry, { flag: 'wx' }, (err) => {
    if (err) {
      console.error('Error writing email to file:', err);
      return res.status(500).send('Error submitting email');
    }
    console.log('Email saved successfully:', emailEntry);
    res.status(200).send('Email submitted successfully');
  });
});

// Leads route
app.get('/leads', (req, res) => {
  fs.readdir(EMAILS_FOLDER, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).send('Error fetching leads');
    }

    const emailsByDateTime = {};

    files.forEach((file) => {
      const filepath = path.join(EMAILS_FOLDER, file);
      const stats = fs.statSync(filepath);
      const timestamp = stats.birthtime; // Get file creation timestamp (local time)
      const dateKey = timestamp.toLocaleDateString(); // Group by date
      const timeKey = timestamp.toLocaleTimeString(); // Group by time

      if (!emailsByDateTime[dateKey]) {
        emailsByDateTime[dateKey] = {};
      }
      if (!emailsByDateTime[dateKey][timeKey]) {
        emailsByDateTime[dateKey][timeKey] = [];
      }

      const email = fs.readFileSync(filepath, 'utf8').trim();
      emailsByDateTime[dateKey][timeKey].push(email);
    });

    // Render the emails grouped by date-time into a table
    let tableHtml = '<html><body><table border="1">';
    for (const dateKey in emailsByDateTime) {
      tableHtml += `<tr><th colspan="2">${dateKey}</th></tr>`;
      for (const timeKey in emailsByDateTime[dateKey]) {
        tableHtml += `<tr><td>${timeKey}</td><td>${emailsByDateTime[dateKey][timeKey].join('<br>')}</td></tr>`;
      }
    }
    tableHtml += '</table></body></html>';

    res.send(tableHtml);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

