const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node App CI Pipeline!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

