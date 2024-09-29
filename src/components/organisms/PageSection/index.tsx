import React from 'react';
import sectionStyle from './section.style';
import {View, Text} from 'react-native';
import {PageSectionProps} from './section.type';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { MoreIcon } from '../../../global/icons';
import { scale } from '../../../global/theme';

const PageSection = ({children, title, morePress, icon}: PageSectionProps) => {
  return (
    <View style={sectionStyle.Container}>
      <View style={sectionStyle.Header}>
        <View style={sectionStyle.HeaderTitle}>
          {icon}
          <Text style={sectionStyle.title}>{title}</Text>
        </View>
        <View style={sectionStyle.HeaderLine} />
        {morePress && (
          <TouchableOpacity style={sectionStyle.readMore} onPress={morePress}>
            <MoreIcon width={scale(19)} height={scale(16)} />
          </TouchableOpacity>
        )}
      </View>
      <View style={sectionStyle.Body}>{children}</View>
    </View>
  );
};

export default PageSection;
