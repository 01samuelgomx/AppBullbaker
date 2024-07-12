import React, { useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, Modal, ImageBackground, Linking, Alert } from "react-native";
import { styles } from "../../styles/styles";
import { AntDesign } from '@expo/vector-icons';

export default function Produtos({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const ImgBack = require("../../img/banner/pagamento.png");

  const handleWhatsAppPress = () => {
    const phoneNumber = '5511934291772'; // Substitua pelo número de telefone desejado
    const message = 'Olá, gostaria de reservar um produto.'; // Mensagem padrão (opcional)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch((err) => {
      console.error("Erro ao abrir o WhatsApp", err);
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp. Por favor, tente novamente.");
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image source={require("../../img/wave2.png")} style={styles.waveImage} />

        <View style={styles.header}>
          <Image source={require("./../../img/logo.png")} style={styles.logoHome} />
          <View style={styles.headerItem}>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Perfil")}>
              {/* Ícone de perfil comentado */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.darkmode} onPress={() => navigation.navigate("profile")}>
              <Image style={styles.darkmodeIcon} source={require("./../../img/icons/darkMode.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.banners}>
          <ImageBackground
            source={ImgBack}
            style={{ width: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
          </ImageBackground>
        </View>

        <View style={styles.produtos}>

        <View style={styles.contProdutos}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.produtoItem}>
              <Image source={require("../../img/cakes/produto1.png")} />
              <Text style={{ fontWeight: "700", margin: 10 }}>Bolo Floresta</Text>
              <Text style={{ fontSize: 12, textAlign: "center", padding: 5, width: 165 }}>
                O Bolo de Floresta Negra é perfeito para festas, unindo técnica, sabor e apresentação deslumbrante.
              </Text>

              <View style={styles.produtoBtn}>
                <Text>R$50,00</Text>
                <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                  <Image source={require("../../img/whatsapp.png")} />
                  <Text style={{ color: "#fff", fontWeight: "700",fontSize:11,fontSize:11 }}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>

              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <AntDesign name="closecircleo" size={35} color="#1b507e" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.modalText}>Bolo Floresta</Text>
                  <Image source={require("../../img/cakes/produto1.png")} 
                  style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }} />
                  <Text style={{ textAlign: "center", marginVertical: 10, width: 260 }}>
                    Descrição detalhada do Bolo Floresta e suas características únicas.
                  </Text>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                      <Image source={require("../../img/whatsapp.png")} />
                      <Text style={{ color: "#fff", fontWeight: "700",fontSize:11,fontSize:11 }}>Reservar</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </Modal>
          </View>

          <View style={styles.contProdutos}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.produtoItem}>
              <Image source={require("../../img/cakes/produto1.png")} />
              <Text style={{ fontWeight: "700", margin: 10 }}>Bolo Floresta</Text>
              <Text style={{ fontSize: 12, textAlign: "center", padding: 5, width: 165 }}>
                O Bolo de Floresta Negra é perfeito para festas, unindo técnica, sabor e apresentação deslumbrante.
              </Text>

              <View style={styles.produtoBtn}>
                <Text>R$50,00</Text>
                <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                  <Image source={require("../../img/whatsapp.png")} />
                  <Text style={{ color: "#fff", fontWeight: "700",fontSize:11,fontSize:11 }}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>

              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <AntDesign name="closecircleo" size={35} color="#1b507e" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.modalText}>Bolo Floresta</Text>
                  <Image source={require("../../img/cakes/produto1.png")} 
                  style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }} />
                  <Text style={{ textAlign: "center", marginVertical: 10, width: 260 }}>
                    Descrição detalhada do Bolo Floresta e suas características únicas.
                  </Text>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                      <Image source={require("../../img/whatsapp.png")} />
                      <Text style={{ color: "#fff", fontWeight: "700",fontSize:11,fontSize:11 }}>Reservar</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </Modal>
          </View>

        </View>
        <View style={styles.produtos}>

        <View style={styles.contProdutos}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.produtoItem}>
              <Image source={require("../../img/cakes/produto1.png")} />
              <Text style={{ fontWeight: "700", margin: 10 }}>Bolo Floresta</Text>
              <Text style={{ fontSize: 12, textAlign: "center", padding: 5, width: 165 }}>
                O Bolo de Floresta Negra é perfeito para festas, unindo técnica, sabor e apresentação deslumbrante.
              </Text>

              <View style={styles.produtoBtn}>
                <Text>R$50,00</Text>
                <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                  <Image source={require("../../img/whatsapp.png")} />
                  <Text style={{ color: "#fff", fontWeight: "700",fontSize:11 }}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>

              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <AntDesign name="closecircleo" size={35} color="#1b507e" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.modalText}>Bolo Floresta</Text>
                  <Image source={require("../../img/cakes/produto1.png")} 
                  style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }} />
                  <Text style={{ textAlign: "center", marginVertical: 10, width: 260 }}>
                    Descrição detalhada do Bolo Floresta e suas características únicas.
                  </Text>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                      <Image source={require("../../img/whatsapp.png")} />
                      <Text style={{ color: "#fff", fontWeight: "700",fontSize:11 }}>Reservar</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </Modal>
          </View>

          <View style={styles.contProdutos}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.produtoItem}>
              <Image source={require("../../img/cakes/produto1.png")} />
              <Text style={{ fontWeight: "700", margin: 10 }}>Bolo Floresta</Text>
              <Text style={{ fontSize: 12, textAlign: "center", padding: 5, width: 165 }}>
                O Bolo de Floresta Negra é perfeito para festas, unindo técnica, sabor e apresentação deslumbrante.
              </Text>

              <View style={styles.produtoBtn}>
                <Text>R$50,00</Text>
                <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                  <Image source={require("../../img/whatsapp.png")} />
                  <Text style={{ color: "#fff", fontWeight: "700",fontSize:11 }}>Reservar</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>

              <View style={styles.centeredView}>
                <View style={styles.modalView}>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <AntDesign name="closecircleo" size={35} color="#1b507e" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.modalText}>Bolo Floresta</Text>
                  <Image source={require("../../img/cakes/produto1.png")} 
                  style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 10 }} />
                  <Text style={{ textAlign: "center", marginVertical: 10, width: 260 }}>
                    Descrição detalhada do Bolo Floresta e suas características únicas.
                  </Text>

                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={handleWhatsAppPress} style={styles.btnItem}>
                      <Image source={require("../../img/whatsapp.png")} />
                      <Text style={{ color: "#fff",fontSize: 12,fontWeight: "700" }}>Reservar</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>

            </Modal>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}
