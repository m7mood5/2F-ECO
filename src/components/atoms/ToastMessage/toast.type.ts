export type toastProps = {
  message: string;
  visible: boolean;
  status?: 'success' | 'info' | 'alert';
  icon?: JSX.Element;
};
