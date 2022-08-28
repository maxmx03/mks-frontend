import { Image, ImageProps } from '@chakra-ui/react'

interface IconsProps extends ImageProps {}

const Icon: React.FC<IconsProps> = ({ ...rest }) => (
  <Image alt="" boxSize="18" {...rest} />
)

export default Icon
