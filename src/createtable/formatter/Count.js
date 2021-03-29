import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';

export class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			until: 0,
			lastUntil: null
		};
		this.timer = setInterval(this.updateTimer, 1000);
	}

	componentDidMount() {
		const { cell, row, rowIndex, Data } = this.props;
		var item = Data.item;

		var d = '';
		var date = moment().format('YYYY-MM-DD HH:mm:ss'); // 현재 시간
		var diffr = moment.duration(moment(item.endtime).diff(moment(date)));
		var hours = parseInt(diffr.asHours());
		var minutes = parseInt(diffr.minutes());
		var seconds = parseInt(diffr.seconds());
		d = hours * 60 * 60 + minutes * 60 + seconds; //마감날짜 - 현재날짜 초 단위
		this.setState({
			until: Math.max(d, 0)
		});
		/*var diffr1 = moment.duration(moment(this.props.value.timeout).diff(this.props.value.RegistrationDate));
				var hours1 = parseInt(diffr1.asHours());
				var minutes1 = parseInt(diffr1.minutes());
				var seconds1 = parseInt(diffr1.seconds());
	
				d1 = hours1 * 60 * 60 + minutes1 * 60 + seconds1; //마감날짜 - 등록날짜 초 단위*/
		//this.state.progressBarProgress = Math.floor(d / d1 * 100) / 100 * width;

		/*this.state.test2 = this.test.interpolate({
					inputRange: [ this.state.progressBarProgress, this.state.progressBarProgress ],
					outputRange: [ this.state.progressBarProgress, this.state.progressBarProgress ],
					extrapolate: 'clamp'
				});*/
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	getTimeLeft = () => {
		const { until } = this.state;

		return {
			seconds: until % 60,
			minutes: parseInt(until / 60, 10) % 60,
			hours: parseInt(until / (60 * 60), 10) % 24,
			days: parseInt(until / (60 * 60 * 24), 10)
		};
	};

	updateTimer = () => {
		if (this.state.lastUntil === this.state.until || !this.props.running) {
			return;
		}
		if (this.state.until === 1 || (this.state.until === 0 && this.state.lastUntil !== 1)) {
			this.props.Data.onChange(item.dataField, cell, row, rowIndex, 'onClick');
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
	render() {
		return <div>{this.state.until}</div>;
	}
}
