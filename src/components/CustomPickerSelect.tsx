// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React from 'react';
// import { Platform, Text, View } from 'react-native';
// import RNPickerSelect, { Item, PickerSelectProps } from 'react-native-picker-select';

// export type CustomPickerSelectProps = PickerSelectProps & {
//   label?: string;
//   items: Item[];
//   containerClassName?: string;
//   errorMessage?: string;
//   placeholder?: string;
// };

// export function CustomPickerSelect({
//   items,
//   label,
//   containerClassName,
//   errorMessage,
//   ...pickerSelectProps
// }: CustomPickerSelectProps) {
//   return (
//     <View className={containerClassName}>
//       {label && <Text className="text-text-600 pb-[10px] font-bold">{label}</Text>}

//       <View
//         className={`h-9 flex-row justify-between rounded-md border-[1px] ${
//           errorMessage ? 'border-error-600' : 'border-[#d2d2d255]'
//         }`}>
//         <RNPickerSelect
//           items={items}
//           placeholder={{
//             label: 'Selecione',
//             value: '',
//             color: '#A3A3A3',
//           }}
//           style={{
//             viewContainer: {
//               justifyContent: 'center',
//               backgroundColor: '#F5F5F5',
//               flex: 1,
//               paddingVertical: 10,
//               paddingHorizontal: 8,
//               borderRadius: 5,
//             },
//           }}
//           fixAndroidTouchableBug
//           {...pickerSelectProps}
//         />
//         {Platform.OS === 'ios' && (
//           <MaterialCommunityIcons
//             name="chevron-down"
//             size={24}
//             color="#A3A3A3"
//             style={{
//               position: 'absolute',
//               right: 8,
//               alignSelf: 'center',
//             }}
//           />
//         )}
//       </View>
//     </View>
//   );
// }

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import RNPickerSelect, { Item, PickerSelectProps } from 'react-native-picker-select';

import { colors } from '@/theme/colors';

export type CustomPickerSelectProps = PickerSelectProps & {
  label?: string;
  items: Item[];
  containerClassName?: string;
  errorMessage?: string;
  placeholder?: string;
};

export function CustomPickerSelect({
  items,
  label,
  containerClassName,
  errorMessage,
  placeholder = 'Selecione',
  ...pickerSelectProps
}: CustomPickerSelectProps) {
  const { colorScheme } = useColorScheme();

  const labelcolor = colorScheme === 'dark' ? colors.white : colors.black;

  return (
    <View className={containerClassName}>
      {label && <Text className="mb-2 font-bold text-black dark:text-white">{label}</Text>}

      <View
        className={`w-full flex-row items-center rounded-xl border-2 ${errorMessage ? 'border-error-600' : 'border-gray-100'} bg-white py-1 shadow-sm shadow-gray-300 dark:border-gray-700 dark:bg-gray-bg dark:shadow-gray-400/40`}>
        <RNPickerSelect
          items={items}
          placeholder={{
            label: placeholder,
            value: '',
            color: labelcolor,
          }}
          textInputProps={{
            selectionColor: labelcolor,
            className: 'text-black dark:text-white',
          }}
          style={{
            viewContainer: {
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'transparent',
              paddingVertical: 10,
              paddingHorizontal: 20,
            },
          }}
          doneText="OK"
          fixAndroidTouchableBug
          darkTheme={colorScheme === 'dark'}
          {...pickerSelectProps}
        />
        {Platform.OS === 'ios' && (
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.gray[400]}
            style={{
              position: 'absolute',
              right: 8,
              alignSelf: 'center',
            }}
          />
        )}
      </View>

      {errorMessage && (
        <Text className="font-semiBold mt-2 text-start text-sm font-bold text-red-500">
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
