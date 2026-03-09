const API_URL = "https://ai-resume-builder-vpjr.onrender.com";

export const getResumes = async () => {
  const res = await fetch(`${API_URL}/api/resumes`);
  const data = await res.json();
  return data;
};