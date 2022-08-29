import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useProduct() {
  const { data, error } = useSWR(
    '/api/product',
    fetcher
  )

  return {
    data: data?.products,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
