import { useState, useTransition } from 'react'
import './App.css'

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
}


function App() {
  const [query, setQuery] = useState<string>("")
  const [isPending, startTransition] = useTransition()
  const [list, setList] = useState<Product[] | []>([])

  const fetchData = async (query:string) => {
    try {
      let response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
      let result = await response.json()
      setList(result?.products)

    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e?.target?.value != "") {
        setQuery(e?.target?.value)

      }
     

    }
    catch (e) {
      console.log(e)
    }
   startTransition(()=>{
    fetchData(e?.target?.value)
   })

  }


  return (
    <>
      <div>
        <div>
          <input type="text" onChange={handleChange} />
        </div>

        <div>
          {list?.length > 0 && list.map((item: Product) => {
            return <div>
              <p>{item?.id}</p>
              <p>{item?.title}</p>
              <p>{item?.description}</p>
            </div>
          })}

        </div>
      </div>

    </>
  )
}

export default App
