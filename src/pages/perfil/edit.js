import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createAxiosInstance from "../../../api";

export default function EditPerfil({ navigation, route }) {
  const { idAluno } = route.params || {};

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
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const carregarTokenAluno = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) {
          Alert.alert(
            "Erro",
            "Token de autenticação não encontrado. Faça login novamente."
          );
          return;
        }

        const axiosInstance = await createAxiosInstance();
        const resposta = await axiosInstance.get(`/edit/${idAluno}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = resposta.data;
        setNomeAluno(data.nomeAluno);
        setEmailAluno(data.emailAluno);
        setTelefoneAluno(data.telefoneAluno);
        setDataCadAluno(data.dataCadAluno);
        setNivelHabilidade(data.nivelHabilidade);
        setEstadoAluno(data.estadoAluno);
        setNomeCurso(data.nomeCurso);
        setIdCurso(data.idCurso);
        setDataDeNascimento(data.dataDeNascimento);
        setObjetivo(data.objetivo);
        setStatusAluno(data.statusAluno);
        setFotoAluno(data.fotoAluno);
      } catch (error) {
        console.log("Erro ao procurar dados do aluno.", error);
      }
    };
    if (idAluno) {
      carregarTokenAluno();
    }
  }, [idAluno]);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Precisamos da permissão para acessar suas fotos"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setFotoAluno(result.assets[0].uri); // Atualizando o estado da foto do aluno
    }
  };

  const salvar = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        console.log(
          "Erro",
          "Token de autenticação não encontrado. Faça login novamente."
        );
        return;
      }

      const axiosInstance = await createAxiosInstance();

      const dadosAluno = {
        nomeAluno,
        emailAluno,
        telefoneAluno,
        dataCadAluno,
        nivelHabilidade,
        estadoAluno,
        nomeCurso,
        idCurso,
        dataDeNascimento,
        objetivo,
        statusAluno,
      };

      const formData = new FormData();

      for (const key in dadosAluno) {
        if (Object.hasOwnProperty.call(dadosAluno, key)) {
          formData.append(key, dadosAluno[key]);
        }
      }

      if (selectedImage) {
        formData.append("fotoAluno", {
          uri: selectedImage,
          type: "image/jpeg",
          name: "foto.jpg",
        });
      }

      await axiosInstance.post(`/update/${idAluno}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      Alert.alert("Sucesso", "Informações atualizadas com sucesso.");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao atualizar os dados do aluno:", error);
      Alert.alert("Erro", "Não foi possível atualizar as informações.");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground source={require("../../img/banner/perfil.png")}>
        <View style={styles.headerEdit}>
          {fotoAluno ? (
            <Image
              source={{ uri: selectedImage || fotoAluno }}
              onError={(error) => console.log("Erro ao carregar imagem", error)}
              style={styles.perfilImage}
            />
          ) : (
            <Text>Carregando Imagem...</Text>
          )}

          <TouchableOpacity onPress={handlePickImage}>
            <Text style={styles.btnCursoUm}>
              Perfil
              <Entypo name="pencil" size={24} color="white" />
            </Text>
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
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Nome</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Nome"
            value={nomeAluno}
            onChangeText={setNomeAluno}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Email</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Email"
            value={emailAluno}
            onChangeText={setEmailAluno}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Telefone</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Telefone"
            value={telefoneAluno}
            onChangeText={setTelefoneAluno}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Nome do Curso</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Nome do Curso"
            value={nomeCurso}
            onChangeText={setNomeCurso}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Data de Cadastro</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Data de Cadastro"
            value={dataCadAluno}
            onChangeText={setDataCadAluno}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Data de Nascimento</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Data de Nascimento"
            value={dataDeNascimento}
            onChangeText={setDataDeNascimento}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Estado</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Estado"
            value={estadoAluno}
            onChangeText={setEstadoAluno}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Nível de Habilidade</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Nível de Habilidade"
            value={nivelHabilidade}
            onChangeText={setNivelHabilidade}
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}>Objetivo</Text>
          <TextInput
            style={styles.inputPerfil}
            placeholder="Objetivo"
            value={objetivo}
            onChangeText={setObjetivo}
          />
        </View>

        <TouchableOpacity onPress={salvar} style={styles.btnCursoUm}>
          Enviar
        </TouchableOpacity>
        <Text style={{ padding: 20, color: "#fff" }}>.</Text>
      </View>
    </ScrollView>
  );
}
