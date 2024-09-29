import React from 'react';
import {Text, View} from 'react-native';
import sheetStyle from './sheet.style';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import {CommonActions} from '@react-navigation/native';
import { useAppNavigation } from '../../hooks';
import useAuth from '../../hooks/useAuth.hooks';
import { LogoutIcon } from '../../global/icons';
import { colors, moderateScale } from '../../global/theme';

function LogoutActionSheet() {
  const navigation = useAppNavigation();
  const {signOut} = useAuth();

  const {t} = useTranslation();

  const handleLogout = () => {
    signOut();
    SheetManager.hide('LogoutSheet');
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'Welcome'}],
      }),
    );
  };
  return (
    <ActionSheet
      id="LogoutSheet"
      isModal={false}
      zIndex={9}
      gestureEnabled={true}
      indicatorStyle={sheetStyle.indicatorStyle}
      containerStyle={sheetStyle.containerStyle}
      useBottomSafeAreaPadding={true}>
      <View style={sheetStyle.sheetWrapper}>
        <View style={sheetStyle.Body}>
          <View style={sheetStyle.IconContainer}>
            <LogoutIcon
              width={moderateScale(35)}
              height={moderateScale(35)}
              color={colors.error}
            />
          </View>
          <View style={sheetStyle.ContentContainer}>
            <Text style={sheetStyle.TitleText}>{t('Log Out')}</Text>
            <Text style={sheetStyle.Desc}>
              {t('Are you certain you want to log out?')}
            </Text>
          </View>
          <TouchableOpacity
            style={sheetStyle.DeleteBtn}
            activeOpacity={0.7}
            onPress={handleLogout}>
            <Text style={sheetStyle.DeleteBtnText}>{t('Log out now')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}
export default LogoutActionSheet;
