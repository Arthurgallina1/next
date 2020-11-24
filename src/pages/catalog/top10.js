export default function Top10({ products }) {
    return (
        <div>
            <h1>top 10</h1>
            {products.map((product) => (
                <li>{product.body}</li>
            ))}
        </div>
    );
}

export const getStaticProps = async (context) => {
    const response = await fetch("http://localhost:3333/comments");
    const products = await response.json();
    return {
        props: {
            products,
        },
        revalidate: 60,
    };
};
