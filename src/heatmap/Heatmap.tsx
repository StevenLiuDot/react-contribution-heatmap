import React from 'react'
import { months, weekDays, daysInYear } from '../constants'
import { generateRandomData } from '../utils'
import './Heatmap.css'
import type { Day } from '../types'

type Data = Array<Day>

export interface IProps {
	/**
	 * sample data
	 * {
	 *     date: '2020-01-01',
	 *     count: 2
	 *     level: 'low'
	 * }
	 */
	data: Data
	children?: React.ReactNode
	loading?: boolean
	transformData?: (data: Data) => Data
}

// async function getData(url) {}

const Heatmap = () => {
	return (
		<>
			<div className="graph">
				<ul className="months">
					{months.map((months, i) => (
						<li key={i}>{months}</li>
					))}
				</ul>
				<ul className="days">
					{weekDays.map((weekDays, i) => (
						<li key={i}>{weekDays}</li>
					))}
				</ul>
				<ul className="squares">
					{[...Array(daysInYear)].map((_, i) => (
						<li
							data-level={generateRandomData()}
							key={i}
							data-tooltip={
								generateRandomData() +
								' contributions on this day'
							}
						></li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Heatmap
