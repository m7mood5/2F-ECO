import React from 'react';
import btnStyle from './btn.style';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../../global/theme';
type btnProps = {
  text: string;
  onPress: () => void;
  size?: 'large' | 'small' | 'normal';
  loading?: boolean;
  disabled?: boolean;
  scndary?: boolean;
};

const CBtn = (props: btnProps) => {
  return (
    <TouchableNativeFeedback
      onPress={() => props.onPress()}
      disabled={props?.disabled}>
      <View
        style={[
          btnStyle.btnContainer,
          {opacity: props.disabled ? 0.7 : 1},
          props.scndary && {
            backgroundColor: colors.white,
            borderColor: colors.primaryDark,
            borderWidth: 1,
          },
        ]}>
        {props?.loading ? (
          <ActivityIndicator
            color={props.scndary ? colors.primary : colors.white}
          />
        ) : (
          <Text
            style={[
              btnStyle.btnText,
              props.scndary && {
                color: colors.primary,
              },
            ]}>
            {props.text}
          </Text>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default CBtn;
