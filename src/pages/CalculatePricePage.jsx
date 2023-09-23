import { useNavigate } from "react-router-dom"
//useNavigate - хук для возвращения назад или перехода вперед по клику на конопку.
import { FormMain } from "../components/Main/FormMain"

const CalculatePricePage = () => {


	///////////////////
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	///////////////////

	// useEffect(() => {
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	// 		.then(res => res.json())
	// 		.then(data => setPost(data))
	// }, [id])

	return (
		<div>
			{/* <button className='btnGoBack' onClick={goBack}>
				Go back
			</button> */}

            <FormMain />
		</div>
	)
}

export { CalculatePricePage }
