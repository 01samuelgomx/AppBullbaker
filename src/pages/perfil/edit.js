import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { styles } from "../../styles/styles";
import Modal from "react-native-modal";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

// Icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function EditPerfil({ navigation, route }) {
  const { idAluno } = route.params || {};

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
  const [fotoAluno, setFotoAluno] = useState(null);

  useEffect(() => {
    const fetchAlunoData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const response = await axios.get(
          `http://127.0.0.1:8000/api/update/${idAluno}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const aluno = response.data.aluno;
        setNomeAluno(aluno.nomeAluno);
        setEmailAluno(aluno.emailAluno);
        setTelefoneAluno(aluno.telefoneAluno);
        setDataCadAluno(aluno.dataCadAluno);
        setNivelHabilidade(aluno.nivelHabilidade);
        setEstadoAluno(aluno.estadoAluno);
        setNomeCurso(aluno.nomeCurso);
        setIdCurso(aluno.idCurso);
        setDataDeNascimento(aluno.dataDeNascimento);
        setObjetivo(aluno.objetivo);
        setStatusAluno(aluno.statusAluno);
        setFotoAluno(aluno.fotoAluno);
      } catch (error) {
        console.log("Erro ao procurar dados do aluno:", error);
        setErrorMessage("Erro ao carregar dados do aluno");
        setErrorModalVisible(true);
      }
    };

    if (idAluno) {
      fetchAlunoData();
    }
  }, [idAluno]);

  const selecionarImagem = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setFotoAluno(pickerResult.uri);
  };

  const salvar = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      let updatedData = {
        nomeAluno: nomeAluno,
        emailAluno: emailAluno,
        telefoneAluno: telefoneAluno,
        dataCadAluno: dataCadAluno,
        nivelHabilidade: nivelHabilidade,
        estadoAluno: estadoAluno,
        nomeCurso: nomeCurso,
        idCurso: idCurso,
        dataDeNascimento: dataDeNascimento,
        objetivo: objetivo,
        statusAluno: statusAluno
      };

      if (fotoAluno) {
        const base64 = await FileSystem.readAsStringAsync(fotoAluno, { encoding: 'base64' });
        updatedData.fotoAluno = `data:image/jpeg;base64,${base64}`;
      }

      const response = await axios.put(
        `http://127.0.0.1:8000/api/update/${idAluno}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMessage("Dados atualizados com sucesso!");
      setSuccessModalVisible(true);

      setTimeout(() => {
        setSuccessModalVisible(false);
      }, 3000);
    } catch (error) {
      setErrorMessage("Erro ao salvar alterações!");
      setErrorModalVisible(true);

      setTimeout(() => {
        setErrorModalVisible(false);
      }, 3000);

      console.log("Erro ao salvar alterações:", error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <ImageBackground source={require("../../img/banner/perfil.png")}>
        <View style={styles.headerEdit}>
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

          <TouchableOpacity onPress={selecionarImagem} style={styles.btnCursoUm}>
            <Text style={styles.buttonText}>Editar</Text>
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
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="user" size={24} color="black" /> Nome</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={nomeAluno} 
            onChangeText={setNomeAluno} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><MaterialIcons name="email" size={24} color="black" /> Email</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={emailAluno} 
            onChangeText={setEmailAluno} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="phone" size={24} color="black" /> Telefone</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={telefoneAluno} 
            onChangeText={setTelefoneAluno} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><Entypo name="book" size={24} color="black" /> Nome do Curso</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={nomeCurso} 
            onChangeText={setNomeCurso} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="calendar-check" size={24} color="black" /> Data de cadastro</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={dataCadAluno} 
            onChangeText={setDataCadAluno} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><Ionicons name="calendar-clear" size={24} color="black" /> Data de Nascimento</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={dataDeNascimento} 
            onChangeText={setDataDeNascimento} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><AntDesign name="linechart" size={24} color="black" /> Nível de Habilidade</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={nivelHabilidade} 
            onChangeText={setNivelHabilidade} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><Ionicons name="location" size={24} color="black" /> Estado</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={estadoAluno} 
            onChangeText={setEstadoAluno} 
          />
        </View>

        <View style={styles.contInput}>
          <Text style={{ fontWeight: "700", marginTop: 14 }}><FontAwesome name="bullseye" size={24} color="black" /> Objetivo</Text>
          <TextInput 
            style={styles.inputPerfil} 
            value={objetivo} 
            onChangeText={setObjetivo} 
          />
        </View>

        <TouchableOpacity onPress={salvar} style={styles.btnEditPerfil}>
          <Text style={styles.btnCursoUm}>Salvar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Erro */}
      <Modal isVisible={errorModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: 230, height: 190, padding: 15, justifyContent: 'space-around', borderRadius: 20 }}>
            <MaterialIcons name="error" size={60} color="#c02020" />
            <Text>{errorMessage}</Text>
            <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
              <Text style={{ backgroundColor: '#361F08', borderRadius: 10, color: '#fff', padding: 8 }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Sucesso */}
      <Modal isVisible={successModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: 230, height: 190, padding: 15, justifyContent: 'space-around', borderRadius: 20 }}>
            <AntDesign name="checkcircle" size={60} color="#06bc68" />
            <Text>{successMessage}</Text>
            <TouchableOpacity onPress={() => setSuccessModalVisible(false)}>
              <Text style={{ backgroundColor: '#361F08', borderRadius: 10, color: '#fff', padding: 8 }}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}
