type pageProps={
    page_no:number
}


const Page=({page_no}:pageProps)=>{

    return (
        <div id={`${page_no}`} style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h1>Page {page_no}</h1>
        </div>
    )
}

export default Page