import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SaibaMais({ route, navigation }) {
  const { idCurso } = route.params;
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    const fetchCursoDetalhes = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/saibaMais/${idCurso}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resposta.data);
        setCurso(resposta.data);
      } catch (error) {
        console.log("Erro ao procurar detalhes do curso.", error);
      }
    };

    fetchCursoDetalhes();
  }, [idCurso]);

  if (!curso) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image source={require("../../img/wave1.png")} style={styles.waveImage} />

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

        <View style={styles.ContCurso}>
          <Text style={{ fontSize: 15, fontWeight: '700', marginBottom: 20 }}>
            <MaterialCommunityIcons name="cookie" size={24} color="#462F19" />
            {curso.nomeCurso}
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: curso.fotoCurso }} style={styles.cursoImage} />

            <View style={styles.descriContainer}>
              <Text style={styles.titleCurso}>O que você vai aprender?</Text>
              <Text style={styles.txtCurso}>{curso.aprendeDescriCursos}</Text>
            </View>
          </View>

          <View style={styles.infoCursos}>
            <View>
              <Text style={styles.titleCurso}>{curso.tituloUmCurso}</Text>
              <Text style={styles.txtCurso}>{curso.descriumCurso}</Text>
            </View>

            <View>
              <Text style={styles.titleCurso}>{curso.tituloDoisCurso}</Text>
              <Text style={styles.txtCurso}>{curso.descriDoisCurso}</Text>
            </View>

            <View>
              <Text style={styles.titleCurso}>{curso.tituloTresCurso}</Text>
              <Text style={styles.txtCurso}>{curso.descriTresCurso}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
