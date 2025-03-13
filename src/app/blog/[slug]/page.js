export default async function BlogSlug ({params}) {
    
    const response = await fetch("https://dummyjson.com/products/"+params.slug)
    const data = await response.json();
    console.log(data);
   
   return <>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <p>{data.price}euros</p>
    <p>{data.stock}</p>
    <img src={data.images} alt="Some Image" width='150'></img>
    </>
}