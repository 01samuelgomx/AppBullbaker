import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../../styles/styles";
import { FontAwesome5 } from "@expo/vector-icons"; // Correção na importação do ícone

export default function Aula1({ navigation }) {
  const ImgBack = require("../../../img/banner/aula.png");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image
          source={require("./../../../img/wave3.png")}
          style={styles.waveImage}
        />

        <View style={styles.header}>
          <Image
            source={require("./../../../img/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.banners}>
          <ImageBackground
            source={ImgBack}
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <View style={styles.bannerItem}>
              <Text style={styles.bannerText}>Melhores Conteúdos</Text>
              <Text style={styles.bannerSubText}>
                Dê um toque doce ao seu aprendizado!
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.contVideo}>
          <View style={styles.video}>
            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{ padding: 8 }}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>
          </View>
          <View style={styles.video}>
            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{ padding: 8 }}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>
          </View>
          <View style={styles.video}>
            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{ padding: 8 }}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>
          </View>

          <View style={styles.video}>
            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{ padding: 8 }}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
