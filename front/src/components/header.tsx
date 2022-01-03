import Head from "next/head";

type PageInfoProps = {
  name: string | null;
};

const Header = (props: PageInfoProps) => {
  return (
    <Head>
      <title>固定さん{props.name && " | " + props.name}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
