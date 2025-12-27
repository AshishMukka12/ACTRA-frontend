import { useState } from "react";
import { requestAccess } from "./services/actraService";

function App() {
  const [res, setRes] = useState(null);
  const [userId, setUserId] = useState("user01");
  const [role, setRole] = useState("analyst");
  const [newLocation, setNewLocation] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [unknownDevice, setUnknownDevice] = useState(false);

  const handleAccess = async () => {
    const attributes = { new_location: newLocation, failed_attempts: failedAttempts, unknown_device: unknownDevice };
    const response = await requestAccess(userId, role, attributes);
    setRes(response);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>ACTRA Secure Access</h2>
      <div>
        <label>User ID: <input value={userId} onChange={e => setUserId(e.target.value)} /></label><br/>
        <label>Role: <input value={role} onChange={e => setRole(e.target.value)} /></label><br/>
        <label>New Location: <input type="checkbox" checked={newLocation} onChange={e => setNewLocation(e.target.checked)} /></label><br/>
        <label>Failed Attempts: <input type="number" value={failedAttempts} onChange={e => setFailedAttempts(Number(e.target.value))} /></label><br/>
        <label>Unknown Device: <input type="checkbox" checked={unknownDevice} onChange={e => setUnknownDevice(e.target.checked)} /></label><br/>
        <button onClick={handleAccess}>Request Access</button>
      </div>
      {res && <pre>{JSON.stringify(res, null, 2)}</pre>}
    </div>
  );
}

export default App;
