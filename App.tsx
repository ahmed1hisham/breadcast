import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AppNavigation from './app/navigation/AppNavigation';

const App = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
