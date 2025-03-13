import Image from "next/image"

export default async function About () {
   
   const response = await fetch("https://dummyjson.com/posts?limit=1")
   const data = await response.json();
   const post = data['posts'][0];

   return <>
   <h1>{post.title}</h1>
   <p>{post.body}</p>
    <Image 
    src="/images/blackmercedes.jpg"
    alt="Black Mercedes Car Picture"
    width="150"
    height="80"
    />
    </>
}