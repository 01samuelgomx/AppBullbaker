import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import { SafeAreaView } from "react-native-web";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Cursos({ navigation }) {
  const ImgBack = require("../../img/banner/cursos.png");

  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <Image source={require("../../img/wave2.png")} style={styles.waveImage} />

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logo} />
        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={styles.profileIcon}
              source={require("./../../img/icons/user.png")}
            />
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
          }}
        >
          <View style={styles.bannerItem}>
            <Text style={styles.bannerText}>Aproveite as aulas</Text>
            <Text style={styles.bannerSubText}>
              Evolua seu conhecimento conosco
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.containerCurso}>
        <Image source={require("../../img/cakes/curso1.png")} />

        <View style={styles.infoCursos}>
          <Text style={styles.cursoTittle}>Cookies Perfeitos</Text>
          <Text style={styles.cursoText}>
            Descubra como fazer cookies crocantes por fora e macios por dentro,
            com sabores diversos e dicas para o resultado ideal.
          </Text>

          <View style={styles.btnCurso}>
            <CustomButton
              title="Saiba Mais"
              onPress={() => navigation.navigate("Cursos1")}
              buttonStyle={styles.btnCursoUm}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />

            <CustomButton
              title="Assistir aula"
              onPress={() => navigation.navigate("Aula1")}
              buttonStyle={styles.btnCursoDois}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerCurso}>
        <Image source={require("../../img/cakes/curso2.png")} />

        <View style={styles.infoCursos}>
          <Text style={styles.cursoTittle}>Bolos Profissionais</Text>
          <Text style={styles.cursoText}>
            Domine técnicas avançadas para preparar, montar e decorar bolos
            perfeitos, transformando sua paixão em uma carreira de sucesso.
          </Text>

          <View style={styles.btnCurso}>
            <CustomButton
              title="Saiba Mais"
              onPress={() => navigation.navigate("Cursos2")}
              buttonStyle={styles.btnCursoUm}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />

            <CustomButton
              title="Assistir aula"
              onPress={() => navigation.navigate("Aula2")}
              buttonStyle={styles.btnCursoDois}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerCurso}>
        <Image source={require("../../img/cakes/curso3.png")} />

        <View style={styles.infoCursos}>
          <Text style={styles.cursoTittle}>Arte com Pasta americana</Text>
          <Text style={styles.cursoText}>
            Aprenda a criar decorações impressionantes e sofisticadas com pasta
            americana, ideal para todos os níveis de habilidade.
          </Text>

          <View style={styles.btnCurso}>
            <CustomButton
              title="Saiba Mais"
              onPress={() => navigation.navigate("Cursos3")}
              buttonStyle={styles.btnCursoUm}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />

            <CustomButton
              title="Assistir aula"
              onPress={() => navigation.navigate("Aula3")}
              buttonStyle={styles.btnCursoDois}
              textStyle={{ color: "#fff", fontWeight: "500" }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
