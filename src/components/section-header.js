import React from 'react';

import Label from '@/assets/svg/label.inline.svg';

function SectionHeader({ label = 'Work', title = 'Main projects' }) {
	return (
		<header className="Section-header">
			<div className="Site-container">
				<div className="row">
					<div className="col-14">
						<hr data-scroll />
					</div>
				</div>
				<div className="row">
					<div className="col-5 d-none d-md-block">
						<div className="Label" data-scroll>
							<span style={{ transitionDelay: '0.6s' }}>
								<Label />
								{label}
							</span>
						</div>
					</div>
					<div className="col-7 col-md-5">
						<h2 data-scroll>
							<span
								style={{ transitionDelay: '0.8s' }}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						</h2>
					</div>
					<div className="col-7 col-md-4">
						<div className="Section-header__diamond text-align-right" data-scroll>
							<span style={{ transitionDelay: '1s' }}>⦿</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default SectionHeader;
