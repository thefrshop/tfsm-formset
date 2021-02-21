import React from 'react';
import { FaAngleDoubleUp, FaAngleUp, FaAngleDoubleDown, FaAngleDown } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export default class TableButton extends React.Component {
	render() {
		return (
			<div className="TableButtonSet">
				{this.props.UpDownBT && (
					<div className="TableButtonGroup">
						<Button variant="secondary" className="TButton" onClick={() => this.props.DoubleUp()}>
							<FaAngleDoubleUp className="bannerIcons" />
						</Button>
						<Button variant="secondary" className="TButton" onClick={() => this.props.Up()}>
							<FaAngleUp className="bannerIcons" />
						</Button>
						<Button variant="secondary" className="TButton" onClick={() => this.props.Down()}>
							<FaAngleDown className="bannerIcons" />
						</Button>
						<Button variant="secondary" className="TButton" onClick={() => this.props.DoubleDown()}>
							<FaAngleDoubleDown className="bannerIcons" />
						</Button>
					</div>
				)}

				{this.props.setBT && (
					<div className="TableButtonGroup">
						<Button variant="secondary" className="TButton" onClick={() => this.props.Remove()}>
							선택 삭제
						</Button>
						<div className="Split" />
						<Button variant="secondary" className="TButton" onClick={() => this.props.Add()}>
							등록
						</Button>
						<Button variant="secondary" className="TButton" onClick={() => this.props.Modify()}>
							수정
						</Button>
					</div>
				)}
			</div>
		);
	}
}
