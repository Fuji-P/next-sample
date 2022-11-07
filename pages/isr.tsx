import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ISProps = {
	message: string;
}

//ISPropsを受け付けるNextPage(ページ)の型
const ISR: NextPage<ISProps> = (props) => {
	const { message } = props;

	const router = useRouter();

	if (router.isFallback) {
		//フォールバック用のページを返す
		return <div>Loading...</div>
	}

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p>このページはISRによってビルド時に生成されたページです。</p>
				<p>{message}</p>
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps<ISProps> = async (context) => {
	const timestamp = new Date().toLocaleString();
	const message = `${timestamp}にこのページのgetStaticPropsが実行されました。`

	return {
		props: {
			message,
		},
		//ページの有効期限を秒単位で指定
		revalidate: 60,
	}
}

export default ISR