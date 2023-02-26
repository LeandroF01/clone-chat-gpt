import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Chat GPT</title>
			</Head>
			<div className="w-full relative bg-gptgray h-screen">
				<Aside />
				{children}
			</div>
		</>
	);
};

const Aside = () => {
	return (
		<aside className="bg-gptdarkgray fixed flex w-64 h-screen flex-col">
			Navegacion
		</aside>
	);
};

const Chat = () => {
	return (
		<div>
			<main>chat</main>
		</div>
	);
};

export default function Home() {
	return (
		<Layout>
			<Chat />
		</Layout>
	);
}
