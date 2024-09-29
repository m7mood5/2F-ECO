import React from 'react';
import {useTranslation} from 'react-i18next';
import InnerLayout from '../components/organisms/InnerLayout';
import EmailAuth from '../components/organisms/EmailAuth';

const LoginWithEmail = () => {
  const {t} = useTranslation();

  return (
    <InnerLayout title={t('Continue with Email')} withBack>
      <EmailAuth />
    </InnerLayout>
  );
};

export default LoginWithEmail;
