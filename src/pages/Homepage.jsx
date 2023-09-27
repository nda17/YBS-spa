import { MainScreen } from '../components/layout/Main/MainScreen'
import { Slogan } from '../components/layout/Main/Slogan'

const Homepage = () => {
	return (
		<>
			<MainScreen />
			<Slogan />
		</>
	)
}

export { Homepage }

//   const [isLoading, setValueLoading] = useState(true);
//   const [posts, setPosts] = useState(null);

//   useEffect(() => {
//     // здесь пишется любая логика, которую необходимо выполнить один раз при загрузке
//     // запросы к API или слушатели.
//     // данный блок выполняется только после рендера, это значит, что сначала выполнится return  в конце функции 
//     // и только потом здесь будут происходить операции
//     // пример запроса к API
//     const getPosts = async () => {
//       try {
//         const resp = await fetch("https://anyUrl.com", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const json = await resp.json();
//         return [resp.status, json];
//       } catch (error) {
//         console.error(error);
//       }
//       };
//     const status, response = getPosts();
//     if (status === 200) {
//       setPosts(response.posts)
//     }

//   },[])

//   useEffect(() => {
//     setValueLoading(false);
//   }, [posts])
//   return (
//       {isLoading ? <Mask /> : <ListPosts arr={posts}/>}
//   );
// }