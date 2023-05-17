import { Dimensions, StyleSheet } from 'react-native';

const {height,width} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 16,
    color: "#212121",
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 20,
    height: height * 0.25,
  },
  label:{
    fontSize: 14,
    color: '#212121',
    paddingVertical: 5,
    textAlign: 'center'


  },
  input:{
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    minWidth: 70,
    fontSize: 20, 
    textAlign: 'center',
    paddingVertical: 10
    },
  buttonContainer:{
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20
  },
  confirmedContainer:{
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  confirmedTitle:{
    fontSize: 16,
  },
});
