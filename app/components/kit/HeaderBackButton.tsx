import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
// @ts-ignore
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HeaderBackButton = (props: any) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.container}
      hitSlop={10}>
      <MaterialIcon name="arrow-back-ios" size={22} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderBackButton;
