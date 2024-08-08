import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const ImgBack = require("../../img/banner/areaAluno.png");

export default function Notificacao({ navigation }) {
  
  const [notificacao, setNotificacao] = useState([]);

  useEffect(() => {
    const fetchNotificacaoData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/listarNotificacao`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(resposta.data.NotificacoesAtivas);
        // Inverte a ordem das notificações
        setNotificacao(resposta.data.NotificacoesAtivas.reverse());
      } catch (error) {
        console.log("Erro ao procurar dados das notificações.", error);
      }
    };

    fetchNotificacaoData();
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

        {/* Listagem das notificações */}
        {notificacao.map((item) => (
          <View key={item.id} style={styles.ContainerNotificacao}>
            <View style={styles.InputNotificacao}>
              <Image
                style={styles.iconNotificacao}
                source={{ uri: item.fotoNotificacao }}
              />
              <View style={styles.itemNotificacao}></View>

              <View style={styles.contMsg}>
                <Text style={styles.tituloNotificacao}>{item.tituloNotificacao}</Text>
                <Text style={styles.mensagemNotificacao}>
                  {item.mensagemNotificacao}
                </Text>
              </View>
              <Image source={require("./../../img/icons/notificacao.png")} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
