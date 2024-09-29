import {registerSheet} from 'react-native-actions-sheet';
import LoginActionSheet from './LoginForm';
registerSheet('LoginForm', LoginActionSheet);

import LogoutActionSheet from './LogoutActionSheet';
registerSheet('LogoutSheet', LogoutActionSheet);

import LoginOptionsActionSheet from './LoginOptions';
registerSheet('LoginOptions', LoginOptionsActionSheet);
