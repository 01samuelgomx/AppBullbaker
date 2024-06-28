import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from "../../styles/styles";
import { FontAwesome } from '@expo/vector-icons';

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

export default class App extends React.Component {
  state = {
    showLogin: false,
  };

  _renderItem = ({ item, index }) => {
    if (index === slides.length - 1) {
      return (
        <View style={styles.inicialView} key={item.key}>
          <View style={styles.Container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.tittleDark}>{item.title}</Text>
            <View style={{ flexDirection: 'column' }}>
              <TextInput placeholder="Email:" style={styles.input} />
              <TextInput
                placeholder="Senha:"
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <CustomButton
              title="Entrar"
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={styles.enterBtn}
              textStyle={{ color: '#fff', fontWeight: '500' }}
            />
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate('EsqSenha')}
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

  _renderNextButton = () => {
    if (this.state.showLogin) return null;
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome name="arrow-circle-right" size={40} color="#AAC095" />
      </View>
    );
  };

  _renderDoneButton = () => {
    if (this.state.showLogin) return null;
    return (
      <View style={styles.buttonCircle}>
        <FontAwesome name="circle" size={24} color="#AAC095" />
      </View>
    );
  };

  _onSlideChange = (index) => {
    if (index === slides.length - 1) {
      this.setState({ showLogin: true });
    } else {
      this.setState({ showLogin: false });
    }
  };

  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onSlideChange={this._onSlideChange}
        dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        activeDotStyle={{ backgroundColor: '#AAC095' }}
      />
    );
  }
}
