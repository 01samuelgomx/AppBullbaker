import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// ------------------------------------
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground, StyleSheet } from "react-native-web";
import { Octicons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";

export default function Perfil({ navigation, route }) {
  const { idAluno } = route.params || {};

  console.log("Cód Aluno: ", idAluno);
  console.log(route.params);

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
  const [statusAluno, setstatusAluno] = useState("");
  const [fotoAluno, setfotoAluno] = useState("");

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
        setstatusAluno(resposta.data.dadosAluno.status);
        setfotoAluno(resposta.data.dadosAluno.foto);
      } catch (error) {
        console.log("Erro ao procurar dados do aluno.", error);
      }
    };

    if (idAluno) {
      fetchAlunoData();
    }
  }, [idAluno]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground source={require("../../img/banner/perfil.png")}>
        <View style={styles.header}>
          <Image
            source={require("../../img/icons/profile.png")}
            style={styles.profileImage}
          />

          <Text style={styles.tittle}>
            <FontAwesome5 name="user-alt" size={16} color="white" />
            {nomeAluno}
          </Text>
          <Text style={styles.tittle}>
            <MaterialCommunityIcons name="email" size={16} color="white" />
            {emailAluno}
          </Text>
          <Text style={styles.tittle}>
            <FontAwesome name="phone" size={18} color="white" />
            {telefoneAluno}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Cursos")}
            style={styles.btnCursoUm}
          >
            Editar
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.perfilDados}>
        <View style={{ flexDirection: "column",textAlign:'center' }}>
          <Text style={styles.perfiltittle}>Confira já</Text>
          <Text style={styles.perfilText}>Todos seus dados aqui</Text>
        </View>

        <View style={{ flexDirection: "column",textAlign:'center' }}>
          <Text style={styles.perfiltittle}>Faça Edição</Text>
          <Text style={styles.perfilText}>Altere suas informações</Text>
        </View>
      </View>

      <View style={styles.header}>

      <View style={styles.btnPerfil}>
      <Entypo name="book" size={24} color="black" />
      <View style={styles.textperfil}>
      <Text style={{fontWeight: '700'}}>Nome do Curso</Text>
        {nomeCurso}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <Octicons name="number" size={24} color="black" />
      <View style={styles.textperfil}>
      <Text style={{fontWeight: '700'}}>Identificador Curso</Text>
        {idCurso}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <Entypo name="calendar" size={24} color="black" />
      <View style={styles.textperfil}>
        <Text style={{fontWeight: '700'}}>Data de cadastro</Text>
        {dataCadAluno}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <Entypo name="calendar" size={24} color="black" />
      <View style={styles.textperfil}>
      <Text style={{fontWeight: '700'}}>Data de Nascimento</Text>
        {dataDeNascimento}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <FontAwesome name="plane" size={24} color="black" />
      <View style={styles.textperfil}>
        <Text style={{fontWeight: '700'}}> Seu Estado</Text>
        {estadoAluno}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <Entypo name="cake" size={24} color="black" />
      <View style={styles.textperfil}>
        <Text style={{fontWeight: '700'}}> Nível de habilidade</Text>
        {nivelHabilidade}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>

      <View style={styles.btnPerfil}>
      <FontAwesome name="lightbulb-o" size={24} color="black" />
      <View style={styles.textperfil}>
        <Text style={{fontWeight: '700'}}> Seu Objetivo</Text>
        {objetivo}
      </View>
      <MaterialIcons name="arrow-right" size={60} color="black" />
    </View>
      
      </View>
    </ScrollView>
  );
}
