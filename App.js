/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import './i18n/IMLocalize';
import TestComponent from './testComponent';
import LanguageSelector from './languageSelector';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          backgroundColor: '#256d9e',
          height: '100%',
          padding: 20,
        }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 20,
          }}>
          <TestComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
