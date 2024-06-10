import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//----------------------------
// Routes
//----------------------------
import Inicial from "./src/pages/inicial";
import Login from "./src/pages/login";
import EsqSenha from "./src/pages/esqSenha";
import Home from "./src/pages/home";
import AreaAluno from "./src/pages/areaAluno";
import Produtos from "./src/pages/produtos";
import Perfil from "./src/pages/perfil";
//----------------------------
// Cursos
import Cursos from "./src/pages/cursos";
import Cursos1 from "./src/pages/cursos/curso1";
import Cursos2 from "./src/pages/cursos/curso2";
import Cursos3 from "./src/pages/cursos/cursos3";
//----------------------------
// Aula
import Aula1 from "./src/pages/cursos/curso1/aula";
import Aula2 from "./src/pages/cursos/curso2/aula";
import Aula3 from "./src/pages/cursos/cursos3/aula";
//----------------------------
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
