import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  FlatList,
  Pressable,
  Image,
  Text,
  AspectRatio,
  Heading,
  Stack,
} from 'native-base';

import {AppBar} from '../../component';
import {IProduct} from '../../types/types';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description:
      'mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui',
    price: 129.28,
    image: 'https://picsum.photos/id/0/700',
  },
  {
    id: 2,
    name: 'Product 2',
    description:
      'scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl',
    price: 250.52,
    image: 'https://picsum.photos/id/51/700',
  },
  {
    id: 3,
    name: 'Product 3',
    description:
      'neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor',
    price: 99.29,
    image: 'https://picsum.photos/id/42/700',
  },
  {
    id: 4,
    name: 'Product 4',
    description:
      'congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra',
    price: 75.55,
    image: 'https://picsum.photos/id/33/700',
  },
  {
    id: 5,
    name: 'Product 5',
    description:
      'rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare',
    price: 125.37,
    image: 'https://picsum.photos/id/20/700',
  },
];

interface IItem {
  item: IProduct;
}

const Product = ({navigation}: any) => {
  const renderProduct = ({item}: IItem) => (
    <Pressable
      flex={1}
      maxWidth="49%"
      borderWidth="1"
      borderColor="coolGray.300"
      rounded="8"
      onPress={() => navigation.navigate('ProductDetails', {product: item})}>
      <AspectRatio w="100%">
        <Image
          source={{
            uri: item.image,
          }}
          alt={item.name}
        />
      </AspectRatio>
      <Stack p="3" space={3} flex={1}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {item.name}
          </Heading>
        </Stack>
        <Text numberOfLines={3} fontWeight="400">
          {item.description}
        </Text>
        <Box flex={1} justifyContent="flex-end" alignItems="flex-end">
          <Text color="coolGray.600" fontWeight="bold">
            {`RM ${item.price}`}
          </Text>
        </Box>
      </Stack>
    </Pressable>
  );

  return (
    <Box flex={1} safeArea>
      <AppBar isCartVisible title="Store" navigation={navigation} />
      <Box flex={1}>
        <FlatList
          columnWrapperStyle={styles.flatList}
          data={products}
          renderItem={renderProduct}
          numColumns={2}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  flatList: {
    margin: 5,
    justifyContent: 'space-between',
  },
});

export default Product;
