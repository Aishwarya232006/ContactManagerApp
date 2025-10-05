/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import context
import { ContactProvider } from './src/utils/ContactContext';

// Screens
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';
import ContactDetailsScreen from './src/screens/ContactDetails/ContactDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList">
          <Stack.Screen 
            name="ContactList" 
            component={ContactListScreen} 
            options={{ title: 'Contacts' }}
          />
          <Stack.Screen 
            name="AddContact" 
            component={AddContactScreen} 
            options={{ title: 'Add Contact' }}
          />
          <Stack.Screen 
            name="ContactDetails" 
            component={ContactDetailsScreen} 
            options={{ title: 'Contact Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}

export default App;
