import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Home({ navigation, route }) {
  const { idAluno } = route.params || {};

  console.log("Cód Aluno: ", idAluno);
  console.log(route.params);

  const [nomeAluno, setNomeAluno] = useState("");

  useEffect(() => {
    const fetchAlunoData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(
          `http://127.0.0.1:8000/api/home/${idAluno}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setNomeAluno(resposta.data.dadosAluno.nome);
      } catch (error) {
        console.log("Erro ao procurar dados do aluno.", error);
      }
    };

    if (idAluno) {
      fetchAlunoData();
    }
  }, [idAluno]);

  const ImgBack = require("../../img/banner/home.png");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image
          source={require("../../img/wave2.png")}
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
              <Text style={styles.bannerText}>Bem-vindo!</Text>
              <Text style={styles.bannerSubText}>
                Conheça nossa plataforma!
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.buttons}>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cursos")}
            style={styles.buttonItem}>

            <Image
              style={styles.darkmodeIcon}
              source={require("./../../img/icons/chefHat.png")}
            />

            <View style={styles.buttonContent}>
              <Text style={styles.buttonTittle}>Cursos</Text>
              <Text style={styles.buttonText}>Conheça já os cursos disponíveis!</Text>
            </View>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AreaAluno")}
            style={styles.buttonItem2}>

            <Image
              style={styles.darkmodeIcon}
              source={require("./../../img/icons/cake.png")}
            />

            <View style={styles.buttonContent}>
              <Text style={styles.buttonTittle}>Area do aluno</Text>
              <Text style={styles.buttonText}>Visite sua Area de aluno</Text>
            </View>

          </TouchableOpacity>
        </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Produtos")}
            style={styles.buttonItem3}>

             <SimpleLineIcons name="book-open" size={50} color="white" />

            <View style={styles.buttonContent}>
              <Text style={styles.buttonTittle}>Produtos</Text>
              <Text style={styles.buttonText}>Veja os Melhores Bolos</Text>
            </View>

          </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
