import React from 'react';
import {
  XStack,
  View,
  YStack,
  ZStack,
  ScrollView,
  Card,
  H2,
  Button,
  Paragraph,
  Image,
  Stack,
} from 'tamagui';
import {PriceCard} from '../../components/PriceCard';
import {StickyHeader} from './components/StickyHeader';

export const Home = () => {
  return (
    <ScrollView
      bg="$background"
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}>
      {/* <StickyHeader /> */}
      <Stack paddingHorizontal="$2.5" paddingVertical="$4" gap={6}>
        <PriceCard type="balance" />
        <XStack f={1} jc="space-evenly" gap={6}>
          <YStack f={1}>
            <PriceCard type="income" />
          </YStack>
          <YStack f={1}>
            <PriceCard type="expense" />
          </YStack>
        </XStack>
        <Stack height={1000} bg="$background" />
      </Stack>
    </ScrollView>
  );
};
