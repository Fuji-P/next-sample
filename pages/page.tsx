//インポート
import { useRouter } from "next/router";
//副作用を伴う処理用に導入
import { useEffect } from "react";

const Page = () => {
	//useRouterの使用
	const router = useRouter();

	//以下のコメント部分のコメントを解除すると/userouterに移動するようになる
	/*
	useEffect( () => {
		router.push('/userouter');
	});
	*/

	return <span>{router.pathname}</span>
}

export default Page