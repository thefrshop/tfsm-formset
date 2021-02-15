import React from 'react';
import { FaAngleDoubleUp, FaAngleUp, FaAngleDoubleDown, FaAngleDown } from 'react-icons/fa';

export default class TableButton extends React.Component {
	render() {
		return (
			<div className="TableButtonSet">
				{this.props.UpDownBT && (
					<div className="TableButtonGroup">
						<button className="TButton" onClick={() => this.props.DoubleUp()}>
							<FaAngleDoubleUp className="bannerIcons" />
						</button>
						<button className="TButton" onClick={() => this.props.Up()}>
							<FaAngleUp className="bannerIcons" />
						</button>
						<button className="TButton" onClick={() => this.props.Down()}>
							<FaAngleDown className="bannerIcons" />
						</button>
						<button className="TButton" onClick={() => this.props.DoubleDown()}>
							<FaAngleDoubleDown className="bannerIcons" />
						</button>
					</div>
				)}

				{this.props.setBT && (
					<div className="TableButtonGroup">
						<button className="TButton" onClick={() => this.props.Remove()}>
							선택 삭제
						</button>
						<div className="Split" />
						<button className="TButton" onClick={() => this.props.Add()}>
							등록
						</button>
						<button className="TButton" onClick={() => this.props.Modify()}>
							수정
						</button>
					</div>
				)}
			</div>
		);
	}
}
