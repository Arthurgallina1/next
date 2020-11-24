import GlobalStyle from "../styles/GlobalStyle";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <GlobalStyle /> */}
            <Component {...pageProps} />
        </>
    );
}
