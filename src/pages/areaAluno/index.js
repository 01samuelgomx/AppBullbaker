import React from "react";
import { ScrollView, Button,View, Image,Text, TouchableOpacity} from "react-native";
import { styles } from "../../styles/styles";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function AreaAluno({ navigation }) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Image
        source={require("./../../img/wave3.png")}
        style={styles.waveImage}
      />

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logoHome} />

        <View style={styles.headerItem}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => navigation.navigate("profile")}
          >
            
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.darkmode}
            onPress={() => navigation.navigate("profile")}
          >
           
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contAlunoBtn}>

            <TouchableOpacity
              style={styles.AcessoAula}
              onPress={() => navigation.navigate("")}>
 
              <Image
                source={require("./../../img/person/areaAluno.png")}
                style={styles.waveImage}/>

              <View>
                <Text style={styles.tittle}>Acesse suas Aulas</Text>

                <CustomButton
                  title="Confira"
                  onPress={() => navigation.navigate('')}
                  buttonStyle={styles.btnAula}
                  textStyle={{ color: "#fff", fontWeight: '500' }}/>

              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.AcessoPro}
              onPress={() => navigation.navigate("")}>
 
              <Image
                source={require("./../../img/icons/grafico.png")}
                style={styles.waveImage}/>

              <View>
                <Text style={styles.tittle}>Acompanhe seu progresso</Text>

                <CustomButton
                  title="Confira"
                  onPress={() => navigation.navigate('')}
                  buttonStyle={styles.btnPro}
                  textStyle={{ color: "#fff", fontWeight: '500' }}/>

              </View>
            </TouchableOpacity>

        </View>
    </ScrollView>
  );
}
