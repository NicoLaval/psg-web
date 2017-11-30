import React from 'react';
import { TextField } from 'material-ui';
import './input.css';

function Input({ id, label, value, onChange, required, disabled, col }) {
	const inputStyle = {
		color: 'black',
		textAlign: 'center',
	};
	const style = {
		width: '50%',
	};

	const errorText = value || !required ? '' : 'This field is required';

	return (
		<div className={`mui-col-md-${col} centered input`}>
			<div className="mui-row">
				<h1 className="mui-col-md-12">{label}</h1>
			</div>
			<div className="mui-row">
				<TextField
					className="mui-col-md-6 mui-col-md-offset-3"
					id={id}
					style={style}
					inputStyle={inputStyle}
					value={value}
					onChange={e => onChange(e.target.value)}
					disabled={disabled}
					errorText={errorText}
				/>
			</div>
		</div>
	);
}

export default Input;
