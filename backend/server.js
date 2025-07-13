const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/compare', (req, res) => {
  res.json({ message: 'Comparison endpoint placeholder' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
