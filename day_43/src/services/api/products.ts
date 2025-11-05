


export interface Product {
    id: number
    title: string
    description?: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]
}

export const getProducts = async (searchQuery: string): Promise<Product[]> => {
    const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}`
    const response = await fetch(url)

    if (!response.ok) {
        // Let the caller (react-query) handle the error
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    // Ensure we always return an array (empty if nothing found)
    return result?.products ?? []
}