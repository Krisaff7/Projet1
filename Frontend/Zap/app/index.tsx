import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my app!</Text>
      {/* Le chemin d'accès a été corrigé et le Text est maintenant à l'intérieur du Pressable */}
      <Pressable onPress={() => router.push('/onboardind')} style={styles.button}>
        <Text style={styles.buttonText}>Open onboarding</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20, // Ajout d'une marge pour une meilleure lisibilité
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});