import {ReactNode} from 'react';

export type InnerPageProps = {
  title: string;
  withBack?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  bg?: string;
};
