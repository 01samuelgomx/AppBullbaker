import React from "react";
import { ScrollView, Button,View, Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../../../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Cursos1({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.dashView}>
      <View style={{ flexGrow: 1,alignItems: "center"}}>
      
      <Image
        source={require("./../../../img/wave1.png")}
        style={styles.waveImage}/>

      <View style={styles.header}>
        <Image source={require("./../../../img/logo.png")} style={styles.logo} />

        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => navigation.navigate("Perfil")}>

            <Image
              style={styles.profileIcon}
              source={require("./../../../img/icons/user.png")}/>

          </TouchableOpacity>


          <TouchableOpacity
            style={styles.darkmode}
            onPress={() => navigation.navigate("profile")}> 

            <Image
              style={styles.darkmodeIcon}
              source={require("./../../../img/icons/darkMode.png")}/>

          </TouchableOpacity>
        </View>
      </View>

        <View style={styles.ContCurso}>
          <Text style={{ fontSize: 15, fontWeight: '700', marginBottom: 20}}><MaterialCommunityIcons name="cookie" size={24} color="#462F19" />  Cookies Perfeitos </Text>
          
            <View style={{flexDirection: 'row'}}>
                <Image
                style={styles.darkmodeIcon}
                source={require("./../../../img/cakes/curso1.png")}/>

                    <View style={styles.descriContainer}>
                    <Text style={styles.titleCurso}>Oque você vai aprender?</Text>
                    <Text style={styles.txtCurso}>Descubra os segredos para fazer cookies perfeitos! Aprenda: técnicas de massa, modelagem e assamento, além de receitas clássicas e inovadoras para impressionar a todos.</Text>

                </View>
            </View>


           <View style={styles.infoCursos}>

            <View>
                <Text style={styles.titleCurso}>Decoração de cookies</Text>
                <Text style={styles.txtCurso}>Aprenda técnicas profissionais de decoração de cookies com glacê real, glacê de manteiga e mais, criando designs únicos e saborosos.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Recheios e coberturas</Text>
                <Text style={styles.txtCurso}>Descubra recheios e coberturas irresistíveis, como ganaches, geleias e cremes, combinando sabores para cookies deliciosos.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Benefícios</Text>
                <Text style={styles.txtCurso}>Desenvolva criatividade e habilidades culinárias, trabalhando com ingredientes de qualidade para criar cookies deliciosos e até iniciar um negócio.</Text>
            </View>

           </View>
                
        </View>

        </View>
    </ScrollView>
  );
}