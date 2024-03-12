import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Image style={styles.container}
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/1200px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png'}}

      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
