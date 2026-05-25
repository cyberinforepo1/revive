const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const root = path.join(__dirname);

app.use(express.json({ limit: '10mb' }));
app.use(express.static(root));

app.post('/save-rules', (req, res) => {
  const payload = req.body;
  try {
    const filePath = path.join(root, 'saved_rules.json');
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
    console.log('Saved rule payload to', filePath);
    res.json({ status: 'ok', saved: 'saved_rules.json' });
  } catch (error) {
    console.error('Failed to save rules:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Revive Clinic server listening on http://localhost:${PORT}`);
});
