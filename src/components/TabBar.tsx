import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

const TabBar = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>TabBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 55,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundC,
  },
});

export default TabBar;
