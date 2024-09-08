import React, {useState} from 'react';
import {Text, View} from 'react-native';
import authStyle from './passForm.style';

import {useTranslation} from 'react-i18next';
import {CBtn, InputField} from '../../atoms';
import {UserPassIcon} from '../../../global/icons';
import {colors} from '../../../global/theme';

const ForgetPassForm = () => {
  const {t} = useTranslation();
  // const navigation = useAppNavigation();
  // const {showToast} = useContext(ToastContext);
  // const {sendPasswordResetEmail, forgetSuccess, forgetError} = useAuth();

  const [email, setEmail] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // const handleForgetPass = async () => {
  //   if (email) {
  //     setIsLoading(true);
  //     await sendPasswordResetEmail(email);
  //   } else {
  //     showToast(t('Please enter your Email'));
  //   }
  // };
  // useEffect(() => {
  //   if (forgetError) {
  //     setIsLoading(false);
  //     showToast(forgetError, 'alert');
  //   }
  //   if (forgetSuccess) {
  //     setIsLoading(false);
  //     showToast(forgetSuccess, 'success');
  //     navigation.goBack();
  //   }
  // }, [forgetSuccess, forgetError]);

  return (
    <View style={authStyle.Container}>
      <View style={authStyle.FormInput}>
        <Text style={authStyle.Label}>{t('E-mail')}</Text>
        <InputField
          keyboardType={'email-address'}
          placeholder={t('Please enter your Email')}
          inputIcon={
            <UserPassIcon width={24} height={24} color={colors.primaryDark} />
          }
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={authStyle.FormBtn}>
        <CBtn size="large" text={t('Continue')} onPress={() => {}} />
      </View>
    </View>
  );
};
export default ForgetPassForm;
