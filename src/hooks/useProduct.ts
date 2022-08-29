import useSWR from 'swr'

const fetcher = async (input: RequestInfo | URL, init: RequestInit | undefined ) => {
  const res = await fetch(input, init)

  return await res.json()
}

function useProduct() {
  const { data, error } = useSWR('/api/product', fetcher)

  return {
    data: data?.products,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
