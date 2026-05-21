const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('DevOps CI/CD Pipeline Working Test1 Completed!');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});