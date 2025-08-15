// Fichier : onboarding.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Onboardind = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue !</Text>
      <Text style={styles.subtitle}>Ceci est la page donboarding.</Text>
    </View>
  );
};

export default Onboardind;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});