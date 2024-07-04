import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//----------------------------
// Routes
//----------------------------
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
