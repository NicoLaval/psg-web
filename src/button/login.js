import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Input from 'material-ui/svg-icons/action/input';

function Button({ id }) {
	const disabled = id ? false : true;
	return (
		<Link to={`/surveys/${id}`} className="mui-col-md-12 centered">
			<FloatingActionButton secondary={true} disabled={disabled}>
				<Input />
			</FloatingActionButton>
		</Link>
	);
}

Button.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Button;
