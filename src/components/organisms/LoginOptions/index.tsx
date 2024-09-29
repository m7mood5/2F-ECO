import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styleOptions from './options.style';
import {useTranslation} from 'react-i18next';
import { colors, moderateScale, scale } from '../../../global/theme';
import GoogleAuthBtn from '../GoogleAuthBtn';
import { EmailIcon } from '../../../global/icons';
import FacebookAuthBtn from '../FacebookAuthBtn';

const LoginOptions: FC = () => {
  // const navigation = useAppNavigation();
  const {t} = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otherProvider, setOtherProvider] = useState<null | string>(null);
  const [otherProviderEmail, setOtherProviderEmail] = useState<null | string>(
    null,
  );
  const [otherProviderCredential, setOtherProviderCredential] = useState<
    null | string
  >(null);

  const handleDiffrentProvider = (credential, email, provider) => {
    setOtherProvider(provider);
    setOtherProviderEmail(email);
    setOtherProviderCredential(credential);
  };
  const handleCancelDiffrentProvider = () => {
    setOtherProvider(null);
    setOtherProviderEmail(null);
    setIsLoading(false);
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

      {otherProvider && (
        <View style={styleOptions.pageProvider}>
          <View style={styleOptions.pageProviderInner}>
            <View style={styleOptions.pageProviderHeader}>
              <Text style={styleOptions.pageProviderHeaderText}>
                {t('Account Linking Notice')}
              </Text>
            </View>
            <View style={styleOptions.pageProviderBody}>
              {otherProvider === 'google.com' && (
                <Text style={styleOptions.pageProviderBodyText}>
                  {t("Hello! It seems you've used")} {otherProviderEmail}{' '}
                  {t('to signIn before.')}{' '}
                  {t(
                    'please signIn with Google to link your Facebook account. Thanks',
                  )}
                </Text>
              )}
              {otherProvider === 'password' && (
                <Text style={styleOptions.pageProviderBodyText}>
                  {t("Hello! It seems you've used")} {otherProviderEmail}{' '}
                  {t('to signIn before.')}{' '}
                  {t('please signIn to link your Facebook account. Thanks')}
                </Text>
              )}
            </View>
            <View style={styleOptions.pageProviderFooter}>
              <View style={styleOptions.pageProviderFooterBtn}>
                {otherProvider === 'google.com' && (
                  <GoogleAuthBtn
                    setIsLoading={setIsLoading}
                    otherProviderCredential={otherProviderCredential}
                  />
                )}
                {otherProvider === 'password' && (
                  <TouchableNativeFeedback
                    onPress={() => {}}>
                    <View
                      style={[
                        styleOptions.OptionItem,
                        styleOptions.OptionEmail,
                      ]}>
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
                )}
              </View>

              <TouchableOpacity
                onPress={handleCancelDiffrentProvider}
                style={styleOptions.pageProviderCancel}>
                <Text style={styleOptions.pageProviderCancelText}>
                  {t('Cancel')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <View style={styleOptions.Container}>
        <View style={styleOptions.Heading}>
          <Text style={styleOptions.HeadingTitle}>
            {t('Welcome to Tow-F')}
          </Text>
          <Text style={styleOptions.HeadingSubTitle}>
            {t(
              'You can sign up or log in using the same social login button or your email.',
            )}
          </Text>
        </View>
        <View style={styleOptions.Body}>
          <View style={styleOptions.OptionList}>
            <GoogleAuthBtn setIsLoading={setIsLoading} otherProviderCredential={undefined} />
            <FacebookAuthBtn
              setIsLoading={setIsLoading}
              handleDiffrentProvider={handleDiffrentProvider}
            />

            <TouchableNativeFeedback
              onPress={() =>{}}>
              <View style={[styleOptions.OptionItem, styleOptions.OptionEmail]}>
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
                "By continuing, you agree to CareerFox's Terms of Use. Read our Privacy Policy.",
              )}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginOptions;
