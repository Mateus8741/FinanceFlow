// import { MaterialIcons } from '@expo/vector-icons';
import { icons } from 'lucide-react-native';
import Animated from 'react-native-reanimated';

type IconProps = {
  icon: keyof typeof icons;
  size?: number;
  color?: string;
  entering?: any;
};

export function CustonIcons({ icon, color, size, entering }: IconProps) {
  const AnimatedIcon = Animated.createAnimatedComponent(icons[icon]);

  return <AnimatedIcon size={size} color={color} entering={entering} />;
}
