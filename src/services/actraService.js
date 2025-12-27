const BACKEND_URL = "https://actra-backend.onrender.com/actra/access";

export async function requestAccess() {
  const res = await fetch(BACKEND_URL, {
    method: "POST"
  });
  return res.json();
}
