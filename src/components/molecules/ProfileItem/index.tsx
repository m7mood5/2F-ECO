import React from 'react';
import {I18nManager, Text, View} from 'react-native';
import {itemProps} from './item.type';
import itemStyle from './item.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useAppNavigation } from '../../../hooks';
import { MoreIcon } from '../../../global/icons';
import { colors, moderateScale } from '../../../global/theme';

const ProfileItem = ({title, link, icon}: itemProps) => {
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View style={itemStyle.Container}>
        <View style={itemStyle.Content}>
          {icon && <View style={itemStyle.Icon}>{icon}</View>}
          <Text style={itemStyle.Title}>{title}</Text>
        </View>

        <View
          style={[
            itemStyle.MoreBtn,
            {
              transform: [{rotate: I18nManager?.isRTL ? '180deg' : '0deg'}],
            },
          ]}>
          <MoreIcon
            width={moderateScale(20)}
            height={moderateScale(20)}
            color={colors.primaryDark}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileItem;
