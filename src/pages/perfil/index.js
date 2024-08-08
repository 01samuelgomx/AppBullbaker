import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function Perfil({ navigation, route }) {
  const { idAluno } = route.params || {};

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [nomeAluno, setNomeAluno] = useState("");
  const [emailAluno, setEmailAluno] = useState("");
  const [telefoneAluno, setTelefoneAluno] = useState("");
  const [dataCadAluno, setDataCadAluno] = useState("");
  const [nivelHabilidade, setNivelHabilidade] = useState("");
  const [estadoAluno, setEstadoAluno] = useState("");
  const [nomeCurso, setNomeCurso] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [dataDeNascimento, setDataDeNascimento] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [statusAluno, setStatusAluno] = useState("");
  const [fotoAluno, setFotoAluno] = useState("");

  useEffect(() => {
    const fetchAlunoData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const resposta = await axios.get(
          `http://127.0.0.1:8000/api/perfil/${idAluno}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(resposta);
        console.log(resposta.data.nome);

        setNomeAluno(resposta.data.dadosAluno.nome);
        setEmailAluno(resposta.data.dadosAluno.email);
        setTelefoneAluno(resposta.data.dadosAluno.telefone);
        setDataCadAluno(resposta.data.dadosAluno.dataCadastro);
        setNivelHabilidade(resposta.data.dadosAluno.habilidade);
        setEstadoAluno(resposta.data.dadosAluno.estado);
        setNomeCurso(resposta.data.dadosAluno.nomeCurso);
        setIdCurso(resposta.data.dadosAluno.idCurso);
        setDataDeNascimento(resposta.data.dadosAluno.dataDeNascimento);
        setObjetivo(resposta.data.dadosAluno.objetivo);
        setStatusAluno(resposta.data.dadosAluno.status);
        setFotoAluno(resposta.data.dadosAluno.foto);
      } catch (error) {
        console.log("Erro ao procurar dados do aluno.", error);
      }
    };

    if (idAluno) {
      fetchAlunoData();
    }
  }, [idAluno]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground source={require("../../img/banner/perfil.png")}>
        <View style={styles.headerEdit}>
          {/* Verificação e exibição da foto do aluno */}
          {fotoAluno ? (
            <Image source={{ uri: fotoAluno }} style={styles.perfilImage} />
          ) : (
            <Image source={require("../../img/icons/perfil.png")} style={styles.perfilImage} />
          )}
        </View>
      </ImageBackground>

      <View style={styles.perfilDados}>
        <View style={{ flexDirection: "column", textAlign: "center" }}>
          <Text style={styles.perfiltittle}>Confira já</Text>
          <Text style={styles.perfilText}>Todos seus dados aqui</Text>
        </View>
        <View style={{ flexDirection: "column", textAlign: "center" }}>
          <Text style={styles.perfiltittle}>Faça Edição</Text>
          <Text style={styles.perfilText}>Altere suas informações</Text>
        </View>
      </View>

      <View style={styles.ContainerPerfil}>
        <Text style={styles.toptextPerfil}>Informações do perfil</Text>
        <View style={styles.contInfo}>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Seu Nome</Text>
            <Text>{nomeAluno}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Objetivo</Text>
            <Text>{objetivo}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Habilidade</Text>
            <Text>{nivelHabilidade}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Nome do Curso</Text>
            <Text>{nomeCurso}</Text>
          </View>
        </View>
      </View>

      <View style={styles.ContainerPerfil}>
        <Text style={styles.toptextPerfil}>Informações de Contato</Text>
        <View style={styles.contInfo}>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Email</Text>
            <Text>{emailAluno}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Telefone</Text>
            <Text>{telefoneAluno}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Data de nascimento</Text>
            <Text>{dataDeNascimento}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Data de cadastro</Text>
            <Text>{dataCadAluno}</Text>
          </View>
          <View style={styles.textInfoPerfil}>
            <Text style={{ color: '#3B3B3B' }}>Estado do aluno</Text>
            <Text>{estadoAluno}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("EditPerfil", { idAluno })}
          style={styles.btnEditPerfil}
        >
          Editar
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}