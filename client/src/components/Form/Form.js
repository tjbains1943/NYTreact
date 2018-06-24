import React from 'react';

export const Form = props => (
  <form className="text-right boxShadow p-5" {...props}>{props.children}</form>
)