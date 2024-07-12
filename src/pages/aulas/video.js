import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, Platform } from "react-native";
import { styles } from "../../styles/styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6 } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function Video({ navigation, route }) {
  // Extraímos o idCurso dos parâmetros da rota
  const { idCurso } = route.params;
  
  // Definimos os estados para armazenar as aulas, aula selecionada e status de carregamento
  const [aulas, setAulas] = useState([]);
  const [selectedAula, setSelectedAula] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect é usado para buscar os detalhes das aulas ao montar o componente ou quando idCurso muda
  useEffect(() => {
    const fetchAulaDetalhes = async () => {
      try {
        // Obtém o token do usuário do armazenamento assíncrono
        const token = await AsyncStorage.getItem("userToken");
        // Faz uma solicitação GET para obter as aulas do curso específico
        const resposta = await axios.get(`http://127.0.0.1:8000/api/aula/${idCurso}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Define o estado das aulas com a resposta da API
        setAulas(resposta.data);
        // Define a primeira aula como a aula selecionada inicialmente
        setSelectedAula(resposta.data[0]);
      } catch (error) {
        console.log("Erro ao procurar detalhes da aula.", error);
      } finally {
        // Define o estado de carregamento como falso após a solicitação ser concluída
        setLoading(false);
      }
    };

    // Chama a função fetchAulaDetalhes
    fetchAulaDetalhes();
  }, [idCurso]);

  // Renderiza um indicador de carregamento enquanto as aulas estão sendo buscadas
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  // Renderiza uma mensagem se nenhuma aula for encontrada para o curso
  if (!aulas.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Nenhuma aula encontrada para este curso.</Text>
      </View>
    );
  }

  // Função para estilizar o iframe do vídeo
  const getStyledIframe = (htmlContent) => {
    const iframeStyle = `
      <style>
        iframe {
          width: 340px;
          height: 240px;
          border-radius: 25px;
        }
      </style>
    `;
    return `${iframeStyle} ${htmlContent}`;
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flexGrow: 1, alignItems: "center" }}>
        <Image
          source={require("../../img/wave3.png")}
          style={styles.waveImage}
        />

        <View style={styles.header}>
          <Image
            source={require("../../img/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.Video}>
          {/* Verifica se o app está rodando na web ou em um dispositivo nativo para renderizar o vídeo corretamente */}
          {Platform.OS === 'web' ? (
            <div
              style={{ width: 340, height: 240, borderRadius: 25, overflow: 'hidden' }}
              dangerouslySetInnerHTML={{ __html: getStyledIframe(selectedAula.video_aulaAula) }}
            />
          ) : (
            <WebView
              style={{ width: 340, height: 240, borderRadius: 25 }}
              source={{ html: getStyledIframe(selectedAula.video_aulaAula) }}
            />
          )}
        </View>

        <View style={styles.contAula}>
          {/* Mapeia as aulas e renderiza cada uma na lista */}
          {aulas.map((aula, index) => (
            <View
              key={index}
              // Aplica um fundo diferente se a aula for a selecionada
              style={[
                styles.aula,
                selectedAula && selectedAula.idAula === aula.idAula && { backgroundColor: '#d3d3d3' }
              ]}
            >
              <Image source={{ uri: aula.fotoAula }} style={styles.aulaImage} />
              <View style={{ padding: 8, width: 215 }}>
                <Text style={styles.cursoTittle}>{aula.nomeAula}</Text>
                <Text style={styles.cursoText}>{aula.descricaoAula}</Text>
              </View>

              {/* Botão para selecionar a aula e atualizar o vídeo exibido */}
              <TouchableOpacity onPress={() => setSelectedAula(aula)}>
                <FontAwesome6 name="play-circle" size={35} color="#3F4D42" />
                <Text style={styles.cursoText}>{aula.duracaoAula} Min</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
