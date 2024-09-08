import React, {FC, useState} from 'react';
import {I18nManager, Pressable, View} from 'react-native';
import inputStyle from './input.style';
import {InputProps} from './input.types';
import {Input} from 'native-base';
import { colors, moderateScale, scale } from '../../../global/theme';
import { EyeIcon, EyeWithSlashIcon } from '../../../global/icons';

const InputField: FC<InputProps> = ({
  onChangeText,
  isSecure,
  inputIcon,
  readOnly = false,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={inputStyle.Container}>
      {inputIcon && <View style={inputStyle.InputIcon}>{inputIcon}</View>}
      <View>
        <Input
          placeholderTextColor={colors.text}
          onChangeText={onChangeText}
          borderWidth={scale(1)}
          borderRadius={moderateScale(8)}
          blurOnSubmit={true}
          returnKeyType={'done'}
          borderColor={colors.darkGray}
          focusOutlineColor={colors.secondaryLight}
          style={[
            inputStyle.TbInputField,
            {
              paddingRight: isSecure ? scale(50) : scale(16),
              paddingLeft: inputIcon ? scale(50) : scale(16),
              textAlign: I18nManager.isRTL ? 'right' : 'left',
              backgroundColor: readOnly ? `${colors.gray}10` : colors.white,
              opacity: readOnly ? 0.6 : 1,
            },
          ]}
          readOnly={readOnly}
          autoCapitalize={'none'}
          secureTextEntry={!isPasswordVisible && isSecure}
          {...rest}
        />
      </View>

      {isSecure && (
        <Pressable
          onPress={togglePasswordVisibility}
          style={inputStyle.PassIcon}>
          {isPasswordVisible ? (
            <EyeWithSlashIcon width={scale(18)} height={scale(18)} />
          ) : (
            <EyeIcon width={scale(18)} height={scale(18)} />
          )}
        </Pressable>
      )}
    </View>
  );
};
export default InputField;
