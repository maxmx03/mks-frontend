import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useProduct() {
  const { data, error } = useSWR(
    'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC',
    fetcher
  )

  return {
    data: data?.products,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
