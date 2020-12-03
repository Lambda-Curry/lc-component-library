import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { FormikProps } from 'formik';
import { InputAdornment } from '@material-ui/core';
import MaskedInput from 'react-text-mask';
import { InputText } from '..';
import { InputProps } from '../InputBase';
import { isHexColor, hexColorRegex } from '../../util/colors';

import './input-color.scss';

interface TextMaskCustomProps {
  mask?: (string | RegExp)[];
  inputRef: (ref: HTMLInputElement | null) => void;
}

export interface InputColorProps extends InputProps {}

const InputColorMask: React.FC<TextMaskCustomProps> = props => {
  const { inputRef, mask, ...rest } = props;

  return (
    <MaskedInput
      mask={['#', ...new Array(6).fill(hexColorRegex, 0)]}
      {...rest}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      placeholderChar={'\u2000'}
    />
  );
};

export const InputColor: FC<InputColorProps> = ({ className, placeholder = 'Pick a color', ...props }) => {
  const fieldProps = props.formikProps?.getFieldProps(props.name);
  const fieldHelpers = props.formikProps?.getFieldHelpers(props.name);
  const fieldValue = fieldProps?.value || props.value;
  const isValidColor = isHexColor(fieldValue);

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (fieldHelpers) {
      fieldHelpers.setValue(event.target.value);
    }
  };

  return (
    <InputText
      {...props}
      labelPlacement="above"
      placeholder={placeholder}
      className={classNames('lc-input-color', { 'lc-input-color-invalid-hex': !isValidColor }, className)}
      InputProps={{
        ...props.InputProps,
        inputComponent: InputColorMask as any,
        startAdornment: (
          <InputAdornment position="start">
            <div className="lc-input-color-picker">
              <input
                name={`_${props.name}_picker`}
                type="color"
                className="lc-input-color-picker-input"
                onChange={handlePickerChange}
                value={isValidColor ? fieldValue : '#000000'} // Set a valid hex value as the default to avoid console warnings.
              />
            </div>
          </InputAdornment>
        )
      }}
    />
  );
};
