import React from 'react';
import {Button, View, YGroup, YStack} from 'tamagui';
import {useThemeStore} from '../../context/theme.context';

export const Profile = () => {
  const {changeTheme} = useThemeStore();
  return (
    <YStack f={1} bg="$background">
      <YGroup>
        <YGroup.Item>
          <Button onPress={() => changeTheme('yellow')}>Amarelo</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('purple')}>Roxo</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('green')}>Verde</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('blue')}>Azul</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('pink')}>Rosa</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('red')}>Vermelho</Button>
        </YGroup.Item>
        <YGroup.Item>
          <Button onPress={() => changeTheme('neutral')}>Sem cor</Button>
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
};
