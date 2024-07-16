import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";

const ImgBack = require("../../img/banner/areaAluno.png");

export default function Notificacao({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image
          source={require("../../img/wave3.png")}
          style={styles.waveImage}
        />

        <View style={styles.header}>
          <Image
            source={require("./../../img/logo.png")}
            style={styles.logoHome}
          />
          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.profile}
              onPress={() => navigation.navigate("Perfil")}
            >
              {/* <Image
              style={styles.logoCursos}
              source={require("./../../img/icons/user.png")}
            /> */}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.darkmode}
              onPress={() => navigation.navigate("profile")}
            >
              <Image
                style={styles.darkmodeIcon}
                source={require("./../../img/icons/darkMode.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ContainerNotificacao}>
      <View style={styles.InputNotificacao}>
        <Image style={styles.iconNotificacao} source={require("./../../img/icons/success.png")}/>
        <View style={styles.itemNotificacao}></View>

        <View style={styles.contMsg}>
          <Text style={styles.tituloNotificacao}>Titulo Notificacao</Text>
          <Text style={styles.mensagemNotificacao}>
            Mensagem de notificacao, Mensagem de notificacao
          </Text>
        </View>
      </View>
    </View>

      </View>
    </ScrollView>
  );
}
