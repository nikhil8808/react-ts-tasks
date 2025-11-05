import { getProducts } from '../services/api/products'
import type { Product } from '../services/api/products'
import { useQuery } from '@tanstack/react-query'

type UseProductsResult = {
  data: Product[] | undefined
  error: unknown
  isLoading: boolean
}

const useProducts = (search: string): UseProductsResult => {
  const { data, error, isLoading } = useQuery<Product[], Error>({
    queryKey: ['products', search],
    queryFn: () => getProducts(search),
    // Only run the query when there's a search term
 
  })

  return { data, error, isLoading }
}

export default useProducts