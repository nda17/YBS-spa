import { MainScreen } from '../components/layout/Main/MainScreen'
import { Slogan } from '../components/layout/Main/Slogan'
import { CookiePopup } from '../components/layout/Main/CookiePopup'

const Homepage = () => {
	return (
		<>
			<MainScreen />
			<Slogan />
			<CookiePopup />
		</>
	)
}

export { Homepage }
