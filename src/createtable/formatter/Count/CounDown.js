import React from 'react';

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

	render() {
		if (this.props.until !== undefined) return <div>{this.state.until}</div>;
		else return null;
	}
}
