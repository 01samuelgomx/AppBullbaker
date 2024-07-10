import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, ImageBackground,TouchableOpacity} from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Aula({ navigation,route }) {
  const { idCurso } = route.params;
  const [aulas, setAulas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAulaDetalhes = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/aula/${idCurso}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAulas(resposta.data);
      } catch (error) {
        console.log("Erro ao procurar detalhes da aula.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAulaDetalhes();
  }, [idCurso]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!aulas.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Nenhuma aula encontrada para este curso.</Text>
      </View>
    );
  }

  const ImgBack = require("../../img/banner/aula.png");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image
          source={require("../../img/wave3.png")}
          style={styles.waveImage}
        />

        <View style={styles.header}>
          <Image
            source={require("../../img/logo.png")}
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

        <View style={styles.contAula}>
          {aulas.map((aula, index) => (
            <View key={index} style={styles.aula}>
              <Image source={{ uri: aula.fotoAula }} style={styles.aulaImage} />
              <View style={{ padding: 8, width: 215 }}>
                <Text style={styles.cursoTittle}>{aula.nomeAula}</Text>
                <Text style={styles.cursoText}>{aula.descricaoAula}</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("Video", { idCurso: aula.idCurso })}>
                <FontAwesome6 name="play-circle" size={35} color="#3F4D42" />
                <Text style={styles.cursoText}>{aula.duracaoAula} Min</Text>
              </TouchableOpacity>


            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}