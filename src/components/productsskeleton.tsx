import { Skeleton } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'

interface ProductsSkeletonProps {
  isLoaded: boolean
  quantity: number
}

const ProductsSkeleton: React.FC<ProductsSkeletonProps> = ({
  isLoaded,
  quantity,
}) => {
  const [skeletons, setSkeleton] = useState<number[]>([])

  useEffect(() => {
    const numbers = []

    for (let i = 1; i <= quantity; i++) {
      numbers.push(i)
    }

    setSkeleton(numbers)
  }, [skeletons, quantity])

  return (
    <Fragment>
      {skeletons.map((_, index) => (
        <Skeleton key={index} isLoaded={!isLoaded} />
      ))}
    </Fragment>
  )
}

export default ProductsSkeleton
