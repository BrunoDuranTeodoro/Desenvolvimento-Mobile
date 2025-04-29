import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    backgroundColor: "#f9f9f9", // Deixar mais suave pra UX
  },
  item: {
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#f8f8ff", // Ghostwhite na tabela do Hex
    borderRadius: 8, // Cantinhos arredondados = + moderno
    textAlign: "center",
    color: "slategrey",
    fontSize: 16,
    elevation: 2, // Um leve "sombra" para Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filter: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
