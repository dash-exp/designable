import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  title: string;
}>;

const Section = ({ children, title }: Props) => {
  return (
    <div className="dash-column">
       <div className="dash-column-item">{children}</div>
    </div>
  );
};

export default Section;
