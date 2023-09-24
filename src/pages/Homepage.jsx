import { MainTitle } from '../components/layout/Main/MainTitle'
import { Slogan } from '../components/layout/Main/Slogan'
import { CookiePopup } from '../components/layout/Main/CookiePopup'

const Homepage = () => {
	return (
		<>
			<MainTitle />
			<Slogan />
			<CookiePopup />
		</>
	)
}

export { Homepage }
