// import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";
import Link from "next/link";

export default function Home({ rcmdProducts }) {
    // const [recommended, setRecommendedProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3333/comments").then((response) => {
    //         response.json().then((data) => setRecommendedProducts(data));
    //     });
    // }, []);
    return (
        <div className='container flex flex-col'>
            <h1 className='text-3xl'>Products</h1>
            {rcmdProducts.map((rcm) => {
                return (
                    <span className='text-1xl text-gray-300'>{rcm.body}</span>
                );
            })}
            <Link href='/search'>Go to search</Link>
        </div>
    );
}
//retorno vai pra props
export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:3333/comments");
    const rcmdProducts = await response.json();

    return {
        props: {
            rcmdProducts,
        },
    };
};
