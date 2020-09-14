import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import SplitText from '../vendors/SplitText';

gsap.registerPlugin(SplitText);

function Content({ text }) {
	const textRef = useRef(null);

	useEffect(() => {
		if (textRef.current) {
			new SplitText(textRef.current, { type: 'lines', linesClass: 'lineChild' });
			new SplitText(textRef.current, { type: 'lines', linesClass: 'lineParent' });

			return;
		}
	}, [textRef]);

	return (
		<div className="Content">
			<div className="Site-container">
				<div className="row">
					<div className="col-14 offset-md-5 col-md-9">
						<div
							data-scroll
							className="Content__text"
							ref={textRef}
							dangerouslySetInnerHTML={{ __html: text }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
