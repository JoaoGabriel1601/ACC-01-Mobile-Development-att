import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

//AQUI COMPLETE O CSS DA TELA. DEIXE MINIMAMENTE PARECIDO COM A IMAGEM.
export default function Perfil() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Perfil</Text>
      <View style={styles.perfilContainer}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={require("../../../assets/images/punpun.jpg")}
        />
        <Text style={styles.text}>Nome: Punpun</Text>
        <Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.btnTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19244B",
    padding: 20,
    alignItems: "center",
  },
  perfil: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },
  perfilContainer: {
    alignItems: "center",
    backgroundColor: "#5C668B",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#86A16C",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#F5482F",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
