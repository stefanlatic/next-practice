export default function BlogSlug ({params}) {
    
    const blogPosts = [
        {
            name: "First blog",
            description: "An early milestone in the rise in importance of blogs came in 2002, when many bloggers focused on comments by U.S. Senate Majority Leader Trent Lott.[24] Senator Lott, at a party honoring U.S. Senator Strom Thurmond, praised Senator Thurmond by suggesting that the United States would have been better off had Thurmond been elected president. Lott's critics saw these comments as tacit approval of racial segregation, a policy advocated by Thurmond's 1948 presidential campaign.",
            slug: "first-blog"
        },
        {
            name: "Second blog",
            description: "An early milestone in the rise in importance of blogs came in 2002, when many bloggers focused on comments by U.S. Senate Majority Leader Trent Lott.[24] Senator Lott, at a party honoring U.S. Senator Strom Thurmond, praised Senator Thurmond by suggesting that the United States would have been better off had Thurmond been elected president. Lott's critics saw these comments as tacit approval of racial segregation, a policy advocated by Thurmond's 1948 presidential campaign.",
            slug: "second-blog"
        }
    ];
    
    const blog = blogPosts.find(post => params.slug === post.slug);

    if(typeof blog === 'undefined') {
        return <h1>Ovaj blog ne postoji!</h1>
    }
    
    return <>
    <h1>{blog.name}</h1>
    <p>{blog.description}</p>
    </>
}