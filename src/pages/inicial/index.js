import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Modal from "react-native-modal";
import { styles } from "../../styles/styles";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const slides = [
  {
    key: '1',
    title: 'Olá, é um prazer te ver aqui!',
    text: 'Descubra receitas incríveis e técnicas de confeitaria com nossos cursos exclusivos.',
    image: require('./../../img/person/inicial-1.png'),
  },
  {
    key: '2',
    title: 'Receitas Deliciosas',
    text: 'Aprenda a fazer sobremesas deliciosas e surpreenda a todos.',
    image: require('./../../img/person/inicial-2.png'),
  },
  {
    key: '3',
    title: 'Cursos Exclusivos',
    text: 'Torne-se um mestre da confeitaria com nossos cursos detalhados.',
    image: require('./../../img/person/inicial-3.png'),
  },
  {
    key: '4',
    title: 'Faça Login!',
    text: '',
    image: require('./../../img/person/login.png'),
  },
];

export default function App({ navigation }) {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!email.trim() || !senha.trim()) {
      setErrorMessage("Preencha todos os campos!");
      setErrorModalVisible(true);
      return;
    }

    try {
       const resposta = await axios.post(`http://127.0.0.1:8000/api/login`, {
         email: email,
         senha: senha,
       });

      if (resposta.data) {
        const aluno = resposta.data;
        console.log(resposta.data);
        if (aluno) {
          console.log(aluno);
          console.log(aluno.usuario.dados_aluno.idAluno);
          console.log(aluno.usuario.dados_aluno.nome);
          console.log(aluno.usuario.dados_aluno.email);
          console.log(aluno.access_token);

   
          const idAluno = aluno.usuario.dados_aluno.idAluno;
          const token = aluno.access_token;

          await AsyncStorage.setItem('userToken', token);

          navigation.navigate("Home", { idAluno });
        }
      }

    } catch (error) {
      console.error("Erro ao verificar o email e a senha", error.response ? error.response.data : error.message);
      setErrorMessage("Erro ao verificar email e senha");
      setErrorModalVisible(true);
    }
  };

  const renderItem = ({ item, index }) => {
    if (index === slides.length - 1) {
      return (
        <View style={styles.inicialView} key={item.key}>
          <View style={styles.Container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.tittleDark}>{item.title}</Text>
            <View style={{ flexDirection: 'column' }}>
              <TextInput
                placeholder="Email:"
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <TextInput
                placeholder="Senha:"
                secureTextEntry={true}
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
              />
            </View>
            <CustomButton
              title="Entrar"
              onPress={handleLogin}
              buttonStyle={styles.enterBtn}
              textStyle={{ color: '#fff', fontWeight: '500' }}
            />
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate('EsqSenha')}
            >
              <Text style={{ color: '#361F08', fontWeight: '500' }}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.inicialView} key={item.key}>
          <View style={styles.Container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.text}</Text>
          </View>
        </View>
      );
    }
  };

  const renderNextButton = () => {
    if (showLogin) return null;
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome name="arrow-circle-right" size={40} color="#AAC095" />
      </View>
    );
  };

  const renderDoneButton = () => {
    if (showLogin) return null;
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome name="circle" size={24} color="#AAC095" />
      </View>
    );
  };

  const onSlideChange = (index) => {
    if (index === slides.length - 1) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        onSlideChange={onSlideChange}
        dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        activeDotStyle={{ backgroundColor: '#AAC095' }}
      />
      <Modal isVisible={errorModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff', width: 230, height: 190, padding: 15, justifyContent: 'space-around',borderRadius: 20 }}>
        <MaterialIcons name="error" size={60} color="#c02020" />
          <Text>{errorMessage}</Text>
          <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
            <Text style={{ backgroundColor: '#361F08', borderRadius: 10,color:'#fff', padding: 8}}>Fechar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </>
  );
}
