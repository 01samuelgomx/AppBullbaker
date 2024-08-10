import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, Modal, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ImgBack = require("../../img/banner/areaAluno.png");

export default function AreaAluno({ navigation }) {
  const [receita, setReceita] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReceita, setSelectedReceita] = useState(null);

  useEffect(() => {
    const fetchReceitaData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(`http://127.0.0.1:8000/api/listarReceita`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setReceita(resposta.data.ReceitasAtivas.reverse());
      } catch (error) {
        console.log("Erro ao procurar dados das receitas.", error);
      }
    };

    fetchReceitaData();
  }, []);

  const openModal = (item) => {
    setSelectedReceita(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReceita(null);
  };

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
            />
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
            <Text style={styles.titleReceita}>Aproveite as melhores aulas!</Text>
            <Text style={styles.subtitleReceita}>
              Para aproveitar as melhores receitas, assista as aulas do curso de
              confeitaria!
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 100 }}>
          {receita.map((item) => (
            <View key={item.id} style={styles.receita}>
              <Image source={{ uri: item.fotoReceita }} style={styles.imgReceita} />
              <View style={{ padding: 20, width: 215 }}>
                <Text style={styles.cursoTittle}>{item.nomeReceita}</Text>
                <Text style={styles.cursoText}>Confira nossa Receita!</Text>
              </View>

              {/* Botão que abre o modal */}
              <TouchableOpacity onPress={() => openModal(item)} style={styles.btnReceita}>
                <MaterialCommunityIcons name="arrow-right-bold" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ))}

          {selectedReceita && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={closeModal}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={closeModal}>
                      <FontAwesome name="close" size={24} color="black" />
                    </TouchableOpacity>
                  </View>

                  <Image source={{ uri: selectedReceita.fotoReceita }} style={styles.imgReceita} />
                  <Text style={styles.modalText}>{selectedReceita.nomeReceita}</Text>

                  <View style={styles.infoReceita}>
                    
                    <View style={styles.itemReceita}>
                      <Text style={styles.titleReceita}>Modo de Preparo</Text>
                      <Text style={{maxWidth: 140}}>
                        {selectedReceita.modoPreparoReceita}
                      </Text>
                    </View>

                    <View style={styles.itemReceita}>
                      <Text style={styles.titleReceita}>Ingredientes</Text>
                      <Text style={{maxWidth: 140}}>
                        {selectedReceita.ingredienteReceita}
                      </Text>
                    </View>

                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
