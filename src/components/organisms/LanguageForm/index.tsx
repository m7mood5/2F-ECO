/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  ScrollView,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import formStyle from './language.style';
import {LanguageFormProps, selectLangPropsType} from './language.type';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import {useAppNavigation} from '../../../hooks';
import {colors, fonts, scale, verticalScale} from '../../../global/theme';
import {CheckIcon} from '../../../global/icons';

const languageList = [
  {
    id: 1,
    title: 'English',
    img: require('../../../assets/imgs/us.png'),
    value: 'en',
    selectTitle: 'Welcome to CareerFox',
    subTitle: 'Please choose your preferred language to get started.',
    btn: 'Continue',
    active: true,
  },
  {
    id: 6,
    title: 'العربية',
    img: require('../../../assets/imgs/ks.png'),
    value: 'ar',
    selectTitle: 'مرحبا بكم في CareerFox',
    subTitle: 'الرجاء اختيار لغتك المفضلة للبدء.',
    btn: 'التالي',
    active: true,
  },

  {
    id: 4,
    title: 'Español',
    img: require('../../../assets/imgs/sp.png'),
    value: 'es',
    selectTitle: 'Bienvenido a CareerFox',
    subTitle: 'Por favor, elige tu idioma preferido para comenzar.',
    btn: 'Continuar',
    active: false,
  },
  {
    id: 3,
    title: 'Deutsch',
    img: require('../../../assets/imgs/gr.png'),
    value: 'de',
    selectTitle: 'Willkommen bei CareerFox',
    subTitle: 'Bitte wählen Sie Ihre bevorzugte Sprache, um zu beginnen.',
    btn: 'Der nächste',
    active: false,
  },

  {
    id: 2,
    title: 'Français',
    img: require('../../../assets/imgs/fr.png'),
    value: 'fr',
    selectTitle: 'Bienvenue sur CareerFox',
    subTitle: 'Veuillez choisir votre langue préférée pour commencer',
    btn: 'Continuer',
    active: false,
  },
  {
    id: 5,
    title: 'Italiano',
    img: require('../../../assets/imgs/it.png'),
    value: 'it',
    selectTitle: 'Benvenuto in CareerFox',
    subTitle: 'Scegli la tua lingua preferita per iniziare.',
    btn: 'Continua',
    active: false,
  },
];
const LanguageForm = ({
  setTitle,
  setSubTitle,
}: LanguageFormProps): JSX.Element => {
  const {i18n} = useTranslation();
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [language, setLanguage] = useState('');
  const [btn, setBtn] = useState<string>('Continue');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCurrentLng();
  }, []);
  const SetLanguage = (e: selectLangPropsType) => {
    setLanguage(e.value);
    setTitle(e.selectTitle);
    setSubTitle(e.subTitle);
    setBtn(e.btn);
  };

  const handleSubmit = () => {
    setLoading(true);
    i18n.changeLanguage(language).then(async () => {
      await AsyncStorage.setItem('selected_lang', language);
      if (i18n.language === 'ar') {
        I18nManager.forceRTL(true);
        // RNRestart.Restart();
      } else {
        I18nManager.forceRTL(false);
        // RNRestart.Restart();
      }
    });
    navigation.navigate('Login');
  };
  const getCurrentLng = async () => {
    const selectLang =
      (await AsyncStorage.getItem('selected_lang')) !== null
        ? await AsyncStorage.getItem('selected_lang')
        : 'en';
    setBtn(selectLang == 'en' ? 'Continue' : 'التالي');
    setLanguage(selectLang);
  };

  return (
    <View style={formStyle.container}>
      <View style={formStyle.languageListContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: verticalScale(10),
            paddingBottom: verticalScale(10),
          }}>
          {languageList.map((item, index) => {
            return (
              <Pressable
                disabled={!item.active}
                style={[
                  formStyle.ListItem,
                  {
                    borderColor:
                      language == item.value
                        ? colors.primaryLight
                        : colors.darkGray,
                    backgroundColor:
                      language == item.value
                        ? colors.primaryLight
                        : colors.white, // Highlight the selected item
                    opacity: item.active ? 1 : 0.4,
                  },
                ]}
                key={`lang-${item.id}`}
                onPress={() => {
                  SetLanguage({
                    value: item.value,
                    btn: item.btn,
                    selectTitle: item.selectTitle,
                    subTitle: item.subTitle,
                  });
                }}>
                {!item.active && (
                  <View style={formStyle.soonBox}>
                    <Text style={formStyle.soonBoxText}>
                      {t('Coming Soon')}
                    </Text>
                  </View>
                )}
                <View style={formStyle.ListItemContent}>
                  <Image
                    source={item.img}
                    style={[{resizeMode: 'cover'}, formStyle.ListItemImg]}
                  />
                  <Text
                    style={[
                      formStyle.ListItemText,
                      item.value == 'ar' && formStyle.ListItemTextAr,
                      language == item.value && formStyle.SelectedText, // Apply a style change for selected text
                    ]}>
                    {item.title}
                  </Text>
                </View>
                <View>
                  <CheckIcon
                    width={24}
                    height={24}
                    color={
                      language == item.value
                        ? colors.primaryDark
                        : colors.darkGray
                    } // Change color of the icon for the selected item
                  />
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <View style={formStyle.btnContainer}>
        <TouchableNativeFeedback onPress={() => handleSubmit()}>
          <View style={formStyle.btnContainerInner}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text
                style={[
                  formStyle.btnText,
                  {
                    fontFamily:
                      language == 'ar' ? fonts.CairoMedium : fonts.BarlowMedium,
                    fontSize: scale(15),
                    lineHeight:
                      language == 'ar' ? scale(15 * 1.6) : scale(13 * 1.9),
                  },
                ]}>
                {btn}
              </Text>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default LanguageForm;
