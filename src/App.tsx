import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import AtomSpace from "./pages/AtomSpace";
import PLN from "./pages/PLN";
import URE from "./pages/URE";
import Attention from "./pages/Attention";
import Spacetime from "./pages/Spacetime";
import ASMoses from "./pages/ASMoses";
import Wireframe from "./pages/Wireframe";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import routes from "./tempo-routes";

function App() {
  return (
    <Suspense fallback={<p className="p-4">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Navigate to="/atomspace" replace />} />
        <Route element={<Layout />}>
          <Route path="/atomspace" element={<AtomSpace />} />
          <Route path="/pln" element={<PLN />} />
          <Route path="/ure" element={<URE />} />
          <Route path="/attention" element={<Attention />} />
          <Route path="/spacetime" element={<Spacetime />} />
          <Route path="/asmoses" element={<ASMoses />} />
          <Route path="/wireframe" element={<Wireframe />} />
          <Route path="/help" element={<Help />} />
        </Route>
        {import.meta.env.VITE_TEMPO === "true" && (
          <Route path="/tempobook/*" element={<div />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
