const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON requests

app.post('/shipping-calculator', (req, res) => {
    const { customerAddress } = req.body;

    if (!customerAddress) {
        return res.status(400).json({ error: "Address is required" });
    }

    // Dummy response for testing
    res.json({
        best: { type: "Express", warehouse: "Delhi", cost: 150, time: 3 },
        cheapest: { type: "Standard", warehouse: "Mumbai", cost: 80 },
        fastest: { type: "Super Express", warehouse: "Bangalore", time: 1.5 }
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
