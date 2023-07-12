import { Route, Routes } from "react-router-dom";
import "./App.css";

import AgregarB from "./pages/alumnos/bautizos/AgregarB";
import ModificarB from "./pages/alumnos/bautizos/ModificarB";
import Bautizo from "./pages/alumnos/bautizos/Bautizos";
import ImprimirB from "./pages/alumnos/bautizos/ImprimirB";
import VisualizarB from "./pages/alumnos/bautizos/VizualizarB";
import EliminarB from "./pages/alumnos/bautizos/EliminarB";
import AgregarCom from "./pages/alumnos/comuniones/AgregarCom";
import ModificarCom from "./pages/alumnos/comuniones/ModificarCom";
import EliminarCom from "./pages/alumnos/comuniones/EliminarCom"
import VisualizarComu from "./pages/alumnos/comuniones/VisualizarCom";
import Comuniones from "./pages/alumnos/comuniones/Comuniones";
import ImprimirCom from "./pages/alumnos/comuniones/ImprimirCom";
import Confirmacion from "./pages/alumnos/confirmaciones/Confirmacion";
import VisualizarC from "./pages/alumnos/confirmaciones/VisualizarC";
import AgregarC from "./pages/alumnos/confirmaciones/AgregarC";
import ModificarC from "./pages/alumnos/confirmaciones/ModificarC";
import EliminarC from "./pages/alumnos/confirmaciones/EliminarC";
import ImprimirC from "./pages/alumnos/confirmaciones/ImprimirC";
import AgregarM from "./pages/alumnos/matrimonios/AgregarM";
import Matrimonios from "./pages/alumnos/matrimonios/Matrimonios";
import ModificarM from "./pages/alumnos/matrimonios/ModificarM";
import VisualizarM from "./pages/alumnos/matrimonios/VisualizarM";
import EliminarM from "./pages/alumnos/matrimonios/EliminarM";
import ImprimirM from "./pages/alumnos/matrimonios/ImprimirM";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BarraSuperior from "./components/BarraSuperior";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BarraSuperior />}>
          <Route index element={<Home />} />
          <Route path="bautizo">
            <Route index element={<Bautizo />} />
            <Route path="agregarb" element={<AgregarB />} />
            <Route path="eliminar/:m" element={<EliminarB />} />
            <Route path="modificar/:m" element={<ModificarB />} />
            <Route path="traer/:m" element={<VisualizarB />} />
            <Route path="traeri/:m" element={<ImprimirB />} />

          </Route>
          <Route path="comunion">
            <Route index element={<Comuniones />} />
            <Route path="agregarcom" element={<AgregarCom />} />
            <Route path="eliminar/:m" element={<EliminarCom />} />
            <Route path="modificar/:m" element={<ModificarCom />} />
            <Route path="traer/:m" element={<VisualizarComu />} />
            <Route path="traeri/:m" element={<ImprimirCom />} />
          </Route>
          <Route path="confirmacion">
            <Route index element={<Confirmacion />} />
            <Route path="agregarc" element={<AgregarC />} />
            <Route path="eliminar/:m" element={<EliminarC />} />
            <Route path="modificar/:m" element={<ModificarC />} />
            <Route path="traer/:m" element={<VisualizarC />} />
            <Route path="traeri/:m" element={<ImprimirC />} />
          </Route>
          <Route path="matrimonio">
            <Route index element={<Matrimonios />} />
            <Route path="agregarm" element={<AgregarM />} />
            <Route path="eliminar/:m" element={<EliminarM />} />
            <Route path="modificar/:m" element={<ModificarM />} />
            <Route path="traer/:m" element={<VisualizarM />} />
            <Route path="traeri/:m" element={<ImprimirM />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
