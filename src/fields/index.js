import React, {Component} from 'react';
import cx from 'classnames';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating'
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid'
  }
  if (meta.touched && meta.valid) {
    return 'valid'
  }
};

export const customInput = props => {
  const {input, type, meta, placeholder} = props;
  return (
    <div
      className={cx(
        'custom-input-container',
        {'flex-row-reverse': type === 'checkbox'},
        {dirty: meta.dirty},
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={props.type} placeholder={placeholder} autoFocus={props.autoFocus} className="form-control"/>
      {meta.error &&
      meta.touched &&
      !meta.active && (
        <div className='feedback-text error-text'>
          {meta.error}
        </div>
      )}
    </div>
  )
};

export const responseError = props => {
    if(props.error) {
     return (
       <div className='feedback-text error-text'>
              {props.error}
        </div>
     )} else {
      return (<React.Fragment/>)
    }

}


export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value='tabs'>Tabs</option>
        <option value='spaces'>Spaces</option>
      </select>
      {/*<ReactJson src={props}/>*/}
    </div>
  )
};
