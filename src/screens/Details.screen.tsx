import React from 'react';
import InnerLayout from '../components/organisms/InnerLayout';
import {useTranslation} from 'react-i18next';
import RegisterForm from '../components/organisms/RegisterForm';

export default function Details() {
  const {t} = useTranslation();

  return (
    <InnerLayout title={t('Complate Your Information')}>
      <RegisterForm />
    </InnerLayout>
  );
}
