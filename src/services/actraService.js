export async function requestAccess(userId, role, attributes, resourceId="doc001") {
  const res = await fetch("https://actra-backend.onrender.com/actra/access", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, role, attributes, resourceId })
  });
  return res.json();
}
