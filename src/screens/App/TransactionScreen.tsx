import { Text, View } from 'react-native';

import { Box, HeaderData, Icon } from '@/components';

export function TransactionScreen() {
  return (
    <Box>
      <HeaderData title="Suas transações" subtitle="mensais" />

      <View className="rounded-xl bg-white p-3 shadow-sm dark:bg-glassDark">
        <View className="mb-5 flex-row items-center gap-x-1">
          <View className="rounded-full bg-gray-100 p-1.5">
            <Icon icon="PiggyBank" size={20} color="black" />
          </View>

          <Text className="font-bold text-black dark:text-white">Inter</Text>
          <Text className="text-md text-gray-400">(1)</Text>
        </View>

        <View className="flex-row items-center gap-x-2">
          <View className="rounded-lg bg-red-200 p-3">
            <Icon icon="CircleArrowUp" size={30} color="red" />
          </View>

          <View className="flex-1 gap-y-1">
            <Text className="font-bold text-black dark:text-white">Compra sofá</Text>

            <View className="flex-row items-center justify-between">
              <View className="items-center justify-center rounded-full bg-red-450 px-1.5 ">
                <Text className="pb-px text-center text-sm font-bold text-white">saída</Text>
              </View>

              <Text className="font-bold text-red-500">- R$ 1.000,00</Text>
            </View>

            <View className="flex-row items-center justify-between">
              <Text className="text-md text-gray-400">cartão de crédito</Text>
              <Text className="text-md text-gray-400">12/09/2021</Text>
            </View>
          </View>
        </View>
      </View>
    </Box>
  );
}
