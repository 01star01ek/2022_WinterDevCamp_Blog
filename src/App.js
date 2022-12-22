import { useState } from "react";

function App() {

  
  return (
      <div className="container">
        <div>
        <label>
          <label className="form-label">Title</label>
          <input className="form-control"/>
        </label>
        </div>
        <button className="btn btn-outline-danger">포스팅</button>
      </div>
  );
}

export default App;
