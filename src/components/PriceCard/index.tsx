import React from 'react';
import {H5, Text, XStack, YStack} from 'tamagui';
import {DollarSign, MoveDown, PiggyBank} from '@tamagui/lucide-icons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  type: 'income' | 'expense' | 'balance';
};

enum Title {
  income = 'Receitas',
  expense = 'Despesas',
  balance = 'Saldo atual',
}

enum Color {
  income = '$green10',
  expense = '$red10',
  balance = '$color10',
}

export const PriceCard = ({type}: Props) => {
  const title = Title[type];
  const color = Color[type];
  const icon = {
    income: <DollarSign color={color} size="$3" />,
    expense: <MoveDown color={color} size="$3" />,
    balance: <PiggyBank color={color} size="$3" />,
  };
  const navigation = useNavigation();

  return (
    <XStack
      bg="$color5"
      elevation={'$0.25'}
      ai="center"
      jc="flex-start"
      borderRadius={10}
      padding={7}
      gap={6}
      onPress={() => navigation.navigate('Tela 2')}>
      {icon[type]}
      <YStack>
        <Text color={color}>{title}</Text>
        <H5 color="$gray11">R$ 0,00</H5>
      </YStack>
    </XStack>
  );
};
