import './style/App.scss';
import { Routes, Route } from "react-router-dom";
import Form from "./pages/RegistrationForm";

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
      <h1>testing</h1>
    </div>
  );
}

export default App
