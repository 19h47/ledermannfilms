import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import SplitText from '../vendors/SplitText';

gsap.registerPlugin(SplitText);

const ProjectText = ({ data }) => {
	const tabsRef = useRef(null);
	const itemRefs = useRef([]);

	useEffect(() => {
		const getModule = async () => {
			return await import('@19h47/tabs').then(module => module.default);
		};

		if (tabsRef.current && window) {
			getModule().then(module => {
				const tabs = new module(tabsRef.current, { hash: false });
				tabs.init();

				tabs.tabs.forEach(tab => {
					tab.on('Tab.activate', () => window.scroll.update());
				});
			});
		}
	}, [tabsRef]);

	useEffect(() => {
		return (
			itemRefs.current.length &&
			itemRefs.current.forEach(item => {
				new SplitText(item, { type: 'lines', linesClass: 'lineChild' });
				new SplitText(item, { type: 'lines', linesClass: 'lineParent' });
			})
		);
	}, [itemRefs]);

	return (
		<div className="Tabs" ref={tabsRef}>
			<ul
				className="Tabs__navigation"
				role="tablist" // eslint-disable-line
				aria-label="navigation">
				{data.map((tab, index) => {
					return (
						<li key={index} data-scroll>
							<button
								type="button"
								className={`${0 === index ? 'is-active' : ''}`}
								role="tab"
								aria-selected={`${0 === index ? true : false}`} // eslint-disable-line
								aria-controls={`${tab.id}-tab`}
								id={tab.id}
								style={{ transitionDelay: `${index * 0.1}s` }}>
								{tab.title}
							</button>
						</li>
					);
				})}
			</ul>
			<div className="Tabs__content">
				{data.map((tab, index) => (
					<section
						key={index}
						className={`${0 === index ? 'is-active' : ''}`}
						tabIndex="0" // eslint-disable-line
						role="tabpanel"
						aria-labelledby={tab.id}
						id={`${tab.id}-tab`}
						dangerouslySetInnerHTML={{ __html: tab.content }}
						data-scroll={`${0 === index ? true : false}`}
						ref={el => (itemRefs.current[index] = el)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectText;
