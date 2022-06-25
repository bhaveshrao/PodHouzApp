import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreateCommentScreen from '../../CreateCommentScreen';
import CommentScreen from '../../CommentScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CommentNavigator({navigation}) {
    return (
    <Stack.Navigator independent={true} initialRouteName="CommentScreen">
       <Stack.Screen name="CommentScreen" component={CommentScreen} options={{ headerShown: false }} />
       <Stack.Screen name="CreateCommentScreen" component={CreateCommentScreen} options={{ headerShown: false }} />
     </Stack.Navigator>
    );
}

export default CommentNavigator;
