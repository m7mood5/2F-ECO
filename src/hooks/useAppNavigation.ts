import {useNavigation} from '@react-navigation/native';
import { navigationStackProps } from '../global/generalTypes';

export const useAppNavigation = () => useNavigation<navigationStackProps>();
