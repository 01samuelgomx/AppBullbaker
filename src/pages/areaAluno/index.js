import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ImgBack = require("../../img/banner/areaAluno.png");

export default function AreaAluno({ navigation }) {
  const [receita, setReceita] = useState([]);

  useEffect(() => {
    const fetchReceitaData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/listarReceita`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resposta.data.ReceitasAtivas);
        // Inverte a ordem das receitas
        setReceita(resposta.data.ReceitasAtivas.reverse());
      } catch (error) {
        console.log("Erro ao procurar dados das receitas.", error);
      }
    };

    fetchReceitaData();
  }, []);

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

        {/* ---------------- */}
        {/*     Receitas     */}
        {/* ---------------- */}

        <View style={{ marginTop: 80 }}>
          {/* Faça a listagem acontecer neste container! */}
          {receita.map((item) => (
            <View key={item.id} style={styles.containerReceita}>
              <View style={{ padding: 10 }}>
                <Text style={styles.btnReceita}>{item.nomeReceita}</Text>
              </View>

              <View>
                <Image style={styles.imgReceita} source={{ uri: item.fotoReceita }} />
              </View>

              <View style={styles.containerInfoReceita}>
                <View>
                  <Text style={styles.tituloReceita}>Ingredientes</Text>
                  <Text style={styles.textoReceita}>{item.ingredienteReceita}</Text>
                </View>

                <View>
                  <Text style={styles.tituloReceita}>Modo de preparo</Text>
                  <Text style={styles.textoReceita}>{item.modoPreparoReceita}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
