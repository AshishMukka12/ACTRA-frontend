import { requestAccess } from "./services/actraService";
import { useState } from "react";

function App() {
  const [res, setRes] = useState(null);

  return (
    <div style={{ padding: 40 }}>
      <h2>ACTRA Secure Access</h2>
      <button onClick={async () => setRes(await requestAccess())}>
        Request Access
      </button>
      {res && <pre>{JSON.stringify(res, null, 2)}</pre>}
    </div>
  );
}

export default App;
