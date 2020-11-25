import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "next/router";
export default function Person({ vehicles }) {
    const router = useRouter();
    return (
        <div className='container flex flex-col'>
            <h1>{router.query.slug}</h1>
            <pre>{JSON.stringify(vehicles, null, 4)}</pre>
        </div>
    );
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "Bruno" } }, // See the "paths" section below
        ],
        fallback: true, // See the "fallback" section below
    };
}

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:3333/vehicles");
    const data = await response.json();
    return {
        props: {
            vehicles: data,
        },
        revalidate: 60,
    };
};

//Deprecated: usar getServerSideProps ou getStaticProps
// Person.getInitialProps = async (ctx) => {
//     const { query } = ctx;
//     const response = await fetch(
//         "http://localhost:3333/vehicles?ownerName=" + query.person
//     );
//     const ownersList = await response.json();
//     return {
//         props: {
//             ownersList,
//         },
//     };
// };
