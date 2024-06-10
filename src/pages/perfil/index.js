import React from "react";
import { ScrollView, Button, View, Image, Text, TouchableOpacity} from "react-native";
import { styles } from "../../styles/styles";
  // ------------------------------------
  // Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function Perfil({ navigation }) {
  return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff",}}>
      <Image
        source={require("./../../img/wave2.png")}
        style={styles.waveImage}/>

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logo} />

        <View style={styles.headerItem}>

          <TouchableOpacity
            style={styles.darkmode}
            onPress={() => navigation.navigate("profile")}>
            <Image
              style={styles.darkmodeIcon}
              source={require("./../../img/icons/darkMode.png")}/>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.profile}>
      <Image
        source={require("./../../img/icons/profile.png")}
        style={styles.waveImage}/>

      <View style={{flex: 1, textAlign: 'left',justifyContent: 'space-evenly'}}>
            <Text style={styles.profileTitle}><FontAwesome5 name="user-alt" size={24} color="black" />Samuel Oliveira</Text>
            <Text style={styles.profileText}><MaterialCommunityIcons name="email" size={24} color="black" /> samueloliveria@gmail.com</Text>
            <Text style={styles.profileText}><FontAwesome name="phone" size={24} color="black" /> 11-934291772</Text>
      </View>
        
      </View>

      <View style={styles.container}>

           <TouchableOpacity
            style={styles.profileItem}
            onPress={() => navigation.navigate("profile")}>
           <AntDesign name="star" size={24} color="#654728" />
           <Text>Aulas Favoritas</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.profileItem}
            onPress={() => navigation.navigate("profile")}>
         <FontAwesome5 name="chart-line" size={24} color="#654728" />
           <Text>Upgrade no Plano</Text>
           </TouchableOpacity>

           <TouchableOpacity
            style={styles.profileItem}
            onPress={() => navigation.navigate("Inicial")}>
          <Ionicons name="exit" size={24} color="#3F4D42" />
           <Text>Sair</Text>
           </TouchableOpacity>
          
      </View>
      
 
    </ScrollView>
  );
}
