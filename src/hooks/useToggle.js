import { useState } from 'react'

const useToggle = initialValue => {
	const [value, setValue] = useState(initialValue)
	const toggle = () => {
		setValue(currentValue => !currentValue)
	}
	return [value, toggle]
}

export { useToggle }
