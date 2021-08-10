import React, { useState } from "react"

export enum CardVariant {
	outlined = "outlined",
	primary = "primary",
}

interface CardProps {
	width: string
	height: string
	children: React.ReactChild | React.ReactNode
	variant: CardVariant
	onClick: (num: number) => void
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	const [state, setState] = useState(0)

	const updateState = () => {
		setState(state => state + 1)
		onClick(state)
	}

	return (
		<div
			style={{
				width,
				height,
				border: variant === CardVariant.outlined ? "1px solid gray" : "none",
				background: variant === CardVariant.primary ? "lightgray" : "",
			}}
			onClick={updateState}
		>
			{children}
		</div>
	)
}

export default Card
