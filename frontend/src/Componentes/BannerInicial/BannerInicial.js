import React from 'react'

import './BannerInicial.css'

const BannerInicial = props => (
	<div className="bannerInicial" id={props.banner}>
		<div className="textoBanner">
			{props.children}
		</div>
	</div>
)

export default BannerInicial