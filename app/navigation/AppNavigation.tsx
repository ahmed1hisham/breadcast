import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommunityPosts from '../screens/CommunityPosts';
import PostDetails from '../screens/PostDetails';
import Header from '../components/kit/Header';
import HeaderBackButton from '../components/kit/HeaderBackButton';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Community"
          component={CommunityPosts}
          options={{header: () => <Header />}}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderBackButton />,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
