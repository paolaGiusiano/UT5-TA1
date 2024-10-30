import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function App() {
  // Estado para el contador
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y disminuir el contador
  const incrementar = () => setContador(contador + 1);
  const disminuir = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {contador}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text style={styles.buttonText}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={disminuir}>
          <Text style={styles.buttonText}>Disminuir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
