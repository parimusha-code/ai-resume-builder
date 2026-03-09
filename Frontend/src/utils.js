// Replace with your deployed backend URL
const API_URL = "https://your-backend-url.onrender.com";

// Example of using it
fetch(`${API_URL}/resume`)
  .then(res => res.json())
  .then(data => console.log(data));