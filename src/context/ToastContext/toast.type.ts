import {ReactNode} from 'react';

export interface ToastContextProps {
  showToast: (
    message: string,
    status?: 'alert' | 'success' | 'info',
    component?: ReactNode,
  ) => void;
  hideToast: () => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export interface ToastContentProps {
  message: string;
  status?: 'alert' | 'success' | 'info';
  component?: ReactNode;
}
