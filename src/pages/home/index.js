import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground} from "react-native";
import { styles } from "../../styles/styles";

export default function Home({ navigation }) {
  const ImgBack = require("../../img/banner/home.png");
  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <Image source={require("./../../img/wave1.png")}/>

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logo} />

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
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.bannerItem}>
            <Text style={styles.bannerText}>Bem-vindo!</Text>

            <Text style={styles.bannerSubText}>Conheça nossa plataforma!</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.buttons}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cursos')}
          style={styles.buttonItem}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonTittle}>Cursos Bull Baker</Text>
            <Text style={styles.buttonText}>
              Conheça já os cursos disponíveis
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonBar}
            onPress={() => navigation.navigate('Cursos')}
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonItem2}
          onPress={() => navigation.navigate('AreaAluno')}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonTittle}>ÁREA DO ALUNO</Text>
            <Text style={styles.buttonText}>Visite sua área de aluno</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonBar2}
            onPress={() => navigation.navigate('AreaAluno')}/>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonItem3}
          onPress={() => navigation.navigate('Produtos')}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonTittle}>PRODUTOS</Text>
            <Text style={styles.buttonText}>Conheça os melhores bolos</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonBar3}
            onPress={() => navigation.navigate('Produtos')}
          />
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
