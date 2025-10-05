import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default ContactDetailsScreen;
