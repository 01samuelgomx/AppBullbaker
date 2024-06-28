import React from "react";
import {
  ScrollView,
  Button,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/styles";
// ------------------------------------
// Icons
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Image
        source={require("./../../img/wave2.png")}
        style={styles.waveImage}
      />

      <View style={styles.header}>
        <Image source={require("./../../img/logo.png")} style={styles.logoPerfil} />

        
      </View>

      <View style={styles.profile}>
        <Image
          source={require("./../../img/icons/profile.png")}
          style={styles.perfil}
        />

        <View
          style={{ flex: 1, textAlign: "left", justifyContent: "space-evenly", marginTop: 25, }}
        >
          <Text style={styles.profileTitle}>
            <FontAwesome5 name="user-alt" size={24} color="black" />
             Vitoria
          </Text>
          <Text style={styles.profileText}>
            <MaterialCommunityIcons name="email" size={24} color="black" />{" "}
            vitoria@gmail.com
          </Text>
          <Text style={styles.profileText}>
            <FontAwesome name="phone" size={24} color="black" /> 11-999999
          </Text>
        </View>
      </View>

      <View style={styles.botaoPerfil}>
       
        <TouchableOpacity
          style={styles.profileItem}
          onPress={() => navigation.navigate("Inicial")}
        >
          <Ionicons name="exit" size={24} color="#3F4D42" />
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
