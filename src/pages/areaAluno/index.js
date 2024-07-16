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

// const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
//       <Text style={[styles.text, textStyle]}>{title}</Text>
//     </TouchableOpacity>
//   );
// };
const ImgBack = require("../../img/banner/areaAluno.png");

export default function AreaAluno({ navigation }) {
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
              <Text style={styles.bannerText}>Receitas Exclusivas</Text>
              <Text style={styles.bannerSubText}>
                Aproveite algumas receitas
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.btnAreaAluno}>
          <Image
            style={styles.personAreaAluno}
            source={require("./../../img/person/areaAluno.png")}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>Aproveite as melhores aulas!</Text>
            <Text style={styles.subtitle}>
              Para aproveitar as melhores receitas, assista as aulas do curso de
              confeitaria!
            </Text>
            <TouchableOpacity
              style={styles.btnCursoUm}
              onPress={() => navigation.navigate("Aula")}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <view>
          <View>
            <Text></Text>

            <Image
              style={styles.personAreaAluno}
              source={require("./../../img/cakes/areaAluno.png")}
            />

            <View>
              <View>
                <Text>Ingredientes</Text>
                <Text></Text>
              </View>

              <View>
                <Text>Modo de preparo</Text>
                <Text></Text>
              </View>
            </View>
          </View>
        </view>
      </View>
    </ScrollView>
  );
}
