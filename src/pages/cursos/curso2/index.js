import React from "react";
import { ScrollView, Button,View, Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../../../styles/styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Cursos2({ navigation }) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{ flexGrow: 1,alignItems: "center"}}>
      
      <Image
        source={require("./../../../img/wave1.png")}
        style={styles.waveImage}/>

      <View style={styles.header}>
        <Image source={require("./../../../img/logo.png")} style={styles.logo} />

      </View>

        <View style={styles.ContCurso}>
          <Text style={{ fontSize: 15, fontWeight: '700', marginBottom: 20}}><Entypo name="cake" size={24} color="#462F19" />  Bolos Profissionais</Text>
          
            <View style={{flexDirection: 'row'}}>
                <Image
                style={styles.darkmodeIcon}
                source={require("./../../../img/cakes/curso2.png")}/>

                    <View style={styles.descriContainer}>
                    <Text style={styles.titleCurso}>Oque você vai aprender?</Text>
                    <Text style={styles.txtCurso}>Domine técnicas essenciais para criar bolos perfeitos, desde a massa até a montagem final.</Text>

                </View>
            </View>


           <View style={styles.infoCursos}>

            <View>
                <Text style={styles.titleCurso}>Decoração de Bolos</Text>
                <Text style={styles.txtCurso}>Transforme  Bolos simples em obras de arte com glacê real, pintura comestível e mais.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Recheios e coberturas</Text>
                <Text style={styles.txtCurso}>Aprenda a preparar recheios e coberturas deliciosos e inovadores para bolos irresistíveis.</Text>
            </View>

            <View>
                <Text style={styles.titleCurso}>Benefícios</Text>
                <Text style={styles.txtCurso}>Adquira habilidades profissionais, entre no mercado lucrativo e prepare-se para iniciar seu próprio negócio de confeitaria.</Text>
            </View>

           </View>
                
        </View>

        </View>
    </ScrollView>
  );
}
