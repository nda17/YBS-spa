import { GrTextAlignRight } from 'react-icons/gr'
import { HiOutlineChevronDown } from 'react-icons/hi2'
import './HamburgerMenu.scss'
import '../../../assets/styles/media-queries.scss'

const HamburgerMenu = props => {
	const { isVisible, toggleVisible = Function.prototype } = props
	return (
		<div className='hamburgerIconWrap'>
			<span className='hamburgerButton' onClick={toggleVisible}>
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
