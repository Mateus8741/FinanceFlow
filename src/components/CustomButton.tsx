import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export function CustomButton({ title, isLoading, isDisabled, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`h-14 items-center justify-center rounded-2xl ${isDisabled ? 'bg-gray-400' : 'bg-blue-500'}`}
      disabled={isLoading || isDisabled}
      activeOpacity={0.7}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-center text-lg font-bold text-white">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
