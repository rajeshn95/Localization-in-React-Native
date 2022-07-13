import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'hi', label: 'हिन्दी'},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  return (
    <View
      style={{
        paddingTop: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
      }}>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <Pressable
            key={language.code}
            style={{}}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}>
            <Text
              style={[
                selectedLanguage
                  ? {
                      fontSize: 18,
                      fontWeight: '600',
                      color: 'tomato',
                    }
                  : {fontSize: 18, color: 'white'},
              ]}>
              {language.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default LanguageSelector;
