import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Eject from 'material-ui/svg-icons/action/eject';

function Button({ path }) {
	return (
		<Link to={path} className="mui-col-md-12">
			<FloatingActionButton secondary={true}>
				<Eject />
			</FloatingActionButton>
		</Link>
	);
}

Button.propTypes = {
	path: PropTypes.string.isRequired,
};

export default Button;
