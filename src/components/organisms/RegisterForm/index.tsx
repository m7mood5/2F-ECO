import React, {useState, useContext} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import formStyle from './form.style';
import {CommonActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useAppNavigation} from '../../../hooks';
import {useAppDispatch} from '../../../hooks/useRedux.hooks';
import {ToastContext} from '../../../context';
import useAuth from '../../../hooks/useAuth.hooks';
import useUser from '../../../hooks/useUser.hooks';
import {getRandomLetter} from '../../../global/generalFunctions';
import {setUserAction} from '../../../store';
import {CBtn, InputField} from '../../atoms';
import {UserNameIcon} from '../../../global/icons';
import {colors} from '../../../global/theme';

const RegisterForm = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const {showToast} = useContext(ToastContext);
  const {t} = useTranslation();
  const {currentUser} = useAuth();
  const {createUser} = useUser();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    if (firstName && lastName && gender) {
      try {
        const userData = {
          firstname: firstName,
          lastname: lastName,
          email: currentUser?.email,
          gender: gender,
          defaultAvatar: `${getRandomLetter([
            'b',
            'c',
            'd',
            'e',
            'f',
            'h',
            'k',
            'p',
            's',
            't',
          ])}.png`,
        };
        await createUser(currentUser?.uid, userData);
        setIsLoading(false);
        showToast(t('Welcome on board', {firstName, lastName}), 'success');
        const data = {
          uid: currentUser?.uid,
          email: currentUser?.email,
          gender: gender,
          defaultAvatar: userData?.defaultAvatar,
          avatar: '',
          firstName: firstName,
          lastName: lastName,
        };
        dispatch(setUserAction(data));
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Location'}],
          }),
        );
      } catch (error) {
        setIsLoading(false);
        showToast(t('An error occurred. Please try again later.'), 'alert');
      }
    } else {
      setIsLoading(false);
      showToast(t('Please fill all fields to continue.'), 'alert');
    }
  };

  return (
    <View style={formStyle.Container}>
      <View style={formStyle.FormInput}>
      <Text style={formStyle.Label}>{t('What is your name?')}</Text>
        <InputField
          keyboardType={'default'}
          placeholder={t('Your first name')}
          inputIcon={
            <UserNameIcon width={24} height={24} color={colors.primaryDark} />
          }
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>
      <View style={formStyle.FormInput}>
        <InputField
          keyboardType={'default'}
          placeholder={t('Your last name')}
          inputIcon={
            <UserNameIcon width={24} height={24} color={colors.primaryDark} />
          }
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      {/* Gender Selection */}
      <View style={formStyle.GenderContainer}>
        <Text style={formStyle.Label}>{t('What is your gender?')}</Text>
        <View style={formStyle.GenderSelection}>
          <TouchableOpacity
            onPress={() => setGender('man')}
            style={[
              formStyle.GenderOption,
              gender === 'man' ? formStyle.Selected : {},
            ]}>
            <Image
              source={require('../../../assets/imgs/man.png')}
              style={formStyle.GenderImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender('woman')}
            style={[
              formStyle.GenderOption,
              gender === 'woman' ? formStyle.Selected : {},
            ]}>
            <Image
              source={require('../../../assets/imgs/woman.png')}
              style={formStyle.GenderImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={formStyle.FormBtn}>
        <CBtn
          size="large"
          text={t('Continue')}
          onPress={handleSubmit}
          loading={isLoading}
        />
      </View>
    </View>
  );
};
export default RegisterForm;
