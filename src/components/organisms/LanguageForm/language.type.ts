export type selectLangPropsType = {
  value: string;
  btn: string;
  selectTitle: string;
  subTitle: string;
};

export type LanguageFormProps = {
  setTitle: (e: string) => void;
  setSubTitle: (e: string) => void;
};
