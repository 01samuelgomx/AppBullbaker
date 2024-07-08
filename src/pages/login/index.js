import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from "../../styles/styles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native-modal';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  
  const [isFocused, setIsFocused] = useState(false);

  const handleLogin = async () => {
    
    // -----------------------------------------------
    //Verifica se o email ou a senha estão preenchidos  
    if(!email.trim() || !senha.trim()){
        setErrorModalVisible(true);
        return;
      }
 
      try {
        const resposta = await axios.post(`http://127.0.0.1:8000/login?email=${email}&senha=${senha}`);
        if (resposta.data){
          const aluno = resposta.data;
          if(aluno){
            console.log(aluno);
            console.log(aluno.usuario.dados_aluno.idAluno)
            console.log(aluno.usuario.dados_aluno.nomeAluno)
            console.log(aluno.access_token)
 
            const idAluno = aluno.usuario.dados_aluno.id;
            const token = aluno.access_token;
 
            // ----------------------------------
            //Armazenar o token na memória do APP

            await AsyncStorage.setItem('userToken',token);

            navigation.navigate('Home', { idAluno });
          }
        }
      } catch (error) {
       console.error("Erro ao verificar email ou senha", error);
       setErrorModalVisible("Erro", "Erro ao verificar email e senha");
      }
  };

  return (
    <ScrollView contentContainerStyle={styles.dashView}>

          <Image source={require("./../../img/person/login.png")} />
          <Text style={styles.titleText}>Faça Login!</Text>

          <View style={{ flexDirection: "column" }}>
            
            <TextInput placeholder="Email:" style={styles.input} onChange={setEmail} />

            <TextInput
              placeholder="Senha:"
              secureTextEntry={true}
              style={styles.input}
              onChange={setSenha}
            />
          </View>

          <CustomButton
            title="Entrar"
            onPress={() => navigation.navigate("Home")}
            buttonStyle={styles.enterBtn}
            textStyle={{ color: "#fff", fontWeight: '500' }}
          />

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("EsqSenha")}>
            <Text style={{ color: "#361F08", fontWeight: '500' }}>Esqueceu a senha?</Text>
          </TouchableOpacity>

    </ScrollView>
  );
}
