'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'select' | 'textarea';
  type?: string;
  children?: React.ReactNode;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        as={rest.as ?? 'input'}
        {...rest}
        id={id}
        name={rest.name}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
