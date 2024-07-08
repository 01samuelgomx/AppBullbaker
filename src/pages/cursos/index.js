import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default function Cursos({ navigation }) {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursosData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/listarCursos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resposta.data.cursosAtivos); 
        setCursos(resposta.data.cursosAtivos);
      } catch (error) {
        console.log("Erro ao procurar dados dos cursos.", error);
      }
    };

    fetchCursosData();
  }, []);

  const ImgBack = require("../../img/banner/cursos.png");

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <Image source={require("../../img/wave2.png")} style={styles.waveImage} />

        <View style={styles.header}>
          <Image source={require("../../img/logo.png")} style={styles.logoHome} />
          <View style={styles.headerItem}>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Perfil")}>
              {/* <Image style={styles.logoCursos} source={require("./../../img/icons/user.png")} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.darkmode} onPress={() => navigation.navigate("profile")}>
              <Image style={styles.darkmodeIcon} source={require("../../img/icons/darkMode.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.banners}>
          <ImageBackground
            source={ImgBack}
            style={{ width: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.bannerItem}>
              <Text style={styles.bannerText}>Aproveite as aulas</Text>
              <Text style={styles.bannerSubText}>Evolua seu conhecimento conosco</Text>
            </View>
          </ImageBackground>
        </View>

        {cursos.map((curso) => (
          <View key={curso.idCurso} style={styles.containerCurso}>
            <Image source={{ uri: curso.fotoCurso }} style={styles.cursoImage} />
            <View style={styles.infoCursos}>
              <Text style={styles.cursoTittle}>{curso.nomeCurso}</Text>
              <Text style={styles.cursoText}>{curso.descricaoCurso}</Text>

              <View style={styles.btnCurso}>
                <CustomButton
                  title="Saiba Mais"
                  onPress={() => navigation.navigate("SaibaMais", { idCurso: curso.idCurso })}
                  buttonStyle={styles.btnCursoUm}
                  textStyle={{ color: "#fff", fontWeight: "500" }}
                />
                <CustomButton
                  title="Assistir aula"
                  onPress={() => navigation.navigate("Aula", { idCurso: curso.idCurso })}
                  buttonStyle={styles.btnCursoDois}
                  textStyle={{ color: "#fff", fontWeight: "500" }}
                />
              </View>
              
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
