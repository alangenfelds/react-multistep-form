import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: Props) => {
  return (
    <>
      <h2 className="form-title">{title}</h2>
      <div className="form-wrapper">{children}</div>
    </>
  );
};

export default FormWrapper;
