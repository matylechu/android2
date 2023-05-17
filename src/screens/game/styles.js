import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  content:{
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title:{
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',  
    width: '80%',
    paddingTop: 10,
  }
});
