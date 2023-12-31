const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/productRouter');
app.use('/api/Techno', router);

app.get('/', (req, res) => {
    res.json({ message: 'hello' });
});

const PORT = process.env.PORT || 8080;

// Sync database and start server
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
