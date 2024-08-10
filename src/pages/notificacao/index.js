import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Notificacao({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotificacao, setSelectedNotificacao] = useState(null);
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
        setNotificacao(resposta.data.NotificacoesAtivas.reverse());
      } catch (error) {
        console.log("Erro ao procurar dados das notificações.", error);
      }
    };

    fetchNotificacaoData();
  }, []);

  const handleOpenModal = (notificacaoItem) => {
    setSelectedNotificacao(notificacaoItem);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedNotificacao(null);
  };

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
            ></TouchableOpacity>

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
            <TouchableOpacity onPress={() => handleOpenModal(item)} style={styles.InputNotificacao}>
              <Image
                style={styles.iconNotificacao}
                source={{ uri: item.fotoNotificacao }}
              />
              <View style={styles.itemNotificacao}></View>

              <View style={styles.contMsg}>
                <Text style={styles.tituloNotificacao}>{item.tituloNotificacao}</Text>
                <Text style={styles.mensagemNotificacao}>
                 Nova mensagem!
                </Text>
              </View>
              <Image source={require("./../../img/icons/notificacao.png")} />
            </TouchableOpacity>
          </View>
        ))}

        {/* Modal para a notificação selecionada */}
        {selectedNotificacao && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <FontAwesome name="close" size={24} color="black" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.tituloNotificacao}>{selectedNotificacao.tituloNotificacao}</Text>
                <Text style={{ textAlign: "center", marginVertical: 10, width: 260 }}>
                  {selectedNotificacao.mensagemNotificacao}
                </Text>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </ScrollView>
  );
}
