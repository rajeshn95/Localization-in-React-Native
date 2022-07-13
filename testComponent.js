import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './languageSelector';

const TestComponent = () => {
  const {t} = useTranslation();

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: '600',
          }}>
          {t('common:languageSelector')}
        </Text>
      </View>
      <LanguageSelector />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#34ebeb',
          borderRadius: 8,
          padding: 16,
          marginTop: 16,
        }}>
        <View style={{textalign: 'center'}}>
          <Text>{t('common:hello')}</Text>
        </View>
      </View>
    </View>
  );
};

export default TestComponent;
