import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from '@expo/vector-icons';

//----------------------------
// Routes
//----------------------------
import Inicial from "./pages/inicial"
import Login from "./pages/login";
import EsqSenha from "./pages/esqSenha";
import Home from "./pages/home";
import AreaAluno from "./pages/areaAluno";
import Produtos from './pages/produtos';
import Perfil from './pages/perfil';
//----------------------------
// Cursos
import Cursos from "./pages/cursos";
import Cursos1 from "./pages/cursos/curso1";
import Cursos2 from "./pages/cursos/curso2";
import Cursos3 from "./pages/cursos/cursos3";
//----------------------------
// Aula
import Aula1 from "./pages/cursos/curso1/aula";
import Aula2 from "./pages/cursos/curso2/aula";
import Aula3 from "./pages/cursos/cursos3/aula";
//----------------------------

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator sceneContainerStyle={{borderWidth: 0}}>
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" size={24} color={color} />
            ),
            headerShown: false,
            }}
      />
            <Tab.Screen
              name="Home"
              component={Home}
              sceneContainerStyle={{marginBottom: 15 }}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="home" size={30} color={color} />
                ),
                headerShown: false,
              }}
            />
      <Tab.Screen
        name="AreaAluno"
        component={AreaAluno}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="EsqSenha" component={EsqSenha} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AreaAluno" component={AreaAluno} options={{ headerShown: false }} />
      <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }} />
      {/* ------------------------------------- */}
      {/* ----------------  CURSOS ------------ */}
      <Stack.Screen name="Cursos" component={Cursos} options={{ headerShown: false }} />
      <Stack.Screen name="Cursos1" component={Cursos1} options={{ headerShown: false }} />
      <Stack.Screen name="Cursos2" component={Cursos2} options={{ headerShown: false }} />
      <Stack.Screen name="Cursos3" component={Cursos3} options={{ headerShown: false }} />
      {/* ------------------------------------- */}
      {/* ----------------  AULAS ------------- */}
      <Stack.Screen name="Aula1" component={Aula1} options={{ headerShown: false }} />
      <Stack.Screen name="Aula2" component={Aula2} options={{ headerShown: false }} />
      <Stack.Screen name="Aula3" component={Aula3} options={{ headerShown: false }} />
      {/* ------------------------------------- */}
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
