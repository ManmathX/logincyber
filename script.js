document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            document.getElementById('message').textContent = 'Login successful!';
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').textContent = data.message || 'Login failed';
        }
    } catch (error) {
        document.getElementById('message').textContent = 'Error connecting to server';
    }
});
