import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
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
        <View style={styles.headerEdit}>

          {/* Verificação e exibição da foto do aluno */}
          {fotoAluno ? (
            <Image
              source={{ uri: fotoAluno }}
              style={styles.perfilImage}
            />
          ) : (
            <Image
              source={require("../../img/icons/perfil.png")}
              style={styles.perfilImage}
            />
          )}

          <TouchableOpacity
            onPress={() => navigation.navigate("EditPerfil")}
            style={styles.btnCursoUm}>
            Editar
          </TouchableOpacity>
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

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="user" size={24} color="black" />Nome</Text>
          <View style={styles.inputPerfil}>{nomeAluno}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><MaterialIcons name="email" size={24} color="black" />Email</Text>
          <View style={styles.inputPerfil}>{emailAluno}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="phone" size={24} color="black" />Telefone</Text>
          <View style={styles.inputPerfil}>{telefoneAluno}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>
          <Entypo name="book" size={24} color="black" />Nome do Curso
          </Text>
          <View style={styles.inputPerfil}>{nomeCurso}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>
          <FontAwesome6 name="calendar-check" size={24} color="black" />Data de cadastro
          </Text>
          <View style={styles.inputPerfil}>{dataCadAluno}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>
          <Ionicons name="calendar-clear" size={24} color="black" />Data de Nascimento
          </Text>
          <View style={styles.inputPerfil}>{dataDeNascimento}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="plane" size={24} color="black" /> Seu Estado</Text>
          <View style={styles.inputPerfil}>{estadoAluno}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>
          <Entypo name="cake" size={24} color="black" />Nível de habilidade
          </Text>
          <View style={styles.inputPerfil}>{nivelHabilidade}</View>
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>
          <FontAwesome5 name="lightbulb" size={24} color="black" />Seu Objetivo
          </Text>
          <View style={styles.inputPerfil}>{objetivo}</View>
        </View>
      </View>
    </ScrollView>
  );
}
