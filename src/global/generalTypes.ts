import {StackNavigationProp} from '@react-navigation/stack';

export type iconPropsType = {
  width: number;
  height: number;
  color?: string;
  testID?: string;
};
// =================== navigation Props Types  =================== //
export type navigationPropsTypes = {
  initialScreen: string;
};
export type MainStackParamList = {
  Welcome: undefined;
  Intro: undefined;
  Home: undefined;
  Login: undefined;
  EmailLogin: undefined;
  ForgetPass: undefined;
  ContinueRegister: undefined;
  Notification: undefined;
  EditProfile: undefined;
  ChangeLanguage: undefined;
  Premium: undefined;
  ChangePassScreen: undefined;
  EditResume: undefined;
  AddPersonalInformation: undefined;
  Preview: undefined;
  SelectTemplate: undefined;
  EditCoverLetterScreen: undefined;
  CoverPreview: undefined;
  NewResumeScreen: undefined;
};

export type navigationStackProps = StackNavigationProp<MainStackParamList>;
