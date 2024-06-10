import React from "react";
<<<<<<< HEAD
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../../styles/styles";
import { FontAwesome5 } from '@expo/vector-icons'; // Correção na importação do ícone

export default function Aula1({ navigation }) {

  const ImgBack = require("../../../img/banner/aula.png");


  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>

        <Image
          source={require("../../../img/wave3.png")}
          style={styles.waveImage}
        />

        <View style={styles.header}>
          <Image source={require("../../../img/logo.png")} style={styles.logo} />

          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.profile}
              onPress={() => navigation.navigate("profile")}
            >
              <Image
                style={styles.profileIcon}
                source={require("../../../img/icons/user.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.darkmode}
              onPress={() => navigation.navigate("profile")}
            >
              <Image
                style={styles.darkmodeIcon}
                source={require("../../../img/icons/darkMode.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.banners}>
          <ImageBackground source={ImgBack} style={{ width: "100%", flex: 1, alignItems: "center", justifyContent: "center",borderRadius: 15 }}>
            <View style={styles.bannerItem}>
              <Text style={styles.bannerText}>Melhores Conteúdos</Text>
              <Text style={styles.bannerSubText}>Dê um toque doce ao seu aprendizado!</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.contVideo}>

          <View style={styles.video}>

            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{padding: 8}}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>

          
            <FontAwesome5 name="circle-play" size={24} color="black" />
          </View>
          <View style={styles.video}>

            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{padding: 8}}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>

          
            <FontAwesome5 name="circle-play" size={24} color="black" />
          </View>
          <View style={styles.video}>

            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{padding: 8}}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>

          
            <FontAwesome5 name="circle-play" size={24} color="black" />
          </View>
          
          <View style={styles.video}>

            <Image
              source={require("../../../img/aula/aula1.png")}
              style={styles.waveImage}
            />

            <View style={{padding: 8}}>
              <Text>Aula 1</Text>
              <Text>Criando seu primeiro cookie !</Text>
            </View>

          
            <FontAwesome5 name="circle-play" size={24} color="black" />
          </View>

        </View>

      </View>

=======
import { ScrollView, Button,View, Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../../styles/styles";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Aula1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <View style={{ flexGrow: 1,alignItems: "center"}}>

      
      <Image
        source={require("./../../img/wave3.png")}
        style={styles.waveImage}
      />

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logo} />

        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => navigation.navigate("profile")}
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

   


        </View>
>>>>>>> 2830ee5c8e34be941bb6d28dd67dda09e78c2439
    </ScrollView>
  );
}
