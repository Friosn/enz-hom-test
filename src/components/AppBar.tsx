import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>AppBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 55,
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundC,
  },
});

export default AppBar;
