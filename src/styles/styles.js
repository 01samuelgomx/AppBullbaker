export const styles = {
  // -------------------
  // Carrossel
  homeContainer: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: { 
    alignItems: "center", 
    width: "100%", 
    marginVertical: 20 
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
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  tittleDark: {
    fontSize: 20,
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

  bannerhome: {
    width: "100%",
  },
  // ------------------------------------
  // Inicial END
  // ------------------------------------
  // ------------------------------------
  // Home START
  // ------------------------------------
  header: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
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
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    width: 220,
    height: 120,
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

  logoHome: {
    width: "40%",
    height: "75%",
    borderRadius: 10,
    marginTop: 90,
  },
  // ------------------------------------
  // Home END
  // ------------------------------------
  // ------------------------------------
  // Area Aluno START
  // ------------------------------------
  contAlunoBtn: {
    paddingTop: 20,
    alignItems: "center",
  },
  AcessoAula: {
    boxSizing: "border-box",
    overFlow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-Around",
    color: "#fff",
    padding: 15,
    width: 315,
    height: 100,
    borderRadius: 15,
    backgroundColor: "#90A293",
  },
  btnAula: {
    display: "flex",
    alignItems: "center",
    width: 100,
    marginTop: 10,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#3F4D42",
    color: "#fff",
    borderRadius: 15,
  },
  AcessoPro: {
    marginTop: 30,
    boxSizing: "border-box",
    overFlow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-Around",
    backgroundColor: "#C1959D",
    color: "#fff",
    padding: 15,
    width: 315,
    height: 100,
    borderRadius: 15,
  },
  btnPro: {
    display: "flex",
    alignItems: "center",
    width: 100,
    marginTop: 10,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#9E616C",
    color: "#fff",
    borderRadius: 15,
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
  cursoText: {
    fontSize: 9,
    textAlign: "left",
  },
  btnCursoUm: {
    display: "flex",
    alignItems: "center",
    width: 100,
    marginTop: 10,
    padding: 3,
    alignItems: "center",
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
    justifyContent: "space-between",
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

  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    fontWeight: "bold",
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
  produtos: {
    marginTop: 50,
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
    alignItems: "center",
    padding: 10,
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
  // ------------------------------------
  // Produtos END
  // ------------------------------------
  // ------------------------------------
  // Aula START
  // ------------------------------------
  contVideo: {
    flex: 1,
    marginTop: 30,
    justifyContent: "space-Around",
    alignItems: "center",
  },
  video: {
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

  // ------------------------------------
  // Aula end
  // ------------------------------------
  // ------------------------------------
  // Perfil START
  // ------------------------------------
  profile: {
    flexDirection: "row",
  },
  profileTitle: {
    padding: 5,
    fontWeight: "800",
    alignItems: "center",
  },

  profileItem: {
    flexDirection: "row",
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
  },
  profileText: {
    marginLeft: 10,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",

    height: 100,
  },

  logoPerfil: {
    width: "40%",
    height: "75%",
    borderRadius: 10,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center", // Center items vertically within the profile
    padding: 40,

    borderRadius: 10, // Example border radius
  },

  botaoPerfil: {
    alignItems: "center",
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
