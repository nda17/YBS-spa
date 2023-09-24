import { useState, useEffect } from 'react';
import './MainScreen.scss';
import '../../../assets/styles/media-queries.scss'
import { MainVideoBackground } from '../../screens/MainVideoBackground'; 

const MainScreen = () => {
	const [title, setTitle] = useState('В век стремительного развития IT-технологий, электронной коммерции, каждое предприятие нуждается в сайте или веб-приложении для своей компании.');
	const subtitle = 'Тот самый сайт, который будет делать ваш бизнес успешным.';
	
	useEffect(() => {
		const title = document.querySelector('.mainTitle__down-subtitle');
		title.style.opacity = '1';
		setTimeout(() => {
			title.style.opacity = '0';
		}, 2100);
		setTimeout(() => {
			title.style.opacity = '1';
			setTitle('Сайт - это лицо как лицо компании, так и незаменимый сотрудник, который работает 24/7.');
			setTimeout(() => {
				title.style.opacity = '0';
			}, 2100);
		}, 4400);
		setTimeout(() => {
			title.style.opacity = '1';
			setTitle('Наша задача создать идеальный сайт, который подойдет именно вам и вашей целевой аудитории.');
		}, 8800);
		setTimeout(() => {
			setTitle('Мы создадим вам сайт, который будет зарабатывать.');
			setTimeout(() => {
				document.querySelector('.mainTitle__down-subtitle-span') ?
				document.querySelector('.mainTitle__down-subtitle-span').style.opacity = '1' : null

			}, 2000);
		}, 8800);
	}, []);
	return (
		<article className='row image-block'>
			<MainVideoBackground />
			<div className='col-12 mainTitle'>
				<h3 className='mainTitle__up-subtitle'>
					Digital агентство полного цикла
				</h3>
				<h1 className='mainTitleText'>Your Business Site</h1>
				<h3 className='mainTitle__down-subtitle'>{title}</h3>
				<h3 className='mainTitle__down-subtitle-span'>{subtitle}</h3>
			</div>
		</article>
	)
}

export { MainScreen }
