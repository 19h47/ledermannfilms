import { useEffect, useState } from 'react';

const useWindowWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		global.addEventListener('resize', handleResize);
		return () => {
			global.removeEventListener('resize', handleResize);
		};
	});

	return width;
};

export default useWindowWidth;
