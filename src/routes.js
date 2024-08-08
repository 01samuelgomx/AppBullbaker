import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons,Octicons } from "@expo/vector-icons"; // Importando ícones corretamente
import { styles } from "./styles/styles"; // Corrigido o caminho da importação dos estilos

//----------------------------
// Routes
//----------------------------
import Inicial from "./pages/inicial";
import EsqSenha from "./pages/esqSenha";
import Home from "./pages/home";
import AreaAluno from "./pages/areaAluno";
import Produtos from "./pages/produtos";
import Notificacao from "./pages/notificacao";
//----------------------------
// Perfil
import Perfil from "./pages/perfil";
import EditPerfil from "./pages/perfil/edit";
//----------------------------
// Cursos
import Cursos from "./pages/cursos";
import SaibaMais from "./pages/cursos/saibaMais";
//----------------------------
// Aula
import Aula from "./pages/aulas";
import Video from "./pages/aulas/video";
//----------------------------

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs({ route }) {
  console.log("idAluno:", route.params.idAluno);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          padding: 15,
          borderWidth: 0,
          backgroundColor: '#fff',
          borderTopWidth: 3,
          borderColor: '#361F08',
        },
      }}
    >
      {/* ----------------------- */}
      {/*    TABS   START   */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ idAluno: route.params.idAluno }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
              {focused ? (
               <MaterialCommunityIcons name="heart" size={28} color="#361F08"  />
              ) : (
                <MaterialCommunityIcons name="cards-heart-outline" size={28} color="#361F08"   />
              )}
            </View>
          ),
          tabBarLabel: () => null, 
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
              {focused ? (
                <MaterialCommunityIcons name="home-variant" size={28} color="#361F08" />
              ) : (
                <Octicons name="home" size={28} color="#361F08" />
              )}
            </View>
          ),
          tabBarLabel: () => null, // Não mostra o nome da aba
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.iconContainer, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
              {focused ? (
               <Ionicons name="notifications" size={28} color="#361F08" />
              ) : (
                <Ionicons name="notifications-outline" size={28} color="#361F08" />
              )}
            </View>
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />

        <Tab.Screen
          name="EditPerfil"
          component={EditPerfil}
          initialParams={{ idAluno: route.params.idAluno }}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings" size={28} color={color} />
            ),
            headerShown: false,
            tabBarButton: () => null, // Oculta a aba
          }}
        />

      <Tab.Screen
        name="AreaAluno" component={AreaAluno}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={28} color="black" />
          ),
          tabBarLabel: () => null, 
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />

      {/*    NOSSAS TABS   END   */}
      {/* -----------------------*/}

      {/* -----------------------*/}
      {/*   CURSOS TABS   START  */}

      <Tab.Screen
        name="Cursos" component={Cursos} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={28} color="black" />
          ),
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name="SaibaMais" component={SaibaMais} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={28} color="black" />
          ),
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />

      <Tab.Screen
        name="Aula" component={Aula}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={28} color="black" />
          ),
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name="Video" component={Video}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={28} color="black" />
          ),
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />

      {/*   CURSOS TABS   END  */}
      {/* ---------------------*/}

      <Tab.Screen
        name="Produtos" component={Produtos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={28} color="black" />
          ),
          tabBarButton: () => null,
          headerShown: false, 
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* ------------------------------------- */}
      {/* ----------------  Tabs -------------- */}
      <Stack.Screen name="Inicial"component={Inicial} options={{ headerShown: false }}/>
      <Stack.Screen name="EsqSenha" component={EsqSenha} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }}/>
      <Stack.Screen name="AreaAluno" component={AreaAluno} options={{ headerShown: false }}/>
      <Stack.Screen name="Produtos" component={Produtos} options={{ headerShown: false }}/>
      {/* ------------------------------------- */}
      {/* ---------------  Perfil ------------- */}
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>
      <Stack.Screen name="EditPerfil" component={EditPerfil} options={{ headerShown: false }}/>
      {/* ------------------------------------- */}
      {/* ----------------  CURSOS ------------ */}
      <Stack.Screen name="Cursos" component={Cursos} options={{ headerShown: false }}/>
      <Stack.Screen name="SaibaMais" component={SaibaMais} options={{ headerShown: false }}/>
      {/* ------------------------------------- */}
      {/* ----------------  AULAS ------------- */}
      <Stack.Screen name="Aula" component={Aula} options={{ headerShown: false }}/>
      <Stack.Screen name="Video" component={Video} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
