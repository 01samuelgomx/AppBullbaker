import React from "react";
import {
  ScrollView,
  Button,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../styles/styles";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function EsqSenha({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.dashView}>
     <Image source={require("./../../img/background/esqBackground.png")} style={{width: '100%'}}/>
        <Text style={{ color: "#361F08", fontSize: 24, margin: 20, fontWeight: "bold" }}>
          Confirme seus dados
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={styles.input} placeholder='Nome:' />
          <TextInput style={styles.input} placeholder='Data Nascimento:' />
          <TextInput style={styles.input} placeholder='Telefone:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput style={styles.input} placeholder='Email:' />
          <TextInput secureTextEntry={true} style={styles.input} placeholder='Nova Senha:' />
          <TextInput secureTextEntry={true} style={styles.input} placeholder='Confirmar Senha:' />
        </View>

        <TouchableOpacity
          style={styles.enterBtn}
          onPress={() => navigation.navigate("Home")} title="Entrar">
          <Text style={{ color: "#fff", fontWeight: '500' }}> Entrar </Text>
        </TouchableOpacity>

    </ScrollView>
  );
}
