import React from "react";
import { ScrollView, Button,View, Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../../../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-web";
const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Cursos3({ navigation }) {
  return (
    <SafeAreaView contentContainerStyle={styles.dashView}>
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
          <Text style={{ fontSize: 15, fontWeight: '700', marginBottom: 20}}><MaterialCommunityIcons name="teddy-bear" size={24} color="black" />  Bonecos Incríveis</Text>
          
            <View style={{flexDirection: 'row'}}>
                <Image
                style={styles.darkmodeIcon}
                source={require("./../../../img/cakes/curso3.png")}/>

                    <View style={styles.descriContainer}>
                    <Text style={styles.titleCurso}>Oque você vai aprender?</Text>
                    <Text style={styles.txtCurso}>Aprenda a usar pasta americana e crie bolos únicos e artísticos com técnicas profissionais.</Text>

                </View>
            </View>


           <View style={styles.infoCursos}>

            <View>
                <Text style={styles.titleCurso}>Decorações extremamente profissionais</Text>
                <Text style={styles.txtCurso}>Decore bolos com pasta americana, transformando qualquer evento com designs criativos e belos.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Se torne o artista!</Text>
                <Text style={styles.txtCurso}>Saboreie bolos deliciosos com uma variedade de recheios e coberturas que combinam com pasta americana.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Benefícios</Text>
                <Text style={styles.txtCurso}>A pasta americana preserva a frescura do bolo e permite personalizações detalhadas e impressionantes.</Text>
            </View>

           </View>
                
        </View>

        </View>
    </ScrollView>
    </SafeAreaView>
  );
}
