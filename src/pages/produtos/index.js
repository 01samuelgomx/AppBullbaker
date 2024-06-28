import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Produtos({ navigation }) {
  const ImgBack = require("../../img/banner/pagamento.png");
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
     <View>
      <Image
        source={require("../../img/wave2.png")}
        style={styles.waveImage}
      />

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logoHome} />

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
          style={{ width: "100%", flex: 1,alignItems: "center", justifyContent: "center",}}>
        </ImageBackground>
      </View>


        <View style={styles.produtos}>

        <View style={styles.contProdutos}>

            <TouchableOpacity  onPress={() => navigation.navigate('')}
             style={styles.produtoItem}>
            <Image source={require("../../img/cakes/produto1.png")}/>
            <Text style={{fontWeight: '700',margin: 10}}>Bolo Floresta</Text>
            <Text style={{fontSize:12,textAlign:'justify',padding: 5}}>O Bolo de Floresta Negra é perfeito para festas, unindo técnica, sabor e apresentação deslumbrante.</Text>
            <View>

              <View style={styles.produtoBtn}>
              <Text>R$50,00</Text>
               <TouchableOpacity
                onPress={() => navigation.navigate('Cursos')}
                style={styles.btnItem}>
                <Image source={require("../../img/whatsapp.png")}/>
                <Text style={{color: '#fff',fontWeight: '700'}}>Reservar</Text>
               </TouchableOpacity>
               </View>

            </View>
            </TouchableOpacity>
            
        </View>

     
        </View>

      </View>
    </ScrollView>
  );
}
