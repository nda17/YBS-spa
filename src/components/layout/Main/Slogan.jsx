import { useState, useEffect } from 'react';
import './Slogan.scss';
import '../../../assets/styles/media-queries.scss'


const Slogan = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const textElement = document.querySelector('.sloganAuthorText')
		setTimeout(() => {
			setShow(false)
			textElement.style.opacity = '1'
		}, 2100)
	}, [show])
	return (
		<article className='row main-about-block aboutTitle'>
			<div className='col-12'>
				<h2 className='sloganWrapper'>
					<p className='sloganText'>
						«Если бы я спросил людей, что они хотят, они просили бы лошадь
						побыстрее.»
					</p>
					<p className='sloganAuthorText'>Henry Ford</p>
				</h2>
			</div>
		</article>
	)
}

export { Slogan };
