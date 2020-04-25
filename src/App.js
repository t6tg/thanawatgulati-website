import React from "react";
import "./App.css";
import { Header, AlertTop, Footer } from "./components/index";
const JENNIE =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a33821a7-1172-4ebb-9191-390259b1e058/dchgcwo-c17773c8-52d0-468e-91a4-f4cad5efdc5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EzMzgyMWE3LTExNzItNGViYi05MTkxLTM5MDI1OWIxZTA1OFwvZGNoZ2N3by1jMTc3NzNjOC01MmQwLTQ2OGUtOTFhNC1mNGNhZDVlZmRjNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6X7_qoCkW4piBl1YF2EcdUUs3ztcunaBwhDKPY5x7R8";
const ROSE = "https://i.pinimg.com/originals/2d/c4/12/2dc412954c5dc5f0cbdd34329a45b9af.png"
function App() {
  return (
    <div>
      <AlertTop />
      <Header />
      <img src={ROSE} alt="rose" className="rose" />
      <img src={JENNIE} alt="Jennie" className="jennie" />
      <br />
      <Footer />
    </div>
  );
}

export default App;
