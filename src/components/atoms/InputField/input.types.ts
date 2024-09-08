import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  onChangeText?: (text: string) => void;
  inputIcon?: JSX.Element;
  isSecure?: boolean;
};
