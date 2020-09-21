import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
	const handleClick = event => {
		const { target } = event;
		if (ref.current && !ref.current.contains(target)) {
			callback();
		}
	};

	useEffect(() => {
		global.addEventListener('click', handleClick);

		return () => {
			global.removeEventListener('click', handleClick);
		};
	});
};

export default useOutsideClick;
