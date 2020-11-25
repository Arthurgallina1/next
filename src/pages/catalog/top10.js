import { useRouter } from "next/router";

export default function Top10({ products }) {
    const router = useRouter();
    return (
        <div>
            <h1>top 10</h1>
            {products.map((product) => (
                <li
                    onClick={() =>
                        router.push(`/catalog/products/${product.id}`)
                    }
                >
                    {product.body}
                </li>
            ))}
        </div>
    );
}

// This function gets called at build time
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
