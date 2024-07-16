import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";

const ImgBack = require("../../img/banner/areaAluno.png");

export default function AreaAluno({ navigation }) {
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
            <Text style={styles.title}>Aproveite as melhores aulas!</Text>
            <Text style={styles.subtitle}>
              Para aproveitar as melhores receitas, assista as aulas do curso de
              confeitaria!
            </Text>
            <TouchableOpacity
              style={styles.btnCursoUm}
              onPress={() => navigation.navigate("Aula")}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ---------------- */}
        {/*     Receitas     */}
        {/* ---------------- */}

        <View style={{marginTop: 50}}>
          <View>
            <View style={{padding: 10}}>
            <Text style={styles.btnCursoDois}>Red velvet</Text>
            </View>

            <View>
              <Image source={require("./../../img/cakes/areaAluno.png")} />
            </View>

            <View style={styles.containerInfoReceita}>
              <View>
                <Text style={styles.tituloReceita}>Ingredientes</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkk </Text>
              </View>

              <View>
                <Text style={styles.tituloReceita}>Modo de preparo</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
              </View>

            </View>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <View>
            <View style={{padding: 10}}>
            <Text style={styles.btnCursoDois}>Red velvet</Text>
            </View>

            <View>
              <Image source={require("./../../img/cakes/areaAluno.png")} />
            </View>

            <View style={styles.containerInfoReceita}>
              <View>
                <Text style={styles.tituloReceita}>Ingredientes</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkk </Text>
              </View>

              <View>
                <Text style={styles.tituloReceita}>Modo de preparo</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
              </View>

            </View>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <View>
            <View style={{padding: 10}}>
            <Text style={styles.btnCursoDois}>Red velvet</Text>
            </View>

            <View>
              <Image source={require("./../../img/cakes/areaAluno.png")} />
            </View>

            <View style={styles.containerInfoReceita}>
              <View>
                <Text style={styles.tituloReceita}>Ingredientes</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkk </Text>
              </View>

              <View>
                <Text style={styles.tituloReceita}>Modo de preparo</Text>
                <Text style={styles.textoReceita}>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
              </View>

            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
