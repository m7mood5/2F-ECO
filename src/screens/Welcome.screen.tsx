/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AuthLayout from '../components/organisms/AuthLayout';
import LanguageForm from '../components/organisms/LanguageForm';
import { colors, fonts, moderateScale, scale, verticalScale } from '../global/theme';
import InnerLayout from '../components/organisms/InnerLayout';
import { useTranslation } from 'react-i18next';

const WelcomeScreen: React.FC = () => {
  const {t} = useTranslation();

  const [title, setTitle] = useState<string>('Welcome to Odyssey');
  const [subTitle, setSubTitle] = useState<string>(
    'Please choose your preferred language to get started.',
  );
  return (
    <InnerLayout title={t('Welcome to Odyssey')}>
      <View style={{padding: moderateScale(20), flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.InterBold,
            fontSize: scale(14),
            lineHeight: scale(22),
            fontWeight: '600',
            color: colors.primaryDark,
            marginBottom: verticalScale(20),
            marginTop: verticalScale(20),
            maxWidth: scale(300),
            alignSelf: 'flex-start',
            textAlign: 'left',
          }}>
          {t('Please choose your preferred language')}
        </Text>
        <LanguageForm
          setTitle={e => setTitle(e)}
          setSubTitle={e => setSubTitle(e)}
        />
      </View>
    </InnerLayout>
  );
};
export default WelcomeScreen;
