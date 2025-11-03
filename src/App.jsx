import Upload from "./components/Upload";
import Predict from "./components/Perdict";

export default function App() {
  return (
    <div className="container-content text-center">
      <div className="header">
        <h1>AI-Based Plant Disease Detection System for Cambodia Farmers</h1>
      </div>
      <Upload/>
      <Predict/>
    </div>
  );
}