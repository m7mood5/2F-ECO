import {ReactNode} from 'react';

export type layoutProps = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  withBack?:boolean
};
