/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {useTranslation} from 'react-i18next';
import {colors, moderateScale, scale} from '../../global/theme';
import styleOptions from './sheet.style';
import {EmailIcon} from '../../global/icons';
import FacebookAuthBtn from '../../components/organisms/FacebookAuthBtn';
import GoogleAuthBtn from '../../components/organisms/GoogleAuthBtn';
import {useAppNavigation} from '../../hooks';

const LoginOptions = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [otherProvider, setOtherProvider] = useState<null | string>(null);
  const [otherProviderEmail, setOtherProviderEmail] = useState<null | string>(
    null,
  );
  const [otherProviderCredential, setOtherProviderCredential] = useState<
    null | string
  >(null);

  const handleDiffrentProvider = (
    credential: React.SetStateAction<string | null>,
    email: React.SetStateAction<string | null>,
    provider: React.SetStateAction<string | null>,
  ) => {
    setOtherProvider(provider);
    setOtherProviderEmail(email);
    setOtherProviderCredential(credential);
  };
  //   const handleCancelDiffrentProvider = () => {
  //     setOtherProvider(null);
  //     setOtherProviderEmail(null);
  //     setIsLoading(false);
  //   };
  const handleEmail = () => {
    navigation.navigate('EmailLogin');
    SheetManager.hide('LoginOptions');
  };
  return (
    <>
      {isLoading && (
        <View style={styleOptions.pageLoader}>
          <View style={styleOptions.pageLoaderInner}>
            <ActivityIndicator color={colors.white} size={moderateScale(30)} />
          </View>
        </View>
      )}
      <ActionSheet
        id="LoginOptions"
        isModal={false}
        zIndex={9}
        gestureEnabled={true}
        indicatorStyle={styleOptions.indicatorStyle}
        containerStyle={styleOptions.containerStyle}
        useBottomSafeAreaPadding={true}>
        <View style={styleOptions.Container}>
          <View style={styleOptions.Heading}>
            <Text style={styleOptions.HeadingTitle}>
              {t('Welcome to Odyssey')}
            </Text>
            <Text style={styleOptions.HeadingSubTitle}>
              {t(
                'You can sign up or log in using the same social login button or your email.',
              )}
            </Text>
          </View>
          <View style={styleOptions.Body}>
            <View style={styleOptions.OptionList}>
              <GoogleAuthBtn
                setIsLoading={setIsLoading}
                otherProviderCredential={undefined}
              />
              <FacebookAuthBtn
                setIsLoading={setIsLoading}
                handleDiffrentProvider={handleDiffrentProvider}
              />

              <TouchableNativeFeedback
                onPress={handleEmail}>
                <View
                  style={[styleOptions.OptionItem, styleOptions.OptionEmail]}>
                  <View style={styleOptions.OptionItemIcon}>
                    <EmailIcon
                      width={scale(24)}
                      height={scale(24)}
                      color={colors.white}
                    />
                  </View>
                  <View style={styleOptions.OptionItemContent}>
                    <Text style={styleOptions.OptionItemText}>
                      {t('Continue with Email')}
                    </Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={styleOptions.Terms}>
              <Text style={styleOptions.TermsText}>
                {t(
                  "By continuing, you agree to Odyssey's Terms of Use. Read our Privacy Policy.",
                )}
              </Text>
            </View>
          </View>
        </View>
      </ActionSheet>
    </>
  );
};

export default LoginOptions;
