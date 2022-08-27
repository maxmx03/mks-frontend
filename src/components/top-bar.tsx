import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'

const TopBar = () => (
  <Flex alignItems="center" h="full" w="full">
    <Flex alignItems="center" gap="2">
      <Text
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="semibold"
        color="white"
      >
        MKS
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="light"
        color="white"
        mt={{ md: '1' }}
      >
        Sistemas
      </Text>
    </Flex>
    <Spacer />
    <Box>
      <Flex as={Button} gap="2" size={{ base: 'sm', md: 'md' }}>
        <Image src="/shopcart.svg" alt="shop cart" height={18} width={18} />
        <span>0</span>
      </Flex>
    </Box>
  </Flex>
)

export default TopBar
