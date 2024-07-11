import { AppTabBottomTabParamList } from './AppTabNavigator';

interface IconProps {
  label: string;
  icon: {
    focused: string;
    unfocused: string;
  };
  color: string;
}

export const mapScreenToProps: Record<
  keyof AppTabBottomTabParamList,
  {
    label: string;
    icon: {
      focused: IconProps['color'];
      unfocused: IconProps['color'];
    };
  }
> = {
  HomeScreen: {
    label: 'Início',
    icon: {
      focused: 'House',
      unfocused: 'House',
    },
  },
  TransactionScreen: {
    label: 'Transações',
    icon: {
      focused: 'ArrowLeftRight',
      unfocused: 'ArrowLeftRight',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'User',
      unfocused: 'User',
    },
  },
  ResumeScreen: {
    label: 'Relatórios',
    icon: {
      focused: 'PieChart',
      unfocused: 'PieChart',
    },
  },
};
