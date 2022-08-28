import { Flex, Heading, Text } from '@chakra-ui/react'

const Brand = () => (
  <Flex alignItems="center" gap="2">
    <Heading
      fontSize={{ base: '2xl', md: '4xl' }}
      fontWeight="semibold"
      color="white"
    >
      MKS
    </Heading>
    <Text
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight="light"
      color="white"
      mt={{ md: '1' }}
    >
      Sistemas
    </Text>
  </Flex>
)

export default Brand
