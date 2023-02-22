import React from 'react';
import {View, StyleSheet} from 'react-native';

const Divider = () => {
  return <View style={styles.dividerStyle} />;
};

const styles = StyleSheet.create({
  dividerStyle: {
    width: '100%',
    height: 1,
    backgroundColor: '#eeeeee',
    marginVertical: 15,
  },
});

export default Divider;
