/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  I18nManager,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';
import {SheetManager} from 'react-native-actions-sheet';
import AccountLayout from '../components/organisms/AcountLayout';
import { colors, fonts, moderateScale, scale, verticalScale } from '../global/theme';
import PageSection from '../components/organisms/PageSection';
import ProfileItem from '../components/molecules/ProfileItem';
import { LanguageIcon, LogoutIcon, MessageIcon, RateIcon, SecurityIcon, SettingsIcon, TermsIcon } from '../global/icons';

function hasPasswordProviderId(obj: any[]) {
  if (!Array.isArray(obj)) {
    return false; // Return false if the input is not an array
  }
  return obj.some(item => item.providerId === 'password');
}

const AccountScreen = () => {
  const {t} = useTranslation();
  const [hasPasswordProvider, setHasPasswordProvider] = useState(false);
  const currentUser = auth().currentUser;
  useEffect(() => {
    if (currentUser) {
      const ishasPassword = hasPasswordProviderId(currentUser.providerData);
      setHasPasswordProvider(ishasPassword);
    }
  }, []);
  return (
    <AccountLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingBottom: verticalScale(80)}}>
        <PageSection title={t('Profile Settings')}>
          <View style={{}}>
            <ProfileItem
              title={t('Edit Profile')}
              link={'EditProfile'}
              icon={<SettingsIcon width={scale(20)} height={scale(20)} />}
            />
            <ProfileItem
              title={t('Change Language')}
              link={'ChangeLanguage'}
              icon={<LanguageIcon width={scale(20)} height={scale(20)} />}
            />
            {hasPasswordProvider && (
              <ProfileItem
                title={t('Change Password')}
                link={'ChangePass'}
                icon={<SecurityIcon width={scale(20)} height={scale(20)} />}
              />
            )}
            {/* <GoPremiumBtn /> */}
          </View>
        </PageSection>
        <PageSection title={t('About & Support')}>
          <View style={{}}>
            <ProfileItem
              title={t('Terms & Privacy')}
              link={'Privacy'}
              icon={<TermsIcon width={scale(20)} height={scale(20)} />}
            />
            <ProfileItem
              title={t('Rate Our App')}
              link={'rate'}
              icon={<RateIcon width={scale(20)} height={scale(20)} />}
            />
            <ProfileItem
              title={t('Contact Us')}
              link={'ContactUs'}
              icon={<MessageIcon width={scale(20)} height={scale(20)} />}
            />
          </View>
        </PageSection>
        <View style={{padding: scale(20)}}>
          <TouchableNativeFeedback
            onPress={() => SheetManager.show('LogoutSheet')}>
            <View
              style={{
                paddingVertical: scale(12),
                paddingHorizontal: scale(25),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `${colors.error}40`,
                borderWidth: scale(1),
                borderColor: `${colors.error}60`,
                borderRadius: scale(6),
              }}>
              {!I18nManager?.isRTL && (
                <View>
                  <LogoutIcon
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                    color={colors.error}
                  />
                </View>
              )}
              <Text
                style={{
                  marginStart: !I18nManager?.isRTL ? scale(8) : 0,
                  marginEnd: I18nManager?.isRTL ? scale(8) : 0,
                  color: colors.error,
                  fontFamily: fonts.InterMedium,
                  fontWeight: '500',
                }}>
                {t('Log Out')}
              </Text>
              {I18nManager?.isRTL && (
                <View>
                  <LogoutIcon
                    width={moderateScale(20)}
                    height={moderateScale(20)}
                    color={colors.error}
                  />
                </View>
              )}
            </View>
          </TouchableNativeFeedback>
          <View style={{marginTop: verticalScale(20), alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '600',
                color: colors.text,
                fontFamily: fonts.BarlowBold,
              }}>
              {t('Version')} 0.0.1
            </Text>
          </View>
        </View>
      </ScrollView>
    </AccountLayout>
  );
};

export default AccountScreen;
