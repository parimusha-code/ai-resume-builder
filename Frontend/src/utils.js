// Replace with your deployed backend URL
const API_URL = "https://ai-resume-builder-vpjr.onrender.com";

// Example of using it
fetch(`${API_URL}/api/resumes`)
  .then(res => res.json())
  .then(data => console.log(data));