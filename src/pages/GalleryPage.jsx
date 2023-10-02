import { useTranslation } from 'react-i18next'
import { Gallery } from '../components/layout/Main/Gallery'

const GalleryPage = () => {
	const { t, i18n } = useTranslation()
	return (
			<Gallery />
	)
}

export { GalleryPage }
