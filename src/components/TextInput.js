import React from 'react'
import { FormGroup, Input } from 'reactstrap'

export default ({ name, error, type, id, value, className, ...rest }) => {
		let input_type = type ? type : 'text'

	return (
		<FormGroup>
			<Input
				type={input_type}
				value={!value ? '' : value}
				name={name}
				id={id}
				className={error ? `is-invalid ${className}` : className ? className : ''}
				{...rest}
			/>
			{error ? <span className="alert-danger">{error}</span> : ''}
		</FormGroup>
	)
}
