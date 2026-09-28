import { GrClose, GrTextAlignRight } from 'react-icons/gr'
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
					<GrClose className='GrClose' />
				)}
			</span>
		</div>
	)
}

export default HamburgerMenu
