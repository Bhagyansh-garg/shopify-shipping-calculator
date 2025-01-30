require('dotenv').config();
const express = require('express');
const cors = require('cors');
const shippingRoutes = require('./routes/shipping');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/shipping', shippingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
