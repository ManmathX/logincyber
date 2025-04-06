const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock user database
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'mypassword' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => 
        u.username === username && u.password === password
    );
    
    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
