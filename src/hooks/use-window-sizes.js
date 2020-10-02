import { useEffect, useState } from 'react';

const useWindowSizes = () => {
	const [sizes, setSizes] = useState({ width: undefined, height: undefined });

	useEffect(() => {
		const handleResize = () => {
			setSizes({ width: global.innerWidth, height: global.innerHeight });
		};

		global.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			global.removeEventListener('resize', handleResize);
		};
	}, []);

	return sizes;
};

export default useWindowSizes;
