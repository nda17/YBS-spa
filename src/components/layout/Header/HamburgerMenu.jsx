import { GrTextAlignRight } from 'react-icons/gr'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import './HamburgerMenu.scss'
import '../../../assets/styles/media-queries.scss'

const HamburgerMenu = (props) => {
	const {isVisible, handleOpenHamburger = Function.prototype} = props
	return (
		<div className='hamburgerIconWrap'>
			<span className='hamburgerButton' onClick={() => handleOpenHamburger()}>
				{isVisible ? (
					<GrTextAlignRight className='GrTextAlignRight' />
				) : (
					<HiOutlineChevronDown className='HiOutlineChevronDown' />
				)}
			</span>
		</div>
	)
}

export { HamburgerMenu }
