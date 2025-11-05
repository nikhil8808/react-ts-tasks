import {  useEffect, useState,useMemo,useTransition, useCallback } from 'react'

import './App.css'


type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type Product = {
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
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

interface pageDataType {
  skip: number,
  limit: number,
  total: number,
  data:Product[]

}


function App() {
  const [pageData,setPageData] = useState<pageDataType>({
    skip: 0,
    limit: 40,
    total: 0,
    data: []
  })
  const [loading,setLoading] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition();

  const fetchData = async () => {
    try {
     
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=${pageData?.limit}&skip=${pageData?.skip}`);
      const data = await response.json();
      setPageData({
        skip: data.skip,
        limit: data.limit,
        total: data.total,
        data: data.products
      });
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }finally{
      setLoading(false)
    }
   
  }
  useEffect(() => {
    fetchData();
  }, [pageData.skip,pageData.limit]);

  const handlePageChange = useCallback((direction: 'next' | 'prev') => {
    startTransition(()=>{
       if(direction==='next'){
      if(pageData?.total<=(pageData.skip + pageData.limit)){
        return;
    }
    setPageData((prev)=>({
      ...prev,
      skip: prev.skip + prev.limit
    }))
   }else{
    if(pageData?.skip===0){
      return;
    }
    setPageData((prev)=>({
      ...prev,
      skip: prev.skip - prev.limit
    }))

   }

    })
   
   },[pageData?.skip, pageData?.limit, pageData?.total]);



  return (
    <>
     <div>
      <h1>Product Details</h1>
      {isPending && <p>Loading...</p>}
      {pageData && pageData.data.map((product) => (
        <div key={product.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          </div>
      ))}

      <div>
        <button onClick={() => handlePageChange('prev')}
          disabled={pageData?.skip===0}
             style={{width:'4rem',height:'2rem',borderRadius:'0.5rem'}}
          >
          Prev
        </button>
        <button onClick={() => handlePageChange('next')}
          style={{width:'4rem',height:'2rem',borderRadius:'0.5rem'}}
          
          disabled={pageData?.total<=(pageData.skip + pageData.limit)}>
          Next
        </button>
       

      </div>


     </div>
    </>
  )
}


export default App
