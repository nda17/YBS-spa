import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import FormVideoBackground from '../../screens/FormVideoBackground'
import AlertForm from '../../ui/modal/AlertForm'
import './FormMain.scss'
import '../../../assets/styles/media-queries.scss'

const FormMain = () => {
	const { t } = useTranslation()
	const formCalcRef = useRef(null)
	const formWrapperRef = useRef(null)
	const titleRef = useRef(null)
	const usernameInputRef = useRef(null)
	const emailInputRef = useRef(null)
	const telInputRef = useRef(null)
	const alertRef = useRef(null)
	const alertRuMessageRef = useRef(null)
	const alertEnMessageRef = useRef(null)
	const alertTimerRef = useRef(null)
	//Блок с калькулятором цен на услуги:
	const [price, setPrice] = useState(0)
	const [oldPrice, setOldPrice] = useState(0)
	const [productType, setProductType] = useState('Не выбран')
	const [productOptions, setProductOptions] = useState('Не выбраны')
	const [productMarketing, setProductMarketing] = useState('Не выбраны')
	const handleProductTypeChange = event => {
		//Изменение состояния:
		if (productType === 'Не выбран') {
			setProductType(event.target.value)
			setOldPrice(event.target.getAttribute('data-price'))
			changePrice(event.target.getAttribute('data-price'))
		} else {
			changePrice(event.target.getAttribute('data-price') - oldPrice)
			setOldPrice(event.target.getAttribute('data-price'))
		}
	}
	const handleProductOptionsChange = event => {
		//Изменение состояния:
		if (productOptions === 'Не выбраны') {
			setProductOptions([event.target.value])
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(event.target.getAttribute('data-price'))
		} else if (
			productOptions !== 'Не выбраны' &&
			!productOptions.includes(event.target.value)
		) {
			setProductOptions([...productOptions, event.target.value])
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(event.target.getAttribute('data-price'))
		} else if (
			productOptions !== 'Не выбраны' &&
			productOptions.includes(event.target.value)
		) {
			const newProductOptions = productOptions.filter(
				el => el !== event.target.value
			)
			setProductOptions(newProductOptions)
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(-event.target.getAttribute('data-price'))
		}
	}
	const handleProductMarketingChange = event => {
		//Изменение состояния:
		if (productMarketing === 'Не выбраны') {
			setProductMarketing([event.target.value])
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(event.target.getAttribute('data-price'))
		} else if (
			productMarketing !== 'Не выбраны' &&
			!productMarketing.includes(event.target.value)
		) {
			setProductMarketing([...productMarketing, event.target.value])
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(event.target.getAttribute('data-price'))
		} else if (
			productMarketing !== 'Не выбраны' &&
			productMarketing.includes(event.target.value)
		) {
			const newProductMarketing = productMarketing.filter(
				el => el !== event.target.value
			)
			setProductMarketing(newProductMarketing)
			//Вызов функции расчета стоимости с передачей значения из состояния:
			changePrice(-event.target.getAttribute('data-price'))
		}
	}
	//Функция расчета стоимости (принимает новое значение состояния измененного компонента):
	const changePrice = props => {
		setPrice(currentPrice => currentPrice + Number(props))
	}
	useEffect(() => {
		const formWrapperElement = formWrapperRef.current
		if (!formWrapperElement) {
			return
		}
		const onEntry = entry => {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('show')
				}
			})
		}
		const options = {
			threshold: [0]
		}
		const observer = new IntersectionObserver(onEntry, options)
		observer.observe(formWrapperElement)

		return () => observer.disconnect()
	}, [])
	//Блок с формой введеных данных (name, email, phone number) and button Submit:
	const [inputUsername, setInputUsername] = useState('')
	const [inputEmail, setInputEmail] = useState('')
	const [inputTel, setInputTel] = useState('')
	const setInputValidationState = (inputRef, isValid) => {
		if (inputRef.current) {
			inputRef.current.style.outline = isValid
				? '2px green solid'
				: '2px tomato solid'
		}
	}
	const resetInputValidationState = () => {
		const contactInputRefs = [usernameInputRef, emailInputRef, telInputRef]

		contactInputRefs.forEach(inputRef => {
			if (inputRef.current) {
				inputRef.current.style.outline = 'none'
			}
		})
	}
	const showFormAlert = ({ ruMessage, enMessage }) => {
		if (
			!alertRef.current ||
			!alertRuMessageRef.current ||
			!alertEnMessageRef.current
		) {
			return
		}

		alertRuMessageRef.current.innerText = ruMessage
		alertEnMessageRef.current.innerText = enMessage
		alertRef.current.classList.add('alertFormOpen')

		if (alertTimerRef.current) {
			clearTimeout(alertTimerRef.current)
		}

		alertTimerRef.current = setTimeout(() => {
			alertRef.current?.classList.remove('alertFormOpen')
		}, 2800)
	}
	//Валидация введенных данных перед отправкой:
	const validate = () => {
		let isValid = true
		let isValidName = true
		let isValidEmail = true
		let isValidTel = true
		//Валидация имени
		const NAME_REGEXP = /[^0-9][a-zA-Z0-9-]*$/
		if (NAME_REGEXP.test(inputUsername)) {
			setInputValidationState(usernameInputRef, true)
			isValidName = true
		} else {
			setInputValidationState(usernameInputRef, false)
			isValidName = false
		}
		//Валидация email
		const EMAIL_REGEXP =
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
		if (EMAIL_REGEXP.test(inputEmail)) {
			setInputValidationState(emailInputRef, true)
			isValidEmail = true
		} else {
			setInputValidationState(emailInputRef, false)
			isValidEmail = false
		}
		//Валидация номера телефона
		const MOBILE_PHONE_REGEXP = /^(\+7|8)?(\d{10})$/
		if (MOBILE_PHONE_REGEXP.test(inputTel)) {
			setInputValidationState(telInputRef, true)
			isValidTel = true
		} else {
			setInputValidationState(telInputRef, false)
			isValidTel = false
		}
		isValidName && isValidEmail && isValidTel
			? (isValid = true)
			: (isValid = false)
		return isValid
	}
	//PreventDefault при нажатии Enter в input и переключение фокуса
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
		}
	}
	//PreventDefault при клике на кнопку 'отправить' сделать валидацию введенных данных и отправить данные на сервер
	const handleSubmit = event => {
		event.preventDefault()
		if (validate()) {
			const normalizedProductOptions =
				productOptions.length === 0 ? 'Не выбраны' : productOptions
			const normalizedProductMarketing =
				productMarketing.length === 0 ? 'Не выбраны' : productMarketing

			fetch('https://formspree.io/f/xpzgzken', {
				method: 'POST',
				body: JSON.stringify({
					'Необходимый тип сайта:': productType,
					'Необходимые опции:': normalizedProductOptions,
					'Необходимые маркетинговые услуги:': normalizedProductMarketing,
					'Рассчитанная стоимость услуг': `${price} р.`,
					'Имя клиента:': inputUsername,
					'Email клиента:': inputEmail,
					'Телефон клиента:': inputTel
				}),
				headers: {
					Accept: 'application/json'
				}
			})
				.then(response => {
					if (response.ok) {
						showFormAlert({
							ruMessage: 'Заявка отправлена.',
							enMessage: 'Application sent.'
						})
						formCalcRef.current?.reset()
						resetInputValidationState()
					} else {
						showFormAlert({
							ruMessage: 'Ошибка 404 (Not found), попробуйте позже.',
							enMessage: 'ERROR 404 (Not found), try later.'
						})
						formCalcRef.current?.reset()
						resetInputValidationState()
					}
				})
				.catch(() => {
					showFormAlert({
						ruMessage: 'Ошибка отправки, попробуйте позже.',
						enMessage: 'Sending error, try later.'
					})
				})
		}
	}
	useEffect(() => {
		const timerId = setTimeout(() => {
			if (titleRef.current) {
				titleRef.current.style.opacity = '1'
			}
		}, 1000)

		return () => clearTimeout(timerId)
	}, [])
	useEffect(() => {
		return () => {
			if (alertTimerRef.current) {
				clearTimeout(alertTimerRef.current)
			}
		}
	}, [])
	return (
		<>
			<h3
				className='sectionTitle sectionTitleDelayed animatedTitleFlicker'
				ref={titleRef}
			>
				{t('formMainTitleA.text')}
				<br />
				{t('formMainTitleB.text')}
			</h3>
			<article
				className='row main-form-block formWrapper container-lg'
				ref={formWrapperRef}
			>
				<FormVideoBackground />
				<div className='col-lg-7 col-md-9 col-sm-10 col-xs-12 service-calc'>
					<AlertForm
						alertRef={alertRef}
						ruMessageRef={alertRuMessageRef}
						enMessageRef={alertEnMessageRef}
					/>
					<form className='form-calc' ref={formCalcRef} onSubmit={handleSubmit}>
						<div className='accordion' id='accordionExample'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingOne'>
									<button
										className='accordion-button accordion-button-a'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'
									>
										{t('formMainSelectTypeSite.text')}
									</button>
								</h2>
								<div
									id='collapseOne'
									className='accordion-collapse collapse show'
									aria-labelledby='headingOne'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body'>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-a'
												value='Одностраничный сайт'
												data-price='15000'
												data-old-price=''
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-a'
												htmlFor='type-product-a-a'
											>
												{t('formMainSelectA.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-b'
												value='Многостраничный сайт'
												data-price='25000'
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-b'
												htmlFor='type-product-a-b'
											>
												{t('formMainSelectB.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-c'
												value='Корпоративный сайт'
												data-price='70000'
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-c'
												htmlFor='type-product-a-c'
											>
												{t('formMainSelectC.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-d'
												value='Интернет-витрина (без интеграции 1С)'
												data-price='35000'
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-d'
												htmlFor='type-product-a-d'
											>
												{t('formMainSelectD.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-e'
												value='Интернет-магазин'
												data-price='50000'
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-e'
												htmlFor='type-product-a-e'
											>
												{t('formMainSelectE.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input input-radio-type-product'
												type='radio'
												name='flexRadioDefault'
												id='type-product-a-f'
												value='Онлайн школа'
												data-price='120000'
												onClick={handleProductTypeChange}
											/>
											<label
												className='form-check-label form-check-label-a-f'
												htmlFor='type-product-a-f'
											>
												{t('formMainSelectF.text')}
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingTwo'>
									<button
										className='accordion-button collapsed accordion-button-b'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										{t('formMainSelectOptions.text')}
									</button>
								</h2>
								<div
									id='collapseTwo'
									className='accordion-collapse collapse'
									aria-labelledby='headingTwo'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body checkbox-options'>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-a'
												type='checkbox'
												value='Индивидуальный дизаин'
												data-price='20000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-a'
												htmlFor='type-product-b-a'
											>
												{t('formMainSelectOptionsA.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-b'
												type='checkbox'
												value='Регистрация домена на ваше имя и подключение к сайту'
												data-price='1000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-b'
												htmlFor='type-product-b-b'
											>
												{t('formMainSelectOptionsB.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-c'
												type='checkbox'
												value='Настройка доменной почты'
												data-price='1000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-c'
												htmlFor='type-product-b-c'
											>
												{t('formMainSelectOptionsC.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-d'
												type='checkbox'
												value='Подключение платежной системы'
												data-price='2000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-d'
												htmlFor='type-product-b-d'
											>
												{t('formMainSelectOptionsD.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-e'
												type='checkbox'
												value='Подключение CRM'
												data-price='2000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-e'
												htmlFor='type-product-b-e'
											>
												{t('formMainSelectOptionsE.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-f'
												type='checkbox'
												value='SEO-оптимизация'
												data-price='30000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-f'
												htmlFor='type-product-b-f'
											>
												{t('formMainSelectOptionsF.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-g'
												type='checkbox'
												value='Составление ТЗ'
												data-price='4000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-g'
												htmlFor='type-product-b-g'
											>
												{t('formMainSelectOptionsG.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-b-h'
												type='checkbox'
												value='Аудит сайта'
												data-price='7000'
												onClick={handleProductOptionsChange}
											/>
											<label
												className='form-check-label form-check-label-b-h'
												htmlFor='type-product-b-h'
											>
												{t('formMainSelectOptionsH.text')}
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className='accordion-item accordion-item-style'>
								<h2 className='accordion-header' id='headingThree'>
									<button
										className='accordion-button accordion-button-style collapsed accordion-button-c'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										{t('formMainSelectMarketing.text')}
									</button>
								</h2>
								<div
									id='collapseThree'
									className='accordion-collapse collapse'
									aria-labelledby='headingThree'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body'>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-c-a'
												type='checkbox'
												value='Конкурентный анализ'
												data-price='10000'
												onClick={handleProductMarketingChange}
											/>
											<label
												className='form-check-label form-check-label-c-a'
												htmlFor='type-product-c-a'
											>
												{t('formMainSelectMarketingA.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-c-b'
												type='checkbox'
												value='Разработка маркетинговых мероприятий'
												data-price='5000'
												onClick={handleProductMarketingChange}
											/>
											<label
												className='form-check-label form-check-label-c-b'
												htmlFor='type-product-c-b'
											>
												{t('formMainSelectMarketingB.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-c-c'
												type='checkbox'
												value='SWOT анализ, ABC анализ'
												data-price='15000'
												onClick={handleProductMarketingChange}
											/>
											<label
												className='form-check-label form-check-label-c-c'
												htmlFor='type-product-c-c'
											>
												{t('formMainSelectMarketingC.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-c-d'
												type='checkbox'
												value='Повышение конверсий отдела продаж'
												data-price='120000'
												onClick={handleProductMarketingChange}
											/>
											<label
												className='form-check-label form-check-label-c-d'
												htmlFor='type-product-c-d'
											>
												{t('formMainSelectMarketingD.text')}
											</label>
										</div>
										<div className='form-check'>
											<input
												className='form-check-input'
												id='type-product-c-e'
												type='checkbox'
												value='Увеличение воронки лидов'
												data-price='70000'
												onClick={handleProductMarketingChange}
											/>
											<label
												className='form-check-label form-check-label-c-e'
												htmlFor='type-product-c-e'
											>
												{t('formMainSelectMarketingE.text')}
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className='final-price'>
								<span className='final-price-lang'>
									{t('formMainCost.text')}
								</span>
								{price} ₽
							</div>
							<div className='form-contacts'>
								<div className='form-group'>
									<input
										ref={usernameInputRef}
										onChange={event => setInputUsername(event.target.value)}
										required
										onKeyDown={handleKeyDown}
										type='text'
										className='form-control form-control-username'
										id='exampleInputName'
										aria-describedby='nameHelp'
										placeholder={t('formMainName.text')}
									/>
								</div>
								<div className='form-group'>
									<input
										ref={emailInputRef}
										onChange={event => setInputEmail(event.target.value)}
										required
										onKeyDown={handleKeyDown}
										type='text'
										autoComplete='on'
										className='form-control form-control-email'
										id='exampleInputEmail1'
										aria-describedby='emailHelp'
										placeholder={t('formMainEmail.text')}
									/>
								</div>
								<div className='form-group'>
									<input
										ref={telInputRef}
										onChange={event => setInputTel(event.target.value)}
										required
										onKeyDown={handleKeyDown}
										type='text'
										autoComplete='on'
										className='form-control form-control-tel'
										id='exampleInputPhone'
										placeholder={t('formMainPhone.text')}
									/>
								</div>
								<button type='submit' className='btn btn-primary btn-form-calc'>
									{t('formMainButtonSubmit.text')}
								</button>
							</div>
						</div>
					</form>
				</div>
			</article>
		</>
	)
}

export default FormMain
