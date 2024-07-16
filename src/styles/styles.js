export const styles = {
  // -------------------
  // Carrossel
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },

  inicialView: {
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
    paddingTop: 95,
    alignItems: "center",
  },
  Container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dashView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
  titleText: {
    color: "#361F08",
    fontSize: 24,
    margin: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionText: {
    color: "#361F08",
    fontSize: 16,
    textAlign: "center",
    width: "75%",
  },
  // -------------------
  safeAreaView: {
    flex: 1,
  },
  tittle: {
    fontSize: 18,
    padding: 1,
    fontWeight: "600",
    color: "#fff",
  },
  tittleDark: {
    fontSize: 20,
    padding: 10,
    fontWeight: "600",
    color: "#000",
  },
  txt: {
    fontSize: 15,
    color: "#000",
  },
  txtBtn: {
    fontSize: 12,
    color: "#fff",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
  },
  enterBtn: {
    flexDirection: "row",
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#361F08",
    color: "#fff",
    borderRadius: 5,
    marginTop: 20,
  },
  // ------------------------------------
  // Inicial START
  // ------------------------------------
  navBtn: {
    display: "flex",
    marginTop: 30,
    width: "45%",
    flexDirection: "row",
    justifyContent: "center",
    aligneItens: "center",
    justifyContent: "space-around",
  },
  activeBtn: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    backgroundColor: "#AAC095",
  },
  initialBtn: {
    width: 40,
    height: 40,
    borderRadius: "100%",
    borderWidth: 2,
    borderColor: "#2D465C",
  },

  // ------------------------------------
  // Inicial END
  // ------------------------------------
  // ------------------------------------
  // Home START
  // ------------------------------------
  header: {
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
  },
  headerItem: {
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 20,
    borderWidth: 0,
    marginRight: -70,
  },
  // ------------------------------------
  banners: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url('../assets/img/background/home.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: 20,
  },
  bannerItem: {
    width: 220,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    border: "none",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  bannerText: {
    fontSize: 22,
    fontWeight: "700",
  },
  bannerSubText: {
    fontSize: 12,
  },
  // ------------------------------------
  buttons: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTittle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "0",
  },
  buttonItem: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 20,
    textAlign: "left",
    marginRight: 100,
    width: 300,
    height: 100,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#C1959D",
  },
  buttonBar: {
    width: 30,
    position: "relative",
    left: "13%",
    height: 100,
    backgroundColor: "rgb(158, 97, 108)",
    borderRadius: 12,
  },
  // ------------------------------------
  buttonContent: {
    marginLeft: 25,
  },
  buttonItem2: {
    alignItems: "center",
    flexDirection: "row",
    // marginTop: 20,
    textAlign: "left",
    marginRight: -90,
    width: 300,
    height: 100,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#90A293",
  },
  buttonBar2: {
    width: 30,
    position: "relative",
    right: "88%",
    height: 100,
    backgroundColor: "#3F4D42",
    borderRadius: 12,
  },
  // ------------------------------------
  buttonItem3: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 50,
    textAlign: "left",
    marginRight: 100,
    width: 300,
    height: 100,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#462F19",
  },
  buttonBar3: {
    width: 30,
    position: "relative",
    left: "24%",
    height: 100,
    backgroundColor: "#654728",
    borderRadius: 12,
  },
  // ------------------------------------
  footer: {
    display: "flex",
    justifyContent: "center",
    justifyContent: "space-Around",
    alignItems: "center",
    margin: 50,
    width: 200,
    height: 100,
  },
  footerItem: {
    marginBottom: 55,
  },

  // ------------------------------------
  // Home END
  // ------------------------------------
  // ------------------------------------
  // Area Aluno START
  // ------------------------------------
  btnAreaAluno: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: '#90A293',
    borderWidth: 5,
    borderColor: '#747474',
    margin: 10,
    position: 'relative',
    bottom: -40,
    padding: 7,
  },
  personAreaAluno: {
    width: 130,
    height: 180,
    elevation: 10,
    position: 'absolute',
    left: -20,
    top: -40,
  },
  textContainer: {
    flex: 1,
    padding: 8,
    marginLeft: 127,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  btnCursoUm: {
    marginTop: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  // ------------------------------------
  // Area END
  // ------------------------------------
  // ------------------------------------
  // Cursos START
  // ------------------------------------
  ContCurso: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cursoTittle: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
  },
  cursoImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  cursoText: {
    fontSize: 12,
    textAlign: "left",
  },
  btnCursoUm: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: 100,
    marginTop: 10,
    padding: 3,
    backgroundColor: "#3F4D42",
    color: "#fff",
    borderRadius: 15,
  },
  btnCursoDois: {
    display: "flex",
    alignItems: "center",
    width: 100,
    marginTop: 10,
    padding: 3,
    alignItems: "center",
    backgroundColor: "#9E616C",
    color: "#fff",
    borderRadius: 15,
  },

  tabnone: {
    display: "none",
  },

  // ------------------------------------
  // Descrisção Curso START
  // ------------------------------------
  containerCurso: {
    flexDirection: "row",
    marginTop: 20,
    padding: 15,
  },
  descriContainer: {
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-Around",
  },
  infoCursos: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    alignSelf: "flex-Start",
  },
  btnCurso: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  titleCurso: {
    fontWeight: "700",
    fontSize: 15,
    padding: 5,
  },
  txtCurso: {
    fontSize: 12,
    textAlign: "left",
    width: 205,
  },

  // ------------------------------------
  // Cursos END
  // ------------------------------------
  // ------------------------------------
  // Produtos START
  // ------------------------------------
  produtos: {
    marginTop: 50,
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-evenly',
  },
  contProdutos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-Around",
    alignItems: "center",
  },
  produtoBtn: {
    flex: 1,
    flexDirection: "row",
    width:155,
    alignItems: "center",
    padding: 10,
  },
  produtoItem: {
    width: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  contProdutos: {
    // flex: 1,
    alignItems: 'center',
    // width: 210,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    justifyContent: 'center',
  },
  produtoItem: {
    // width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  produtoBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 145,
    marginTop: 10,
  },
  btnItem: {
    flex: 1,
    width: 110,
    justifyContent: "center",
    justifyContent: "space-Around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3F4D42",
    borderRadius: 15,
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalDescription: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  btnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    width: 85,
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // ------------------------------------
  // Produtos END
  // ------------------------------------
  // ------------------------------------
  // Aula START
  // ------------------------------------
  aulaImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  aula: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    marginBottom: 15,
    width: "22em",
    justifyContent: "space-Around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
  },
  contAula: {
    flex: 1,
    marginTop: 30,
    justifyContent: "space-Around",
    alignItems: "center",
  },
  videoContainer: {
    width: 340,
    height: 240,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Video: {
    width: 340,
    height: 240,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#3F4D42",
  },
  // ------------------------------------
  // Aula end
  // ------------------------------------
  // ------------------------------------
  // Perfil START
  // ------------------------------------
  profile: {
    flexDirection: "column",
  },
  perfilImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  textperfil: {
    flexDirection: "column",
    textAlign: "center",
    padding: 2,
  },
  perfiltittle: {
    textAlign: "center",
    fontSize: 14,
    padding: 1,
    fontWeight: "600",
    color: "#fff",
  },
  perfilText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontWeight: "0",
  },
  perfilDados: {
    marginTop: 10,
    backgroundColor: "#462F19",
    color: "#fff",
    justifyContent: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderBottomWidth: 4,
    borderColor: "#382513",
    borderRadius: 12,
    padding: 5,
  },
  headerEdit: {
    flex: 1,
    textAlign: "left",
    marginTop: 95,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  ContainerPerfil: {
    flex: 1,
    textAlign: "left",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  inputPerfil: {
    borderWidth: 1,
    textAlign: "left",
    borderRadius: 15,
    borderColor: "#ccc",
    padding: 10,
    width: "102%",
  },
  contInput: {
    textAlign: "left",
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
  },

  // ------------------------------------
  // Perfil END
  // ------------------------------------
  imgFundoSenha: {
    width: "100%",
    height: 280,
  },
  enterBtnSenha: {
    flexDirection: "row",
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#361F08",
    color: "#fff",
    borderRadius: 5,
    margin: 20,
  },
};