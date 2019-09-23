import React from 'react'

import './BannerInicial.css'

const BannerInicial = props => (
	<div className="bannerInicial" id={props.banner}>
		<div className="textoBanner">
			<h1>{props.titulo}</h1>
		</div>
	</div>
)

export default BannerInicial