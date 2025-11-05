import React from 'react'
import { useReducer,useOptimistic,useEffect } from 'react'

const ProductListComponent = () => {
    const [products, setProducts] = React.useState<Array<any>>([])
    const [optimisticProducts,addOptimisticProduct]=useOptimistic(products,(prev,cur)=>[...prev,cur])

    const handleGetUsers = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data?.products || []);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {
        handleGetUsers();
    }, []);

    const handleCreateUser = async (e:React.FormEvent) => {
        try{
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const titleInput = form.querySelector('input[placeholder="Title"]') as HTMLInputElement;
            const title = titleInput.value;
            addOptimisticProduct({id:Date.now(),title});
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title }),
            });
            const newProduct = await response.json();
            setProducts(prevProducts => [...prevProducts, newProduct]);
            form.reset();
        }catch(error){
            console.error('Error creating user:', error);
        }
    }

  return (
    <div>
        <div>
                {products.length > 0 ? (
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title} </li>
                ))}
            </ul>
        ) : (
            <p>Loading users...</p>
        )}

        </div>
        <div>
            <form action="" onSubmit={handleCreateUser}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Title' />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
           

        </div>
    


    </div>
  )
}

export default ProductListComponent