import {Button, Text,TextInput,View } from 'react-native';
import {styles} from "./styles"
import { Card, Header } from '../../components/index';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title= 'Bienvenidos' />
      <Text style={styles.title}>Comencemos!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.label}>Elige un Numero!</Text>
        <TextInput placeholder='0' style={styles.input}/>
        <View style={styles.buttonContainer}>
          <Button
          title='Limpiar'
          onPress={() => {}}
          color='red'
          />
          <Button
          title='Confirmar'
          onPress={() => {}}
          color='red'
          />
        </View>
      </Card>
    </View>
  );
}

export default StartGame;