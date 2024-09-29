import {Svg, Path, Circle, Polygon} from 'react-native-svg';
import React from 'react';
import {iconPropsType} from './generalTypes';
import {colors} from './theme';
export const MoonIcon = React.memo((props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.13996C8.97009 5.83996 9.24009 4.60996 9.73009 3.48996C10.2701 2.24996 9.62009 1.65996 8.37009 2.18996C4.41009 3.85996 1.70009 7.84996 2.03009 12.42Z"
        fill="none"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
});

export const CheckIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};
export const PlusIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M6 12H18"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 18V6"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ChartIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M6.87988 18.9001C6.46988 18.9001 6.12988 18.5601 6.12988 18.1501V16.0801C6.12988 15.6701 6.46988 15.3301 6.87988 15.3301C7.28988 15.3301 7.62988 15.6701 7.62988 16.0801V18.1501C7.62988 18.5701 7.28988 18.9001 6.87988 18.9001Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        d="M12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15C12.75 18.57 12.41 18.9 12 18.9Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        d="M17.1201 18.9002C16.7101 18.9002 16.3701 18.5602 16.3701 18.1502V11.9302C16.3701 11.5202 16.7101 11.1802 17.1201 11.1802C17.5301 11.1802 17.8701 11.5202 17.8701 11.9302V18.1502C17.8701 18.5702 17.5401 18.9002 17.1201 18.9002Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        d="M6.87958 13.1799C6.53958 13.1799 6.23958 12.9499 6.14958 12.6099C6.04958 12.2099 6.28958 11.7999 6.69958 11.6999C10.3796 10.7799 13.6196 8.76992 16.0896 5.89992L16.5496 5.35992C16.8196 5.04992 17.2896 5.00992 17.6096 5.27992C17.9196 5.54992 17.9596 6.01992 17.6896 6.33992L17.2296 6.87992C14.5596 9.99992 11.0396 12.1699 7.05958 13.1599C6.99958 13.1799 6.93958 13.1799 6.87958 13.1799Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        d="M17.1204 9.5201C16.7104 9.5201 16.3704 9.1801 16.3704 8.7701V6.6001H14.1904C13.7804 6.6001 13.4404 6.2601 13.4404 5.8501C13.4404 5.4401 13.7804 5.1001 14.1904 5.1001H17.1204C17.5304 5.1001 17.8704 5.4401 17.8704 5.8501V8.7801C17.8704 9.1901 17.5404 9.5201 17.1204 9.5201Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};

export const GoogleIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <Path d="M1 1h22v22H1z" fill="none" />
    </Svg>
  );
};
export const FacebookIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};

export const AppleIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1001 19.16C19.6901 18.26 19.9101 17.8 20.3601 16.79C17.0401 15.53 16.5101 10.8 19.7901 8.98999C18.7901 7.72999 17.3801 7 16.0501 7C15.0901 7 14.4301 7.25001 13.8401 7.48001C13.3401 7.67001 12.8901 7.84 12.3301 7.84C11.7301 7.84 11.2001 7.65001 10.6401 7.45001C10.0301 7.23001 9.39006 7 8.59006 7C7.10006 7 5.51007 7.91 4.50007 9.47C3.08007 11.67 3.33007 15.79 5.62007 19.31C6.44007 20.57 7.54007 21.98 8.97007 22C9.57007 22.01 9.96007 21.83 10.3901 21.64C10.8801 21.42 11.4101 21.18 12.3401 21.18C13.2701 21.17 13.7901 21.42 14.2801 21.64C14.7001 21.83 15.0801 22.01 15.6701 22C17.1201 21.98 18.2801 20.42 19.1001 19.16Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8404 2C16.0004 3.1 15.5504 4.19001 14.9604 4.95001C14.3304 5.77001 13.2304 6.41 12.1704 6.37C11.9804 5.31 12.4704 4.21999 13.0704 3.48999C13.7404 2.68999 14.8704 2.07 15.8404 2Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};
export const EmailIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};
export const MenuIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6ZM4 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11ZM4 16H20C20.55 16 21 16.45 21 17C21 17.55 20.55 18 20 18H4C3.45 18 3 17.55 3 17C3 16.45 3.45 16 4 16Z"
        fill={props?.color ? props?.color : colors.primaryDark}
      />
    </Svg>
  );
};
export const OutlineMenuIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M4 6.5H20C20.28 6.5 20.5 6.72 20.5 7C20.5 7.28 20.28 7.5 20 7.5H4C3.72 7.5 3.5 7.28 3.5 7C3.5 6.72 3.72 6.5 4 6.5ZM4 11.5H20C20.28 11.5 20.5 11.72 20.5 12C20.5 12.28 20.28 12.5 20 12.5H4C3.72 12.5 3.5 12.28 3.5 12C3.5 11.72 3.72 11.5 4 11.5ZM4 16.5H20C20.28 16.5 20.5 16.72 20.5 17C20.5 17.28 20.28 17.5 20 17.5H4C3.72 17.5 3.5 17.28 3.5 17C3.5 16.72 3.72 16.5 4 16.5Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const EmailOutlineIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowLeftIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EyeWithSlashIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M14.53 9.47004L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.42004 19.5301C9.56004 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.47 14.53L2 22"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L14.53 9.47"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const UserPassIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M10.49 2.23006L5.50003 4.10005C4.35003 4.53005 3.41003 5.89004 3.41003 7.12004V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12004C20.61 5.89004 19.67 4.53005 18.52 4.10005L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 10.92C11.9601 10.92 11.9101 10.92 11.8701 10.92C10.9301 10.89 10.1801 10.11 10.1801 9.16003C10.1801 8.19003 10.9701 7.40002 11.9401 7.40002C12.9101 7.40002 13.7001 8.19003 13.7001 9.16003C13.6901 10.12 12.9401 10.89 12.0001 10.92Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.01 13.72C9.05004 14.36 9.05004 15.41 10.01 16.05C11.1 16.78 12.89 16.78 13.98 16.05C14.94 15.41 14.94 14.36 13.98 13.72C12.9 12.99 11.11 12.99 10.01 13.72Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UserLockIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70998 4.97998 4.47998 4.66998L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66998C20.29 4.97998 20.92 5.90997 20.92 6.72997L20.91 11.12Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5V15.5"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const UserNameIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 16.25C19.0001 17.33 19.84 18.17 20.92 18.47"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C13.0399 15 14.0399 15.15 14.9699 15.43"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const UserIconTwo = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9999 10.0001C13.2868 10.0001 14.33 8.95687 14.33 7.67004C14.33 6.38322 13.2868 5.34009 11.9999 5.34009C10.7131 5.34009 9.66992 6.38322 9.66992 7.67004C9.66992 8.95687 10.7131 10.0001 11.9999 10.0001Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 15.6601C16 13.8601 14.21 12.4001 12 12.4001C9.79 12.4001 8 13.8601 8 15.6601"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const MailIconTwo = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 16.5H8"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.5H5"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const JobIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03"
        stroke={props?.color ? props?.color : colors.primaryDark}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const WifiIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.59998 13.05C10.27 10.99 13.74 10.99 16.41 13.05"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.79999 16.1401C11.13 15.1101 12.87 15.1101 14.2 16.1401"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

// Nav icons
export const HomeIcon = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height}>
    <Path
      d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
      fill={props?.color ? props?.color : '#292D32'}
    />
    <Path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill={props?.color ? props?.color : '#292D32'}
    />
  </Svg>
  );
};
export const HomeIconFilled = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height}>
      <Path
        d="M20.0402 6.82165L14.2802 2.79165C12.7102 1.69165 10.3002 1.75165 8.79023 2.92165L3.78023 6.83165C2.78023 7.61165 1.99023 9.21165 1.99023 10.4716V17.3716C1.99023 19.9216 4.06023 22.0016 6.61023 22.0016H17.3902C19.9402 22.0016 22.0102 19.9316 22.0102 17.3816V10.6016C22.0102 9.25165 21.1402 7.59165 20.0402 6.82165ZM12.7502 18.0016C12.7502 18.4116 12.4102 18.7516 12.0002 18.7516C11.5902 18.7516 11.2502 18.4116 11.2502 18.0016V15.0016C11.2502 14.5916 11.5902 14.2516 12.0002 14.2516C12.4102 14.2516 12.7502 14.5916 12.7502 15.0016V18.0016Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ProfileIcon = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height}>
      <Path
        d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11016 18.8001C2.91016 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91016 5.90011 4.11016 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86016 6.5001C4.12016 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12016 17.0701 4.86016 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.2002 20.9301L19.1402 17.5001C19.8802 17.0701 20.3402 16.2801 20.3402 15.4201V8.58011C20.3402 7.73011 19.8802 6.9301 19.1402 6.5001L13.2002 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.9999 11.7501C10.2999 11.7501 8.91992 10.37 8.91992 8.67004C8.91992 6.97004 10.2999 5.59009 11.9999 5.59009C13.6999 5.59009 15.0799 6.97004 15.0799 8.67004C15.0799 10.37 13.6999 11.7501 11.9999 11.7501ZM11.9999 7.09009C11.1299 7.09009 10.4199 7.80004 10.4199 8.67004C10.4199 9.54004 11.1299 10.2501 11.9999 10.2501C12.8699 10.2501 13.5799 9.54004 13.5799 8.67004C13.5799 7.80004 12.8699 7.09009 11.9999 7.09009Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M16 17.4101C15.59 17.4101 15.25 17.0701 15.25 16.6601C15.25 15.2801 13.79 14.1501 12 14.1501C10.21 14.1501 8.75 15.2801 8.75 16.6601C8.75 17.0701 8.41 17.4101 8 17.4101C7.59 17.4101 7.25 17.0701 7.25 16.6601C7.25 14.4501 9.38 12.6501 12 12.6501C14.62 12.6501 16.75 14.4501 16.75 16.6601C16.75 17.0701 16.41 17.4101 16 17.4101Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};
export const ProfileIconFilled = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height}>
      <Path
        d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM12.0019 7.34C13.2919 7.34 14.3319 8.38 14.3319 9.67C14.3319 10.96 13.2919 12 12.0019 12C10.7119 12 9.67188 10.96 9.67188 9.67C9.67188 8.39 10.7119 7.34 12.0019 7.34ZM14.6819 16.66H9.32187C8.51187 16.66 8.04187 15.76 8.49187 15.09C9.17187 14.08 10.4919 13.4 12.0019 13.4C13.5119 13.4 14.8319 14.08 15.5119 15.09C15.9619 15.75 15.4819 16.66 14.6819 16.66Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const TemplatesIcon = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 90 90" width={props.width} height={props.height}>
         {/* Hexagon with rounded corners */}
           {/* Hexagon with rounded corners */}
      <Path 
        d="M 45 5 
           Q 73 15 75 22.5 
           L 75 67.5 
           Q 73 75 45 85 
           Q 17 75 15 67.5 
           L 15 22.5 
           Q 17 15 45 5 Z" 
        stroke="white" 
        strokeWidth="3" 
        fill="none"
      />
      {/* Icon Circles */}
      <Circle cx="44.5" cy="35.5" r="8.5" transform="rotate(-180 44.5 35.5)" fill="none" stroke="#D9D9D9" strokeWidth="2" />
      <Circle cx="44.75" cy="35.75" r="3.75" transform="rotate(-180 44.75 35.75)" fill="none" stroke="#D9D9D9" strokeWidth="2" />
      <Circle cx="45" cy="56" r="11" transform="rotate(-180 45 56)" fill="none" stroke="#D9D9D9" strokeWidth="2" />
      <Circle cx="45" cy="56" r="5" transform="rotate(-180 45 56)" fill="none" stroke="#D9D9D9" strokeWidth="2" />
    </Svg>
  );
};
export const TemplatesIconFilled = (props: iconPropsType) => {
  return (
    <Svg viewBox="0 0 90 90" width={props.width} height={props.height}>
         {/* Hexagon with rounded corners */}
         <Path 
        d="M 45 5 
           Q 73 15 75 22.5 
           L 75 67.5 
           Q 73 75 45 85 
           Q 17 75 15 67.5 
           L 15 22.5 
           Q 17 15 45 5 Z" 
        fill="white"
      />
    <Circle cx="44.5" cy="35.5" r="8.5" transform="rotate(-180 44.5 35.5)" fill="#292D32" stroke="white" strokeWidth="2" />
    <Circle cx="44.75" cy="35.75" r="3.75" transform="rotate(-180 44.75 35.75)" fill="#292D32" stroke="white" strokeWidth="2" />
    <Circle cx="45" cy="56" r="11" transform="rotate(-180 45 56)" fill="#292D32" stroke="white" strokeWidth="2" />
    <Circle cx="45" cy="56" r="5" transform="rotate(-180 45 56)" fill="#292D32" stroke="white" strokeWidth="2" />
  </Svg>
  );
};

export const NotificationIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 10.5199C11.59 10.5199 11.25 10.1799 11.25 9.76994V6.43994C11.25 6.02994 11.59 5.68994 12 5.68994C12.41 5.68994 12.75 6.02994 12.75 6.43994V9.76994C12.75 10.1899 12.41 10.5199 12 10.5199Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M12.0199 20.3502C9.43987 20.3502 6.86987 19.9402 4.41987 19.1202C3.50987 18.8202 2.81987 18.1702 2.51987 17.3502C2.21987 16.5302 2.31987 15.5902 2.80987 14.7702L4.07987 12.6502C4.35987 12.1802 4.60987 11.3002 4.60987 10.7502V8.65023C4.60987 4.56023 7.92987 1.24023 12.0199 1.24023C16.1099 1.24023 19.4299 4.56023 19.4299 8.65023V10.7502C19.4299 11.2902 19.6799 12.1802 19.9599 12.6502L21.2299 14.7702C21.6999 15.5502 21.7799 16.4802 21.4699 17.3302C21.1599 18.1802 20.4799 18.8302 19.6199 19.1202C17.1699 19.9502 14.5999 20.3502 12.0199 20.3502ZM12.0199 2.75023C8.75987 2.75023 6.10987 5.40023 6.10987 8.66023V10.7602C6.10987 11.5702 5.78987 12.7402 5.36987 13.4302L4.09987 15.5602C3.83987 15.9902 3.77987 16.4502 3.92987 16.8502C4.07987 17.2502 4.41987 17.5502 4.89987 17.7102C9.49987 19.2402 14.5599 19.2402 19.1599 17.7102C19.5899 17.5702 19.9199 17.2502 20.0699 16.8302C20.2299 16.4102 20.1799 15.9502 19.9499 15.5602L18.6799 13.4402C18.2599 12.7502 17.9399 11.5802 17.9399 10.7702V8.67023C17.9299 5.40023 15.2799 2.75023 12.0199 2.75023Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.9999 22.8998C10.9299 22.8998 9.87992 22.4598 9.11992 21.6998C8.35992 20.9398 7.91992 19.8898 7.91992 18.8198H9.41992C9.41992 19.4998 9.69992 20.1598 10.1799 20.6398C10.6599 21.1198 11.3199 21.3998 11.9999 21.3998C13.4199 21.3998 14.5799 20.2398 14.5799 18.8198H16.0799C16.0799 21.0698 14.2499 22.8998 11.9999 22.8998Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};
export const NoNotificationIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M22.309 5.58a1 1 0 0 0-.15-1.407A9.836 9.836 0 0 0 15.98 2c-5.397 0-9.788 4.392-9.788 9.79v7.5a1 1 0 1 0 2 0v-7.5C8.192 7.493 11.687 4 16.02 4c1.766 0 3.5.614 4.882 1.73a1 1 0 0 0 1.407-.15z"
        fill={props?.color ? props?.color : '#292D32'}
        opacity="1"
        data-original={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M14.98 6.901a1 1 0 0 0 1 1c.796 0 1.557.23 2.2.666a.998.998 0 0 0 1.389-.266.999.999 0 0 0-.266-1.388 5.886 5.886 0 0 0-3.323-1.012 1 1 0 0 0-1 1zM19.1 26.451C18.376 27.421 17.218 28 16 28s-2.376-.58-3.1-1.549a1 1 0 1 0-1.604 1.195C12.397 29.12 14.155 30 16 30s3.604-.88 4.703-2.354a1 1 0 1 0-1.603-1.195z"
        fill={props?.color ? props?.color : '#292D32'}
        opacity="1"
        data-original={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M27.974 2.615 2.612 27.975a1 1 0 1 0 1.414 1.415l4.262-4.262h16.715a2.896 2.896 0 0 0 2.893-2.893c0-1.315-.883-2.43-2.088-2.778v-7.668a9.704 9.704 0 0 0-.67-3.51l4.25-4.25a1 1 0 1 0-1.414-1.414zm-4.166 9.174v8.554a1 1 0 0 0 1 1h.195a.894.894 0 0 1 0 1.785H10.288L23.554 9.862a7.74 7.74 0 0 1 .254 1.927z"
        fill={props?.color ? props?.color : '#292D32'}
        opacity="1"
        data-original={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const StarIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 512 512"
      fill="none">
      <Path
        d="m353.822 158.17 41.571 17.2 41.621-100.393-100.393 41.631zM353.822 353.83l-17.201 41.562 100.393 41.631-41.621-100.393zM158.17 353.83l-41.571-17.2-41.621 100.393 100.393-41.621zM158.17 158.17l17.201-41.572L74.978 74.977l41.621 100.393z"
        fill={props?.color ? props?.color : '#292D32'}
        opacity="1"
        data-original={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M330.927 181.073 256 0l-74.927 181.073L0 256l181.073 74.927L256 512l74.927-181.073L512 256zM335.078 35.066h29.915v29.915h-29.915zM463.061 154.483h29.915v29.915h-29.915zM159.493 451.442h29.915v29.915h-29.915z"
        fill={props?.color ? props?.color : '#292D32'}
        opacity="1"
        data-original={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const SettingIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const AvatarLogo = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        opacity="0.4"
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const MoreIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 19 16"
      fill="none">
      <Path
        d="M4.4751 4.04002L7.7351 7.30002C8.1201 7.68502 8.1201 8.31502 7.7351 8.70002L4.4751 11.96"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.96655 2.72003L13.3132 7.0667C13.8266 7.58003 13.8266 8.42003 13.3132 8.93336L8.96655 13.28"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const LanguageIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const LanguageTwoIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.06 18.6699L16.92 14.3999L14.78 18.6699"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1699 17.9099H18.6899"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9201 22.0001C14.1201 22.0001 11.8401 19.73 11.8401 16.92C11.8401 14.12 14.1101 11.8401 16.9201 11.8401C19.7201 11.8401 22.0001 14.11 22.0001 16.92C22.0001 19.73 19.7301 22.0001 16.9201 22.0001Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.00995 5.84985H4.94995"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.96997 5.16992V5.84991"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.98994 5.83984C7.98994 7.58984 6.61994 9.00983 4.93994 9.00983"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.0099 9.01001C8.2799 9.01001 7.61991 8.62 7.15991 8"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SettingsIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeMiterlimit="10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RateIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.81005C15.15 4.07005 15.71 4.28002 16.11 4.28002H17.81C18.87 4.28002 19.74 5.14996 19.74 6.20996V7.91003C19.74 8.30003 19.95 8.87004 20.21 9.17004L21.57 10.75C22.16 11.44 22.16 12.57 21.57 13.27L20.21 14.85C19.95 15.15 19.74 15.71 19.74 16.11V17.8101C19.74 18.8701 18.87 19.74 17.81 19.74H16.11C15.72 19.74 15.15 19.95 14.85 20.21L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17002 20.21C8.87002 19.95 8.31001 19.74 7.91001 19.74H6.18C5.12 19.74 4.25 18.8701 4.25 17.8101V16.1C4.25 15.71 4.04001 15.15 3.79001 14.85L2.44 13.26C1.86 12.57 1.86 11.45 2.44 10.76L3.79001 9.17004C4.04001 8.87004 4.25 8.31004 4.25 7.92004V6.20996C4.25 5.14996 5.12 4.28002 6.18 4.28002H7.91001C8.30001 4.28002 8.87002 4.07005 9.17002 3.81005L10.75 2.44995Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.89001 14.82L11.34 15.94C11.53 16.13 11.95 16.22 12.23 16.22H14C14.56 16.22 15.17 15.8 15.31 15.24L16.43 11.82C16.66 11.17 16.24 10.6 15.54 10.6H13.67C13.39 10.6 13.16 10.3701 13.2 10.0401L13.43 8.54008C13.52 8.12008 13.24 7.65005 12.82 7.51005C12.45 7.37005 11.98 7.56 11.79 7.84L9.87 10.69"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <Path
        d="M7.5 14.8199V10.24C7.5 9.57999 7.78 9.34998 8.44 9.34998H8.91C9.56 9.34998 9.85001 9.57999 9.85001 10.24V14.8199C9.85001 15.4699 9.57 15.71 8.91 15.71H8.44C7.78 15.71 7.5 15.4799 7.5 14.8199Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const FAQIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.75 2.44995C11.45 1.85995 12.58 1.85995 13.26 2.44995L14.84 3.79995C15.14 4.04995 15.71 4.25995 16.11 4.25995H17.81C18.87 4.25995 19.74 5.12995 19.74 6.18995V7.88995C19.74 8.28995 19.95 8.84995 20.2 9.14995L21.55 10.7299C22.14 11.4299 22.14 12.5599 21.55 13.2399L20.2 14.8199C19.95 15.1199 19.74 15.6799 19.74 16.0799V17.7799C19.74 18.8399 18.87 19.7099 17.81 19.7099H16.11C15.71 19.7099 15.15 19.9199 14.85 20.1699L13.27 21.5199C12.57 22.1099 11.44 22.1099 10.76 21.5199L9.18001 20.1699C8.88001 19.9199 8.31 19.7099 7.92 19.7099H6.17C5.11 19.7099 4.24 18.8399 4.24 17.7799V16.0699C4.24 15.6799 4.04 15.1099 3.79 14.8199L2.44 13.2299C1.86 12.5399 1.86 11.4199 2.44 10.7299L3.79 9.13995C4.04 8.83995 4.24 8.27995 4.24 7.88995V6.19995C4.24 5.13995 5.11 4.26995 6.17 4.26995H7.9C8.3 4.26995 8.86 4.05995 9.16 3.80995L10.75 2.44995Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 8.13V12.96"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9945 16H12.0035"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const MessageIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.4955 13.25H13.5045"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.9955 13.25H10.0045"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.4955 13.25H6.5045"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const LogoutIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 12H3.62"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CreateResumeIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16.8 13H7.2C6.544 13 6 12.5467 6 12C6 11.4533 6.544 11 7.2 11H16.8C17.456 11 18 11.4533 18 12C18 12.5467 17.456 13 16.8 13Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M12 18C11.4533 18 11 17.456 11 16.8V7.2C11 6.544 11.4533 6 12 6C12.5467 6 13 6.544 13 7.2V16.8C13 17.456 12.5467 18 12 18Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const ContentIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13H13"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 17H11"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CreateResumeIconTwo = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 40 40"
      fill="none">
      <Path
        d="M3.33333 15V10.8333C3.33333 6.68334 6.68333 3.33334 10.8333 3.33334H15"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 3.33334H29.1667C33.3167 3.33334 36.6667 6.68334 36.6667 10.8333V15"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M36.6667 26.6667V29.1667C36.6667 33.3167 33.3167 36.6667 29.1667 36.6667H26.6667"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 36.6667H10.8333C6.68333 36.6667 3.33333 33.3167 3.33333 29.1667V25"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.5 27.5H22.5"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.5 29.5V25.5"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.16 18.87C20.06 18.86 19.94 18.86 19.83 18.87C17.45 18.79 15.56 16.84 15.56 14.44C15.55 11.99 17.54 10 19.99 10C22.44 10 24.43 11.99 24.43 14.44C24.43 16.84 22.53 18.79 20.16 18.87Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.99 29.81C18.17 29.81 16.36 29.35 14.98 28.43C12.56 26.81 12.56 24.17 14.98 22.56C17.73 20.72 22.24 20.72 24.99 22.56"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CoverLetterIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.55 9.22998H13.88"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.71997 6.22998H14.72"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ResignationLetterIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 8V2L10 4"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2L14 4"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 12V10C5 7.99004 5 6.33004 8 6.04004"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12V10C19 7.99004 19 6.33004 16 6.04004"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SecurityIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M10.49 2.23006L5.49997 4.11006C4.34997 4.54006 3.40997 5.90006 3.40997 7.12006V14.5501C3.40997 15.7301 4.18997 17.2801 5.13997 17.9901L9.43997 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 12.5V15.5"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const LevelIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.38 10C6.71 11.31 6.71 12.69 6.38 14"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.88 10C10.21 11.31 10.21 12.69 9.88 14"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TermsIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 13H12"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 17H16"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const MoreSettingIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9.25 5C9.25 3.48 10.48 2.25 12 2.25C13.52 2.25 14.75 3.48 14.75 5C14.75 6.52 13.52 7.75 12 7.75C10.48 7.75 9.25 6.52 9.25 5ZM13.25 5C13.25 4.31 12.69 3.75 12 3.75C11.31 3.75 10.75 4.31 10.75 5C10.75 5.69 11.31 6.25 12 6.25C12.69 6.25 13.25 5.69 13.25 5Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M9.25 19C9.25 17.48 10.48 16.25 12 16.25C13.52 16.25 14.75 17.48 14.75 19C14.75 20.52 13.52 21.75 12 21.75C10.48 21.75 9.25 20.52 9.25 19ZM13.25 19C13.25 18.31 12.69 17.75 12 17.75C11.31 17.75 10.75 18.31 10.75 19C10.75 19.69 11.31 20.25 12 20.25C12.69 20.25 13.25 19.69 13.25 19Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M9.25 12C9.25 10.48 10.48 9.25 12 9.25C13.52 9.25 14.75 10.48 14.75 12C14.75 13.52 13.52 14.75 12 14.75C10.48 14.75 9.25 13.52 9.25 12ZM13.25 12C13.25 11.31 12.69 10.75 12 10.75C11.31 10.75 10.75 11.31 10.75 12C10.75 12.69 11.31 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12Z"
        fill={props?.color ? props?.color : '#292D32'}
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="100"
      />
      <Path
        d="M11.75 13.5C12.7165 13.5 13.5 12.7165 13.5 11.75C13.5 10.7835 12.7165 10 11.75 10C10.7835 10 10 10.7835 10 11.75C10 12.7165 10.7835 13.5 11.75 13.5Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.75 20.5C12.7165 20.5 13.5 19.7165 13.5 18.75C13.5 17.7835 12.7165 17 11.75 17C10.7835 17 10 17.7835 10 18.75C10 19.7165 10.7835 20.5 11.75 20.5Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.75 6.5C12.7165 6.5 13.5 5.7165 13.5 4.75C13.5 3.7835 12.7165 3 11.75 3C10.7835 3 10 3.7835 10 4.75C10 5.7165 10.7835 6.5 11.75 6.5Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const UploadIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 8V2L20 4"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 2L16 4"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PremuimIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M18.5408 4.11984L13.0408 2.05984C12.4708 1.84984 11.5408 1.84984 10.9708 2.05984L5.47078 4.11984C4.41078 4.51984 3.55078 5.75984 3.55078 6.88984V14.9898C3.55078 15.7998 4.08078 16.8698 4.73078 17.3498L10.2308 21.4598C11.2008 22.1898 12.7908 22.1898 13.7608 21.4598L19.2608 17.3498C19.9108 16.8598 20.4408 15.7998 20.4408 14.9898V6.88984C20.4508 5.75984 19.5908 4.51984 18.5408 4.11984ZM15.4808 9.71984L11.1808 14.0198C11.0308 14.1698 10.8408 14.2398 10.6508 14.2398C10.4608 14.2398 10.2708 14.1698 10.1208 14.0198L8.52078 12.3998C8.23078 12.1098 8.23078 11.6298 8.52078 11.3398C8.81078 11.0498 9.29078 11.0498 9.58078 11.3398L10.6608 12.4198L14.4308 8.64984C14.7208 8.35984 15.2008 8.35984 15.4908 8.64984C15.7808 8.93984 15.7808 9.42984 15.4808 9.71984Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const CloseIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const EditIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 19"
      fill="none">
      <Path
        d="M10.2633 2.43908L2.05327 11.1291C1.74327 11.4591 1.44327 12.1091 1.38327 12.5591L1.01327 15.7991C0.88327 16.9691 1.72327 17.7691 2.88327 17.5691L6.10327 17.0191C6.55327 16.9391 7.18327 16.6091 7.49327 16.2691L15.7033 7.57908C17.1233 6.07908 17.7633 4.36908 15.5533 2.27908C13.3533 0.209084 11.6833 0.939084 10.2633 2.43908Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89331 3.88916C9.32331 6.64916 11.5633 8.75916 14.3433 9.03916"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ShareIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.4201 12.2198C20.0101 12.2198 19.6701 11.8798 19.6701 11.4698V8.1499C19.6701 6.9099 18.6601 5.8999 17.4201 5.8999H3.58008C3.17008 5.8999 2.83008 5.5599 2.83008 5.1499C2.83008 4.7399 3.17008 4.3999 3.58008 4.3999H17.4201C19.4901 4.3999 21.1701 6.0799 21.1701 8.1499V11.4698C21.1701 11.8898 20.8301 12.2198 20.4201 12.2198Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M6.74008 9.06998C6.55008 9.06998 6.36008 8.99995 6.21008 8.84995L3.05008 5.68997C2.91008 5.54997 2.83008 5.35994 2.83008 5.15994C2.83008 4.95994 2.91008 4.76998 3.05008 4.62998L6.21008 1.46994C6.50008 1.17994 6.98008 1.17994 7.27008 1.46994C7.56008 1.75994 7.56008 2.24 7.27008 2.53L4.64011 5.15994L7.27008 7.78995C7.56008 8.07995 7.56008 8.55995 7.27008 8.84995C7.12008 8.98995 6.93008 9.06998 6.74008 9.06998Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M20.4201 19.59H6.58008C4.51008 19.59 2.83008 17.91 2.83008 15.84V12.52C2.83008 12.11 3.17008 11.77 3.58008 11.77C3.99008 11.77 4.33008 12.11 4.33008 12.52V15.84C4.33008 17.08 5.34008 18.09 6.58008 18.09H20.4201C20.8301 18.09 21.1701 18.43 21.1701 18.84C21.1701 19.25 20.8301 19.59 20.4201 19.59Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.2592 22.7501C17.0692 22.7501 16.8792 22.6801 16.7292 22.5301C16.4392 22.2401 16.4392 21.7601 16.7292 21.4701L19.3592 18.8401L16.7292 16.2101C16.4392 15.9201 16.4392 15.4401 16.7292 15.1501C17.0192 14.8601 17.4992 14.8601 17.7892 15.1501L20.9492 18.3101C21.0892 18.4501 21.1692 18.6401 21.1692 18.8401C21.1692 19.0401 21.0892 19.2301 20.9492 19.3701L17.7892 22.5301C17.6492 22.6801 17.4592 22.7501 17.2592 22.7501Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const DownloadIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9 17.75C8.9 17.75 8.81 17.73 8.71 17.69C8.43 17.58 8.25 17.3 8.25 17V11C8.25 10.59 8.59 10.25 9 10.25C9.41 10.25 9.75 10.59 9.75 11V15.19L10.47 14.47C10.76 14.18 11.24 14.18 11.53 14.47C11.82 14.76 11.82 15.24 11.53 15.53L9.53 17.53C9.39 17.67 9.19 17.75 9 17.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M8.99945 17.7499C8.80945 17.7499 8.61945 17.6799 8.46945 17.5299L6.46945 15.5299C6.17945 15.2399 6.17945 14.7599 6.46945 14.4699C6.75945 14.1799 7.23945 14.1799 7.52945 14.4699L9.52945 16.4699C9.81945 16.7599 9.81945 17.2399 9.52945 17.5299C9.37945 17.6799 9.18945 17.7499 8.99945 17.7499Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const AlertIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19.5099 5.85L13.5699 2.42C12.5999 1.86 11.3999 1.86 10.4199 2.42L4.48992 5.85C3.51992 6.41 2.91992 7.45 2.91992 8.58V15.42C2.91992 16.54 3.51992 17.58 4.48992 18.15L10.4299 21.58C11.3999 22.14 12.5999 22.14 13.5799 21.58L19.5199 18.15C20.4899 17.59 21.0899 16.55 21.0899 15.42V8.58C21.0799 7.45 20.4799 6.42 19.5099 5.85ZM11.2499 7.75C11.2499 7.34 11.5899 7 11.9999 7C12.4099 7 12.7499 7.34 12.7499 7.75V13C12.7499 13.41 12.4099 13.75 11.9999 13.75C11.5899 13.75 11.2499 13.41 11.2499 13V7.75ZM12.9199 16.63C12.8699 16.75 12.7999 16.86 12.7099 16.96C12.5199 17.15 12.2699 17.25 11.9999 17.25C11.8699 17.25 11.7399 17.22 11.6199 17.17C11.4899 17.12 11.3899 17.05 11.2899 16.96C11.1999 16.86 11.1299 16.75 11.0699 16.63C11.0199 16.51 10.9999 16.38 10.9999 16.25C10.9999 15.99 11.0999 15.73 11.2899 15.54C11.3899 15.45 11.4899 15.38 11.6199 15.33C11.9899 15.17 12.4299 15.26 12.7099 15.54C12.7999 15.64 12.8699 15.74 12.9199 15.87C12.9699 15.99 12.9999 16.12 12.9999 16.25C12.9999 16.38 12.9699 16.51 12.9199 16.63Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const MostSelectedIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M13.3 8.11032L14.62 10.7503C14.8 11.1103 15.28 11.4703 15.68 11.5303L18.07 11.9303C19.6 12.1903 19.96 13.2903 18.86 14.3903L17 16.2603C16.69 16.5703 16.51 17.1803 16.61 17.6203L17.14 19.9303C17.56 21.7503 16.59 22.4603 14.98 21.5103L12.74 20.1803C12.33 19.9403 11.67 19.9403 11.26 20.1803L9.00997 21.5003C7.39997 22.4503 6.42997 21.7403 6.84997 19.9203L7.37997 17.6103C7.47997 17.1803 7.29997 16.5703 6.98997 16.2503L5.13997 14.4003C4.03997 13.3003 4.39997 12.1903 5.92997 11.9403L8.31997 11.5403C8.71997 11.4703 9.19997 11.1203 9.37997 10.7603L10.7 8.12032C11.41 6.68032 12.59 6.68032 13.3 8.11032Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M6 9.75C5.59 9.75 5.25 9.41 5.25 9V2C5.25 1.59 5.59 1.25 6 1.25C6.41 1.25 6.75 1.59 6.75 2V9C6.75 9.41 6.41 9.75 6 9.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M18 9.75C17.59 9.75 17.25 9.41 17.25 9V2C17.25 1.59 17.59 1.25 18 1.25C18.41 1.25 18.75 1.59 18.75 2V9C18.75 9.41 18.41 9.75 18 9.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ProfessionalIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M21.091 6.97953C20.241 6.03953 18.831 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.84953 7.48101 5.52953V5.56953H7.24101C5.17101 5.56953 3.75101 6.03953 2.91101 6.97953C1.92101 8.08953 1.95101 9.55953 2.05101 10.5695L2.06101 10.6395L2.1301 11.4455C2.14329 11.5994 2.22683 11.7387 2.35655 11.8227C2.64024 12.0063 2.94207 12.199 3.23101 12.3595C3.37101 12.4495 3.52101 12.5295 3.67101 12.6095C4.80101 13.2295 6.01101 13.7195 7.25101 14.0595C7.28101 16.6495 9.40101 18.7495 12.001 18.7495C14.621 18.7495 16.751 16.6195 16.751 13.9995V13.9595C18.011 13.5795 19.221 13.0495 20.351 12.3895C20.411 12.3595 20.451 12.3295 20.501 12.2995C20.8956 12.0851 21.305 11.8043 21.6786 11.5395C21.7948 11.457 21.8698 11.3285 21.8852 11.1868L21.951 10.5795C21.961 10.5195 21.961 10.4695 21.971 10.3995C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM8.91101 5.52953C8.91101 3.82953 8.91101 3.18953 11.241 3.18953H12.761C15.091 3.18953 15.091 3.82953 15.091 5.52953V5.56953H8.91101V5.52953ZM12.001 17.2495C10.351 17.2495 8.98101 16.0095 8.78101 14.4095C8.76101 14.2795 8.75101 14.1395 8.75101 13.9995C8.75101 12.2095 10.211 10.7495 12.001 10.7495C13.791 10.7495 15.251 12.2095 15.251 13.9995C15.251 14.1195 15.241 14.2295 15.231 14.3395V14.3495C15.051 15.9795 13.671 17.2495 12.001 17.2495Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.4289 16.0284C11.2389 16.0284 11.0489 15.9584 10.8989 15.8084L9.90891 14.8284C9.61891 14.5384 9.61891 14.0584 9.90891 13.7684C10.1989 13.4784 10.6789 13.4784 10.9689 13.7684L11.4489 14.2484L13.0589 12.7684C13.3589 12.4884 13.8389 12.5084 14.1189 12.8084C14.3989 13.1084 14.3789 13.5884 14.0789 13.8684L11.9489 15.8384C11.7889 15.9584 11.6089 16.0284 11.4289 16.0284Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M21.0416 13.7311C21.2903 13.5929 21.6129 13.7931 21.587 14.0765L21.2316 17.9611C21.0216 19.9611 20.2016 22.0011 15.8016 22.0011H8.18156C3.78156 22.0011 2.96156 19.9611 2.76156 17.9711L2.41569 14.2678C2.38884 13.9802 2.69635 13.786 2.95156 13.9211C3.73156 14.3511 4.54156 14.7311 5.37156 15.0311C5.68156 15.1411 5.90156 15.4011 5.99156 15.7211C6.74156 18.3211 9.16156 20.2511 12.0016 20.2511C14.8916 20.2511 17.3316 18.2811 18.0416 15.5811C18.1216 15.2611 18.3416 15.0011 18.6516 14.8811C19.4916 14.5511 20.2916 14.1611 21.0416 13.7311Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ATSIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 10.64 4.61 9.31 5.28 8.14C5.48 7.78 5.94 7.66 6.3 7.86L12.37 11.35C12.73 11.56 12.85 12.01 12.65 12.37C12.44 12.73 11.99 12.85 11.63 12.65L8.72 10.98C8.62 11.31 8.55 11.65 8.55 12C8.55 13.9 10.1 15.45 12 15.45C13.9 15.45 15.45 13.9 15.45 12C15.45 10.1 13.9 8.55 12 8.55C11.49 8.55 10.99 8.66 10.53 8.88C10.15 9.06 9.71 8.9 9.53 8.52C9.35 8.15 9.51 7.7 9.89 7.52C10.55 7.21 11.26 7.05 12 7.05C14.73 7.05 16.95 9.27 16.95 12C16.95 14.73 14.73 16.95 12 16.95C9.27 16.95 7.05 14.73 7.05 12C7.05 11.39 7.17 10.78 7.39 10.21L6.24 9.56C5.92 10.33 5.75 11.16 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C10.64 5.75 9.34 6.18 8.25 7C7.92 7.25 7.45 7.18 7.2 6.85C6.95 6.52 7.02 6.05 7.35 5.8C8.7 4.79 10.31 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const SimpleIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75ZM13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ModernIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16 8H8V16H16V8Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M2 19C2 20.65 3.35 22 5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8H8V5C8 3.35 6.65 2 5 2Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8H19C20.65 8 22 6.65 22 5Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M19 16H16V19C16 20.65 17.35 22 19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const TrashIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const EditIconTwo = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.3404 10.9498C17.3204 10.9498 17.2904 10.9498 17.2704 10.9498C14.1504 10.6398 11.6404 8.26985 11.1604 5.16985C11.1004 4.75985 11.3804 4.37985 11.7904 4.30985C12.2004 4.24985 12.5804 4.52985 12.6504 4.93985C13.0304 7.35985 14.9904 9.21985 17.4304 9.45985C17.8404 9.49985 18.1404 9.86985 18.1004 10.2798C18.0504 10.6598 17.7204 10.9498 17.3404 10.9498Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ArrowRightIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8.90961 20.67C8.71961 20.67 8.52961 20.6 8.37961 20.45C8.08961 20.16 8.08961 19.68 8.37961 19.39L14.8996 12.87C15.3796 12.39 15.3796 11.61 14.8996 11.13L8.37961 4.61002C8.08961 4.32002 8.08961 3.84002 8.37961 3.55002C8.66961 3.26002 9.14961 3.26002 9.43961 3.55002L15.9596 10.07C16.4696 10.58 16.7596 11.27 16.7596 12C16.7596 12.73 16.4796 13.42 15.9596 13.93L9.43961 20.45C9.28961 20.59 9.09961 20.67 8.90961 20.67Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const SummeryIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H17C17.41 8.75 17.75 9.09 17.75 9.5C17.75 9.91 17.41 10.25 17 10.25Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M14 15.25H7C6.59 15.25 6.25 14.91 6.25 14.5C6.25 14.09 6.59 13.75 7 13.75H14C14.41 13.75 14.75 14.09 14.75 14.5C14.75 14.91 14.41 15.25 14 15.25Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const WorkIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16.0002 22.75H8.00023C3.38023 22.75 2.52023 20.6 2.30023 18.51L1.55023 10.5C1.44023 9.45001 1.41023 7.90001 2.45023 6.74001C3.35023 5.74001 4.84023 5.26001 7.00023 5.26001H17.0002C19.1702 5.26001 20.6602 5.75001 21.5502 6.74001C22.5902 7.90001 22.5602 9.45001 22.4502 10.51L21.7002 18.5C21.4802 20.6 20.6202 22.75 16.0002 22.75ZM7.00023 6.75001C5.31023 6.75001 4.15023 7.08001 3.56023 7.74001C3.07023 8.28001 2.91023 9.11001 3.04023 10.35L3.79023 18.36C3.96023 19.94 4.39023 21.25 8.00023 21.25H16.0002C19.6002 21.25 20.0402 19.94 20.2102 18.35L20.9602 10.36C21.0902 9.11001 20.9302 8.28001 20.4402 7.74001C19.8502 7.08001 18.6902 6.75001 17.0002 6.75001H7.00023Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M16 6.75C15.59 6.75 15.25 6.41 15.25 6V5.2C15.25 3.42 15.25 2.75 12.8 2.75H11.2C8.75 2.75 8.75 3.42 8.75 5.2V6C8.75 6.41 8.41 6.75 8 6.75C7.59 6.75 7.25 6.41 7.25 6V5.2C7.25 3.44 7.25 1.25 11.2 1.25H12.8C16.75 1.25 16.75 3.44 16.75 5.2V6C16.75 6.41 16.41 6.75 16 6.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M12 16.75C9.25 16.75 9.25 15.05 9.25 14.03V13C9.25 11.59 9.59 11.25 11 11.25H13C14.41 11.25 14.75 11.59 14.75 13V14C14.75 15.04 14.75 16.75 12 16.75ZM10.75 12.75C10.75 12.83 10.75 12.92 10.75 13V14.03C10.75 15.06 10.75 15.25 12 15.25C13.25 15.25 13.25 15.09 13.25 14.02V13C13.25 12.92 13.25 12.83 13.25 12.75C13.17 12.75 13.08 12.75 13 12.75H11C10.92 12.75 10.83 12.75 10.75 12.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M13.9995 14.77C13.6295 14.77 13.2995 14.49 13.2595 14.11C13.2095 13.7 13.4995 13.32 13.9095 13.27C16.5495 12.94 19.0795 11.94 21.2095 10.39C21.5395 10.14 22.0095 10.22 22.2595 10.56C22.4995 10.89 22.4295 11.36 22.0895 11.61C19.7495 13.31 16.9895 14.4 14.0895 14.77C14.0595 14.77 14.0295 14.77 13.9995 14.77Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M10.0007 14.7799C9.97072 14.7799 9.94072 14.7799 9.91072 14.7799C7.17072 14.4699 4.50072 13.4699 2.19072 11.8899C1.85072 11.6599 1.76072 11.1899 1.99072 10.8499C2.22072 10.5099 2.69072 10.4199 3.03072 10.6499C5.14072 12.0899 7.57072 12.9999 10.0707 13.2899C10.4807 13.3399 10.7807 13.7099 10.7307 14.1199C10.7007 14.4999 10.3807 14.7799 10.0007 14.7799Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const SkillsIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M13.57 22.3801C13.34 22.3801 13.11 22.3401 12.89 22.2601C12.14 21.9801 11.66 21.2801 11.66 20.4801V14.0301H9.31997C8.55997 14.0301 7.89996 13.6001 7.58996 12.9101C7.27996 12.2201 7.39996 11.4401 7.89996 10.8701L15.47 2.27006C16 1.67006 16.82 1.46006 17.57 1.75006C18.32 2.03006 18.7999 2.73006 18.7999 3.53006V9.98006H21.14C21.9 9.98006 22.56 10.4101 22.87 11.1001C23.18 11.7901 23.06 12.5701 22.56 13.1401L14.99 21.7401C14.62 22.1601 14.1 22.3801 13.57 22.3801ZM16.88 3.12006C16.79 3.12006 16.68 3.15006 16.59 3.26006L9.01995 11.8701C8.85995 12.0501 8.91997 12.2301 8.94997 12.3001C8.97997 12.3701 9.07997 12.5401 9.31997 12.5401H12.41C12.82 12.5401 13.16 12.8801 13.16 13.2901V20.4901C13.16 20.7401 13.34 20.8401 13.42 20.8701C13.5 20.9001 13.6999 20.9501 13.8599 20.7601L21.43 12.1501C21.59 11.9701 21.53 11.7901 21.5 11.7201C21.47 11.6501 21.37 11.4801 21.13 11.4801H18.04C17.63 11.4801 17.29 11.1401 17.29 10.7301V3.53006C17.29 3.28006 17.11 3.18006 17.03 3.15006C17 3.13006 16.94 3.12006 16.88 3.12006Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};
export const EducationIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12.0103 17C11.1603 17 10.3003 16.78 9.63031 16.35L3.61031 12.42C2.49031 11.69 1.82031 10.46 1.82031 9.12003C1.82031 7.78003 2.49031 6.55003 3.61031 5.82003L9.64031 1.90003C10.9803 1.03003 13.0703 1.03003 14.4003 1.91003L20.3903 5.84003C21.5003 6.57003 22.1703 7.80003 22.1703 9.13003C22.1703 10.46 21.5003 11.69 20.3903 12.42L14.4003 16.35C13.7303 16.79 12.8703 17 12.0103 17ZM12.0103 2.75003C11.4403 2.75003 10.8703 2.88003 10.4603 3.16003L4.44031 7.08003C3.74031 7.54003 3.33031 8.28003 3.33031 9.12003C3.33031 9.96003 3.73031 10.7 4.44031 11.16L10.4603 15.09C11.2903 15.63 12.7503 15.63 13.5803 15.09L19.5703 11.16C20.2703 10.7 20.6703 9.96003 20.6703 9.12003C20.6703 8.28003 20.2703 7.54003 19.5703 7.08003L13.5803 3.15003C13.1603 2.89003 12.5903 2.75003 12.0103 2.75003Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.9992 22.7501C11.5592 22.7501 11.1092 22.6901 10.7492 22.5701L7.5592 21.5101C6.0492 21.0101 4.8592 19.3601 4.8692 17.7701L4.8792 13.0801C4.8792 12.6701 5.2192 12.3301 5.6292 12.3301C6.0392 12.3301 6.3792 12.6701 6.3792 13.0801L6.3692 17.7701C6.3692 18.7101 7.1492 19.7901 8.0392 20.0901L11.2292 21.1501C11.6292 21.2801 12.3692 21.2801 12.7692 21.1501L15.9592 20.0901C16.8492 19.7901 17.6292 18.7101 17.6292 17.7801V13.1401C17.6292 12.7301 17.9692 12.3901 18.3792 12.3901C18.7892 12.3901 19.1292 12.7301 19.1292 13.1401V17.7801C19.1292 19.3701 17.9492 21.0101 16.4392 21.5201L13.2492 22.5801C12.8892 22.6901 12.4392 22.7501 11.9992 22.7501Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M21.4004 15.75C20.9904 15.75 20.6504 15.41 20.6504 15V9C20.6504 8.59 20.9904 8.25 21.4004 8.25C21.8104 8.25 22.1504 8.59 22.1504 9V15C22.1504 15.41 21.8104 15.75 21.4004 15.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const ArchivmentIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.9998 22.7501C11.3998 22.7501 10.8098 22.6101 10.3298 22.3401L5.59977 19.6101C3.63977 18.2901 3.50977 18.0501 3.50977 15.9801V11.0201C3.50977 8.95006 3.63977 8.71006 5.55977 7.42006L10.3398 4.66006C11.2898 4.11006 12.7198 4.11006 13.6698 4.66006L18.3998 7.39006C20.3598 8.71006 20.4898 8.95006 20.4898 11.0201V15.9801C20.4898 18.0501 20.3598 18.2901 18.4398 19.5801L13.6598 22.3401C13.1898 22.6201 12.5898 22.7501 11.9998 22.7501ZM11.9998 5.75006C11.6598 5.75006 11.3198 5.82006 11.0798 5.96006L6.34977 8.69006C5.00977 9.60006 5.00977 9.60006 5.00977 11.0201V15.9801C5.00977 17.4001 5.00977 17.4001 6.39977 18.3401L11.0898 21.0401C11.5698 21.3201 12.4398 21.3201 12.9198 21.0401L17.6498 18.3101C18.9898 17.4001 18.9898 17.4001 18.9898 15.9801V11.0201C18.9898 9.60006 18.9898 9.60006 17.5998 8.66006L12.9098 5.96006C12.6798 5.82006 12.3398 5.75006 11.9998 5.75006Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.5 8.38C17.09 8.38 16.75 8.04 16.75 7.63V5C16.75 3.42 16.08 2.75 14.5 2.75H9.5C7.92 2.75 7.25 3.42 7.25 5V7.56C7.25 7.97 6.91 8.31 6.5 8.31C6.09 8.31 5.75 7.98 5.75 7.56V5C5.75 2.58 7.08 1.25 9.5 1.25H14.5C16.92 1.25 18.25 2.58 18.25 5V7.63C18.25 8.04 17.91 8.38 17.5 8.38Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M13.6302 17.6301C13.4202 17.6301 13.2002 17.5901 12.9802 17.5001L12.0002 17.1201L11.0202 17.5101C10.4902 17.7201 9.95024 17.6701 9.55024 17.3801C9.15024 17.0901 8.94024 16.5901 8.97024 16.0201L9.03024 14.9701L8.36024 14.1601C8.00024 13.7101 7.88024 13.1901 8.04024 12.7101C8.19024 12.2401 8.60024 11.8801 9.15024 11.7401L10.1702 11.4801L10.7402 10.5901C11.3502 9.63012 12.6602 9.63012 13.2702 10.5901L13.8402 11.4801L14.8602 11.7401C15.4102 11.8801 15.8202 12.2401 15.9702 12.7101C16.1202 13.1801 16.0002 13.7101 15.6402 14.1501L14.9702 14.9601L15.0302 16.0101C15.0602 16.5801 14.8502 17.0701 14.4502 17.3701C14.2102 17.5401 13.9302 17.6301 13.6302 17.6301ZM9.52024 13.2001L10.1902 14.0101C10.4202 14.2801 10.5502 14.7101 10.5302 15.0601L10.4702 16.1101L11.4502 15.7201C11.7802 15.5901 12.2202 15.5901 12.5502 15.7201L13.5302 16.1101L13.4702 15.0601C13.4502 14.7101 13.5802 14.2901 13.8102 14.0101L14.4802 13.2001L13.4602 12.9401C13.1202 12.8501 12.7602 12.5901 12.5702 12.3001L12.0102 11.4201L11.4402 12.3001C11.2502 12.6001 10.8902 12.8601 10.5502 12.9501L9.52024 13.2001Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const CertificationIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M9 11.11C8.83 11.11 8.66 11.08 8.5 11.01C8.04 10.81 7.75 10.36 7.75 9.87V2C7.75 1.59 8.09 1.25 8.5 1.25H15.5C15.91 1.25 16.25 1.59 16.25 2V9.85999C16.25 10.36 15.96 10.81 15.5 11C15.05 11.2 14.52 11.11 14.15 10.77L12 8.79999L9.84998 10.78C9.60998 11 9.31 11.11 9 11.11ZM12 7.21002C12.3 7.21002 12.61 7.31998 12.85 7.53998L14.75 9.28998V2.75H9.25V9.28998L11.15 7.53998C11.39 7.31998 11.7 7.21002 12 7.21002Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.5 14.75H13.25C12.84 14.75 12.5 14.41 12.5 14C12.5 13.59 12.84 13.25 13.25 13.25H17.5C17.91 13.25 18.25 13.59 18.25 14C18.25 14.41 17.91 14.75 17.5 14.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M17.5 18.75H9C8.59 18.75 8.25 18.41 8.25 18C8.25 17.59 8.59 17.25 9 17.25H17.5C17.91 17.25 18.25 17.59 18.25 18C18.25 18.41 17.91 18.75 17.5 18.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};

export const VolunteeringIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 22.75C11.3 22.75 10.59 22.48 10.06 21.95L8.35001 20.26C7.93001 19.84 7.35001 19.61 6.76001 19.61H6C3.93 19.61 2.25 17.94 2.25 15.89V4.97998C2.25 2.92998 3.93 1.26001 6 1.26001H18C20.07 1.26001 21.75 2.92998 21.75 4.97998V15.89C21.75 17.94 20.07 19.61 18 19.61H17.24C16.65 19.61 16.07 19.85 15.65 20.26L13.94 21.95C13.41 22.48 12.7 22.75 12 22.75ZM6 2.75C4.76 2.75 3.75 3.74997 3.75 4.96997V15.88C3.75 17.11 4.76 18.1 6 18.1H6.76001C7.75001 18.1 8.71 18.5 9.41 19.19L11.12 20.88C11.61 21.36 12.4 21.36 12.89 20.88L14.6 19.19C15.3 18.5 16.26 18.1 17.25 18.1H18C19.24 18.1 20.25 17.1 20.25 15.88V4.96997C20.25 3.73997 19.24 2.75 18 2.75H6Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
      <Path
        d="M11.9998 15.75C11.8198 15.75 11.6398 15.72 11.4798 15.67C10.1598 15.22 6.75977 13.23 6.75977 9.51001C6.75977 7.71001 8.21977 6.25 10.0098 6.25C10.7398 6.25 11.4398 6.5 12.0098 6.94C12.5798 6.5 13.2798 6.25 14.0098 6.25C15.7998 6.25 17.2598 7.71001 17.2598 9.51001C17.2598 13.23 13.8498 15.22 12.5398 15.67C12.3598 15.72 12.1798 15.75 11.9998 15.75ZM9.99976 7.75C9.03976 7.75 8.24976 8.54001 8.24976 9.51001C8.24976 12.34 10.9997 13.92 11.9597 14.25C11.9697 14.25 12.0098 14.25 12.0398 14.25C13.0098 13.91 15.7397 12.33 15.7397 9.52002C15.7397 8.55002 14.9597 7.76001 13.9897 7.76001C13.4397 7.76001 12.9298 8.02002 12.5898 8.46002C12.3098 8.84002 11.6698 8.84002 11.3898 8.46002C11.0698 8.01002 10.5598 7.75 9.99976 7.75Z"
        fill={props?.color ? props?.color : '#292D32'}
      />
    </Svg>
  );
};
export const HobbbiesIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const SocialIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="m9.914,13.747l-.363-4.221h1.042l.249,3.158,1.209-2.327,1.209,2.327.247-3.158h1.044l-.363,4.221c-.031.44-.337.779-.706.779-.244,0-.471-.151-.601-.4l-.831-1.6-.831,1.6c-.129.249-.356.4-.601.4-.368,0-.675-.339-.706-.779Zm6.654.779c.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.363-4.221h-1.044l-.247,3.158-1.209-2.327-1.209,2.327-.249-3.158h-1.042l.363,4.221c.031.44.337.779.706.779Zm-12.706-.779c.031.44.337.779.706.779.244,0,.471-.151.601-.4l.831-1.6.831,1.6c.129.249.356.4.601.4.368,0,.675-.339.706-.779l.363-4.221h-1.044l-.247,3.158-1.209-2.327-1.209,2.327-.249-3.158h-1.042l.363,4.221Zm20.137-1.747c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12ZM14.604,2.356c.769.955,1.638,2.195,2.362,3.644h3.015c-1.321-1.753-3.201-3.056-5.377-3.644Zm-2.604.056c-.679.721-1.76,1.986-2.692,3.588h5.383c-.932-1.602-2.012-2.867-2.692-3.588Zm-7.981,3.588h3.015c.725-1.449,1.593-2.689,2.362-3.644-2.176.588-4.056,1.891-5.377,3.644Zm-2.019,6c0,1.422.303,2.774.841,4h18.318c.538-1.226.841-2.578.841-4s-.303-2.774-.841-4H2.841c-.538,1.226-.841,2.578-.841,4Zm7.308,6c.932,1.602,2.012,2.867,2.692,3.588.679-.721,1.76-1.986,2.692-3.588h-5.383Zm.088,3.644c-.769-.955-1.638-2.195-2.362-3.644h-3.015c1.321,1.753,3.201,3.056,5.377,3.644Zm10.585-3.644h-3.015c-.725,1.449-1.593,2.689-2.362,3.644,2.176-.588,4.056-1.891,5.377-3.644Z"
      />
    </Svg>
  );
};
export const SkillVierfyIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M8.38 12L10.79 14.42L15.62 9.57996"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.75 2.44995C11.44 1.85995 12.57 1.85995 13.27 2.44995L14.85 3.80995C15.15 4.06995 15.71 4.27995 16.11 4.27995H17.81C18.87 4.27995 19.74 5.14995 19.74 6.20995V7.90995C19.74 8.29995 19.95 8.86995 20.21 9.16995L21.57 10.7499C22.16 11.4399 22.16 12.5699 21.57 13.2699L20.21 14.8499C19.95 15.1499 19.74 15.7099 19.74 16.1099V17.8099C19.74 18.8699 18.87 19.7399 17.81 19.7399H16.11C15.72 19.7399 15.15 19.9499 14.85 20.2099L13.27 21.5699C12.58 22.1599 11.45 22.1599 10.75 21.5699L9.17 20.2099C8.87 19.9499 8.31 19.7399 7.91 19.7399H6.18C5.12 19.7399 4.25 18.8699 4.25 17.8099V16.0999C4.25 15.7099 4.04 15.1499 3.79 14.8499L2.44 13.2599C1.86 12.5699 1.86 11.4499 2.44 10.7599L3.79 9.16995C4.04 8.86995 4.25 8.30995 4.25 7.91995V6.19995C4.25 5.13995 5.12 4.26995 6.18 4.26995H7.91C8.3 4.26995 8.87 4.05995 9.17 3.79995L10.75 2.44995Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DragIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        fill={props?.color ? props?.color : '#292D32'}
        d="M8.5 4c0 .82843-.67157 1.5-1.5 1.5S5.5 4.82843 5.5 4 6.17157 2.5 7 2.5s1.5.67157 1.5 1.5zM7 11.5c.82843 0 1.5-.6716 1.5-1.5 0-.82843-.67157-1.5-1.5-1.5s-1.5.67157-1.5 1.5c0 .8284.67157 1.5 1.5 1.5zm0 6c.82843 0 1.5-.6716 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.6716-1.5 1.5.67157 1.5 1.5 1.5zm6 0c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5zm1.5-7.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5c0-.82843.6716-1.5 1.5-1.5s1.5.67157 1.5 1.5zM13 5.5c.8284 0 1.5-.67157 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.67157-1.5 1.5.6716 1.5 1.5 1.5z"
      />
    </Svg>
  );
};

export const PhoneIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9C22 5.13 18.87 2 15 2"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CityIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00003C7.96003 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C9.67001 12.72 8.58003 12.72 7.88003 12.06C6.93003 11.16 5.84002 9.69997 6.24002 7.97997Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.0946 8.69995H9.10359"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CountryIcon = (props: iconPropsType) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke={props?.color ? props?.color : '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ArrowDownIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DateIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M8 2V5"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08997H20.5"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 13.7H15.7037"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6947 16.7H15.7037"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.7H12.0045"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 16.7H12.0045"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 13.7H8.30329"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 16.7H8.30329"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="2.0"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const BuildingIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M1 22H23"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.78 22.0101V17.55"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.8001 10.8901C18.5801 10.8901 17.6001 11.8701 17.6001 13.0901V15.3601C17.6001 16.5801 18.5801 17.5601 19.8001 17.5601C21.0201 17.5601 22.0001 16.5801 22.0001 15.3601V13.0901C22.0001 11.8701 21.0201 10.8901 19.8001 10.8901Z"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.1001 22V6.03003C2.1001 4.02003 3.10015 3.01001 5.09015 3.01001H11.3201C13.3101 3.01001 14.3001 4.02003 14.3001 6.03003V22"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.80005 8.25H10.7501"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.80005 12H10.7501"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 22V18.25"
        stroke={props.color ? props.color : '#7C8BA7'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const FbIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"
        fill={props.color ? props.color : '#7C8BA7'}
      />
    </Svg>
  );
};
export const TwitterIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z"
      />
    </Svg>
  );
};
export const LinkedInIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"
      />
    </Svg>
  );
};
export const GitHubIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z"
      />
      <Path d="M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z" />
      <Path d="M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z" />
      <Path d="M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z" />
      <Path d="M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z" />
      <Path d="M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z" />
      <Path d="M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z" />
      <Path d="M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z" />
    </Svg>
  );
};
export const BehannceIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M9.579,9.573C9.579,8.625,8.845,8.4,8.03,8.4H5.909v2.4h2.287C9.005,10.8,9.579,10.446,9.579,9.573z"
      />
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M16.666,10.816c-0.98,0-1.634,0.611-1.698,1.591H18.3C18.209,11.416,17.695,10.816,16.666,10.816z"
      />
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M8.368,12.509H5.904v2.834H8.32c0.922,0,1.672-0.327,1.672-1.361C9.991,12.927,9.364,12.514,8.368,12.509z"
      />
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M19.75,0.3H4.25C1.9,0.3,0,2.2,0,4.55V19.45C0,21.8,1.9,23.7,4.25,23.7h15.5c2.35,0,4.25-1.9,4.25-4.25V4.55   C24,2.2,22.1,0.3,19.75,0.3z M14.555,7.184h4.168v1.012h-4.168V7.184z M8.63,17.1H3.643V6.814h4.848   c1.763,0,3.289,0.498,3.289,2.544c0,1.034-0.482,1.543-1.404,1.982c1.264,0.359,1.875,1.474,1.875,2.765   C12.252,16.195,10.5,17.089,8.63,17.1z M20.341,13.698h-5.368c0,1.189,0.627,1.891,1.827,1.891c0.621,0,1.42-0.332,1.618-0.97   h1.805c-0.557,1.709-1.709,2.507-3.487,2.507c-2.346,0-3.809-1.591-3.809-3.911c0-2.239,1.538-3.942,3.809-3.942   c2.33,0,3.621,1.837,3.621,4.039C20.357,13.441,20.346,13.575,20.341,13.698z"
      />
    </Svg>
  );
};
export const DribbleIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M12,0C5.375,0,0,5.375,0,12s5.375,12,12,12c6.612,0,12-5.375,12-12   S18.612,0,12,0z M19.926,5.531c1.432,1.744,2.291,3.97,2.317,6.378c-0.338-0.065-3.722-0.755-7.133-0.326   c-0.078-0.169-0.143-0.351-0.221-0.533c-0.208-0.495-0.443-1.002-0.677-1.484C17.987,8.03,19.705,5.818,19.926,5.531z    M13.418,8.043c-1.679-3.084-3.54-5.61-3.826-6C10.36,1.861,11.167,1.77,12,1.77c2.603,0,4.985,0.976,6.794,2.577   C18.612,4.607,17.063,6.677,13.418,8.043z M7.64,2.733c0.273,0.364,2.095,2.902,3.8,5.922c-4.79,1.275-9.02,1.25-9.475,1.25   C2.629,6.729,4.777,4.087,7.64,2.733z M1.744,11.7c0.442,0.013,5.414,0.078,10.529-1.457c0.3,0.572,0.573,1.158,0.833,1.744   c-0.13,0.039-0.273,0.078-0.404,0.117c-5.284,1.705-8.095,6.365-8.33,6.755c-1.627-1.809-2.629-4.217-2.629-6.846V11.7z    M13.757,13.692c0.026-0.013,0.039-0.013,0.065-0.026c1.445,3.735,2.031,6.872,2.187,7.77c-1.237,0.534-2.59,0.82-4.009,0.82   c-2.369,0-4.555-0.807-6.286-2.16C5.896,19.718,7.978,15.709,13.757,13.692z M17.714,20.499c-0.104-0.625-0.651-3.618-1.991-7.302   c3.215-0.507,6.026,0.326,6.377,0.443C21.657,16.49,20.018,18.95,17.714,20.499z"
      />
    </Svg>
  );
};
export const InstagramIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"
      />
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"
      />
      <Circle
        cx="18.406"
        cy="5.594"
        r="1.44"
        fill={props.color ? props.color : '#7C8BA7'}
      />
    </Svg>
  );
};
export const YoutubeIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z"
      />
    </Svg>
  );
};
export const TikTokIcon = (props: iconPropsType) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
      fill="none">
      <Path
        fill={props.color ? props.color : '#7C8BA7'}
        d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z"
      />
    </Svg>
  );
};
