import ProductCard from "./product-card/page";


export default async function App () {
    
  const response = await fetch("https://dummyjson.com/products?limit=9")
  const data = await response.json();

 return <>
    <h1 style={{display:"flex", justifyContent: "center", marginTop:"10px", marginBottom:"20px"}}>Products Store</h1>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {data.products.map((product) =>(
        <ProductCard key={product.id} product={product} />
      )
      )}
    </div>
  </>
}