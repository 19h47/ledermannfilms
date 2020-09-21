import { useEffect, useState } from 'react';

const useWindowWidth = () => {
	const [width, setWidth] = useState(global.innerWidth);

	useEffect(() => {
		const handleResize = () => setWidth(global.innerWidth);
		global.addEventListener('resize', handleResize);
		return () => {
			global.removeEventListener('resize', handleResize);
		};
	});

	return width;
};

export default useWindowWidth;
