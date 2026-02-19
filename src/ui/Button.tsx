import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  textOnly?: boolean;
  className?: string;
};

export default function Button({ children, textOnly = false, className = '', ...props }: ButtonProps) {
  const cssClasses = textOnly
    ? `text-center text-blue-600 hover:text-primary hover:cursor-pointer font-semibold px-4 py-2 rounded-full inline-block bg-none`
    : `text-center bg-linear-to-r from-primary to-secondary border border-primary hover:bg-transparent text-white hover:text-primary hover:cursor-pointer font-semibold px-4 py-2 rounded-full inline-block`;

  return (
    <>
      <button {...props} className={`${cssClasses} ${className}`}>
        {children}
      </button>
    </>
  );
}
