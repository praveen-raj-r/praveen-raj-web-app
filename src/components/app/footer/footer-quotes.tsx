const FooterQuotes = () => {
    return (
        <p className="my-10 text-xl text-gray-100 gradient sky-2 p-4">
            Build using{" "}
            <a className="gradient retro-2" href="https://vite.dev/" target="_blank">
                Vite
            </a>
            , Coded in{" "}
            <a className="gradient retro-2" href="https://react.dev/" target="_blank">
                Reactjs
            </a>{" "}
            and deployed on{" "}
            <a
                className="gradient retro-2"
                href="https://vercel.com/"
                target="_blank"
            >
                Vercel
            </a>
        </p>
    );
};

export default FooterQuotes;
