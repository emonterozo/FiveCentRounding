import React from 'react';
import {HStack, IconButton, Icon, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IAppBar {
  hasBack?: boolean;
  isCartVisible?: boolean;
  title: string;
  navigation: any;
}

const AppBar = ({hasBack, isCartVisible, title, navigation}: IAppBar) => {
  return (
    <HStack
      bg="primary.600"
      px="2"
      py="3"
      justifyContent="space-between"
      alignItems="center"
      w="100%">
      <HStack alignItems="center">
        {hasBack && (
          <IconButton
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="arrow-left"
                size="lg"
                color="white"
              />
            }
            onPress={() => navigation.goBack()}
          />
        )}
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
      </HStack>
      {isCartVisible && (
        <IconButton
          icon={
            <Icon
              as={MaterialCommunityIcons}
              name="cart"
              size="lg"
              color="white"
            />
          }
          onPress={() => navigation.navigate('Cart')}
        />
      )}
    </HStack>
  );
};

export default AppBar;
