const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('I Love Papa Mummy and Palku very very much . They are my Life . DevOps CI/CD Pipeline Working Test1 Completed! ');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});