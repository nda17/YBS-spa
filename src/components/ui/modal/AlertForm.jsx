import './AlertForm.scss'
import '../../../assets/styles/media-queries.scss'

const AlertForm = ({ alertRef, ruMessageRef, enMessageRef }) => {
	return (
		<article className='alertForm' ref={alertRef}>
			<p className='alertFormRu' ref={ruMessageRef}>
				YBS
			</p>
			<p className='alertFormEn' ref={enMessageRef}></p>
		</article>
	)
}

export default AlertForm
