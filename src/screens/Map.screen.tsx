import React from 'react';
import InnerLayout from '../components/organisms/InnerLayout';
import {useTranslation} from 'react-i18next';
import LocationView from '../components/organisms/Location';

export default function MapScreen() {
  const {t} = useTranslation();

  return (
    <InnerLayout title={t('Choose Your Location')} withBack>
      <LocationView />
    </InnerLayout>
  );
}
