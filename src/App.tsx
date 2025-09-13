// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Destinos from "./pages/Destinos";
import TiposDeViagem from "./pages/TiposDeViagem";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/tipos-de-viagem" element={<TiposDeViagem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
