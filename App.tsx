import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/Home';
import TabBar from './src/components/TabBar';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'red'}}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        nemo odio nisi ullam harum, dolor architecto ipsa nesciunt ea laudantium
        vel! In voluptatibus ex natus quisquam enim labore veritatis numquam!
      </Text>
      <Home />
      <TabBar />
    </View>
  );
}

/* const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}); */

export default App;
