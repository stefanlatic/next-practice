export default function ProductCard ({product}) {
    return <>
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }} >
     <h6>{product.title}</h6>
     <img src={product.thumbnail} alt={product.title} width="150" />     <p>{product.price}euros</p>
     </div>
     </>
}