import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetLocationofLand from './Screens/GetLocationofLand';
import GetSoilPhoto from './Screens/GetSoilPhoto';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World shrutid!</Text>
      <StatusBar style="auto" />
      {/* <GetLocationofLand /> */}
      <GetSoilPhoto />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
