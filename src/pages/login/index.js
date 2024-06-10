import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from "../../styles/styles";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Login({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.dashView}>

          <Image source={require("./../../img/person/login.png")} />
<<<<<<< HEAD
          <Text style={styles.titleText}>Faça Login!</Text>
=======
          <Text style={styles.tittleDark}>Faça Login!</Text>
>>>>>>> 2830ee5c8e34be941bb6d28dd67dda09e78c2439

          <View style={{ flexDirection: "column" }}>
            <TextInput placeholder="Email:" style={styles.input} />
            <TextInput
              placeholder="Senha:"
              secureTextEntry={true}
              style={styles.input}
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
            onPress={() => navigation.navigate("EsqSenha")}
          >
            <Text style={{ color: "#361F08", fontWeight: '500' }}>Esqueceu a senha?</Text>
          </TouchableOpacity>

    </ScrollView>
  );
}
