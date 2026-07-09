export const TEAM_STAT_TARGETS = [16, 2, 5, 1]

export const INTRO_ITEMS = [
	{
		titleKey: 'landingIntroStrategyTitle.text',
		textKey: 'landingIntroStrategyText.text'
	},
	{
		titleKey: 'landingIntroDesignTitle.text',
		textKey: 'landingIntroDesignText.text'
	},
	{
		titleKey: 'landingIntroLaunchTitle.text',
		textKey: 'landingIntroLaunchText.text'
	}
]

export const BENTO_ITEMS = [
	{
		titleKey: 'landingBentoSpeedTitle.text',
		textKey: 'landingBentoSpeedText.text'
	},
	{
		titleKey: 'landingBentoAdaptiveTitle.text',
		textKey: 'landingBentoAdaptiveText.text'
	},
	{
		titleKey: 'landingBentoAnalyticsTitle.text',
		textKey: 'landingBentoAnalyticsText.text'
	},
	{
		titleKey: 'landingBentoIntegrationsTitle.text',
		textKey: 'landingBentoIntegrationsText.text'
	},
	{
		titleKey: 'landingBentoSupportTitle.text',
		textKey: 'landingBentoSupportText.text'
	},
	{
		titleKey: 'landingBentoPromotionTitle.text',
		textKey: 'landingBentoPromotionText.text'
	}
]

export const PROCESS_ITEMS = [
	{
		titleKey: 'landingProcessBriefTitle.text',
		textKey: 'landingProcessBriefText.text'
	},
	{
		titleKey: 'landingProcessPrototypeTitle.text',
		textKey: 'landingProcessPrototypeText.text'
	},
	{
		titleKey: 'landingProcessBuildTitle.text',
		textKey: 'landingProcessBuildText.text'
	},
	{
		titleKey: 'landingProcessLaunchTitle.text',
		textKey: 'landingProcessLaunchText.text'
	}
]

export const FAQ_ITEMS = [
	{
		questionKey: 'landingFaqQuestionA.text',
		answerKey: 'landingFaqAnswerA.text'
	},
	{
		questionKey: 'landingFaqQuestionB.text',
		answerKey: 'landingFaqAnswerB.text'
	},
	{
		questionKey: 'landingFaqQuestionC.text',
		answerKey: 'landingFaqAnswerC.text'
	},
	{
		questionKey: 'landingFaqQuestionD.text',
		answerKey: 'landingFaqAnswerD.text'
	},
	{
		questionKey: 'landingFaqQuestionE.text',
		answerKey: 'landingFaqAnswerE.text'
	}
]

export const translateLandingItems = (items, t) =>
	items.map(item => ({
		title: t(item.titleKey),
		text: t(item.textKey)
	}))

export const translateFaqItems = (items, t) =>
	items.map(item => ({
		question: t(item.questionKey),
		answer: t(item.answerKey)
	}))
