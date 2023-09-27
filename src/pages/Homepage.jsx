import { CookiePopup } from '../components/ui/modal/CookiePopup'
import { MainScreen } from '../components/layout/Main/MainScreen'
import { Slogan } from '../components/layout/Main/Slogan'

const Homepage = () => {
	return (
		<div className='page'>
			<CookiePopup />
			<MainScreen />
			<Slogan />
		</div>
	)
}

export { Homepage }
