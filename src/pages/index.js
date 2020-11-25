// import { useEffect, useState } from "react";
import { Title } from "../styles/pages/Home";
import Link from "next/link";
import { useFetch } from "../hooks/useFetch";

export default function Home({ vehicles }) {
    // const [recommended, setRecommendedProducts] = useState([]);
    // client fetch -> não faz SSR
    // useEffect(() => {
    //     fetch("http://localhost:3333/comments").then((response) => {
    //         response.json().then((data) => setRecommendedProducts(data));
    //     });
    // }, []);

    const { data, error } = useFetch("http://localhost:3333/vehicles");
    console.log(data);

    return (
        <div className='container flex flex-col'>
            <h1 className='text-3xl'>Products</h1>
            {vehicles?.map((rcm) => {
                return (
                    <span className='text-1xl text-gray-300'>{rcm.body}</span>
                );
            })}
            <Link href='/search'>Go to search</Link>
        </div>
    );
}

//retorno vai pra props
//faz SSR
export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:3333/vehicles");
    const vehicles = await response.json();

    return {
        props: {
            vehicles,
        },
    };
};
