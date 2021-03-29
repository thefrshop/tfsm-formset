import React from 'react';
import { sprintf } from 'sprintf-js';

export default class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			until: Math.max(this.props.until, 0),
			lastUntil: null
		};
		this.timer = setInterval(this.updateTimer, 1000);
	}

	componentDidMount() {}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateTimer = () => {
		if (this.state.lastUntil === this.state.until) {
			return;
		}
		if (this.state.until === 1 || (this.state.until === 0 && this.state.lastUntil !== 1)) {
			if (this.props.onFinish) {
				this.props.onFinish();
			}
		}

		if (this.state.until === 0) {
			this.setState({ lastUntil: 0, until: 0 });
		} else {
			this.setState({
				lastUntil: this.state.until,
				until: Math.max(0, this.state.until - 1)
			});
		}
	};

	getTimeLeft = () => {
		const { until } = this.state;

		return {
			seconds: until % 60,
			minutes: parseInt(until / 60, 10) % 60,
			hours: parseInt(until / (60 * 60), 10) % 24,
			days: parseInt(until / (60 * 60 * 24), 10)
		};
	};

	renderDoubleDigits = (label, digits) => {
		return (
			<div style={{ display: 'flex', textAlign: 'center' }}>
				{digits}
				{label}
			</div>
		);
	};

	renderCountDown = () => {
		const { timeToShow, timeLabels } = this.props;
		const { days, hours, minutes, seconds } = this.getTimeLeft();
		const newTime = sprintf('%02d:%02d:%02d:%02d', days, hours, minutes, seconds).split(':');
		if (this.props.fulldate) {
			return (
				<div style={{ display: 'flex', textAlign: 'center' }}>
					{timeToShow.includes('D') ? this.renderDoubleDigits(timeLabels.d, newTime[0]) : null}
					{timeToShow.includes('H') ? this.renderDoubleDigits(timeLabels.h, newTime[1]) : null}
					{timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
					{timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
				</div>
			);
		} else {
			if (newTime[0] != 0) {
				return (
					<div style={{ display: 'flex', textAlign: 'center' }}>
						{timeToShow.includes('D') ? this.renderDoubleDigits(' 일 ', newTime[0]) : null}
						{timeToShow.includes('H') ? this.renderDoubleDigits(' 시간', newTime[1]) : null}
					</div>
				);
			} else if (newTime[1] != 0) {
				return (
					<div style={{ display: 'flex', textAlign: 'center' }}>
						{timeToShow.includes('H') ? this.renderDoubleDigits(timeLabels.h, newTime[1]) : null}
						{timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
						{timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
					</div>
				);
			} else {
				return (
					<div style={{ display: 'flex', textAlign: 'center' }}>
						{timeToShow.includes('M') ? this.renderDoubleDigits(timeLabels.m, newTime[2]) : null}
						{timeToShow.includes('S') ? this.renderDoubleDigits(timeLabels.s, newTime[3]) : null}
					</div>
				);
			}
		}
	};

	render() {
		if (this.props.until !== undefined) return <div>{this.renderCountDown()}</div>;
		else return null;
	}
}
