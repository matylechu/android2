import { StyleSheet } from 'react-native';
import {theme} from '../../constants'

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colores.primario,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight:'bold'
  },
});
