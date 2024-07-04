import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//----------------------------
// Routes
//----------------------------
import Inicial from "./pages/inicial"
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

function MyTabs({ route }) {
  console.log("idAluno:", route.params.idAluno);
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{borderWidth: 0}}}>

      {/* ----------------------- */}
      {/*    TABS   START   */}

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ idAluno: route.params.idAluno }}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={24} color="black" />
            ),
            headerShown: false,
          }} />
            
            <Tab.Screen
              name="Início"
              component={Home}
              initialParams={{ idAluno: route.params.idAluno }}
              sceneContainerStyle={{marginBottom: 15 }}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                  ),
                  headerShown: false, // Este comando oculta o botão da aba
                }}
            />

                <Tab.Screen
                  name="AreaAluno"
                  component={AreaAluno}
                  options={{
                    tabBarIcon: ({ size, color }) => (
                      <Entypo name="book" size={24} color="black" />
                    ),
                    headerShown: false, // Este comando oculta o botão da aba
                  }}
                />

      {/*    NOSSAS TABS   END   */}
      {/* -----------------------*/}


      {/* -----------------------*/}
      {/*   CURSOS TABS   START  */}

            <Tab.Screen
              name="Cursos"
              component={Cursos} // vc estava mexendo aq
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />
            <Tab.Screen
              name="Cursos1"
              component={Cursos1} // vc estava mexendo aq
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />
            <Tab.Screen
              name="Cursos2"
              component={Cursos2} // vc estava mexendo aq
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />
            <Tab.Screen
              name="Curso3"
              component={Cursos3} // vc estava mexendo aq
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />

      {/*   CURSOS TABS   END  */}
      {/* ---------------------*/}

      {/* -----------------------*/}
      {/*   AULA TABS   START    */}


            <Tab.Screen
              name="Aula1"
              component={Aula1}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />
            <Tab.Screen
              name="Aula2"
              component={Aula2}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,   headerShown: false,// Este comando oculta o botão da aba
              }}
            />
            <Tab.Screen
              name="Aula3"
              component={Aula3}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,   headerShown: false,// Este comando oculta o botão da aba
              }}
            />


      {/*   AULA TABS   END    */}
      {/* -----------------------*/}


            <Tab.Screen
              name="Produtos"
              component={Produtos}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <Entypo name="home" size={24} color="black" />
                ),
                tabBarButton: () => null,  headerShown: false, // Este comando oculta o botão da aba
              }}
            />
                  


    </Tab.Navigator>
  );

}

export default function Routes() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
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
