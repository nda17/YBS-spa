import { useToggle } from '../../../hooks/useToggle'
import { MobileNavigationMenu } from './MobileMenu'
import { GrTextAlignRight } from 'react-icons/gr'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import './HamburgerMenu.scss'
import '../../../assets/styles/media-queries.scss'

const HamburgerMenu = () => {
	const [isVisible, setVisible] = useToggle(true)
	const handleOpenHamburger = () => {
		setVisible(!isVisible)
	}
	return (
		<div>
			<a onClick={() => handleOpenHamburger()}>
				{isVisible ? (
					<GrTextAlignRight className='GrTextAlignRight' />
				) : (
					<HiOutlineChevronDown className='HiOutlineChevronDown' />
				)}
			</a>
			<MobileNavigationMenu
				isVisible={isVisible}
				handleOpenHamburger={handleOpenHamburger}
			/>
		</div>
	)
}

export { HamburgerMenu }
