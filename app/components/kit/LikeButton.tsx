import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// @ts-ignore
import IonIcon from 'react-native-vector-icons/Ionicons';
import {gray} from '../../theme/colors';

const LikeButton = ({iconName, count, style}: any) => {
  return (
    <View style={[styles.container, style]}>
      <IonIcon name={iconName} size={18} color={gray} />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {fontSize: 14, color: gray, marginLeft: 3},
});

export default LikeButton;
