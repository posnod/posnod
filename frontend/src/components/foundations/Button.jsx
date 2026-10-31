'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

const Button = forwardRef(function Button(
  {
    variant = 'fill',
    size = 'md',
    radius = '8',
    gap = 'fixed',
    iconLeft,
    iconRight,
    children,
    onClick,
    href,
    target,
    rel,
    className,
    asChild,
    ...props
  },
  ref
) {
  const base = 'btn';

  const variantClass = {
    fill: 'btn-fill',
    outline: 'btn-outline',
    text: 'btn-text',
    ghost: 'btn-ghost',
    accent: 'btn-accent',
  }[variant] || 'btn-fill';

  const sizeClass = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }[size] || 'btn-md';

  const radiusClass = `radius-${radius}`;

  const gapClass =
    gap === 'by-size'
      ? {
          sm: 'gap-sm',
          md: 'gap-md',
          lg: 'gap-lg',
          xl: 'gap-xl',
        }[size] || 'gap-md'
      : '';

  const buttonClasses = clsx(
    base,
    variantClass,
    sizeClass,
    radiusClass,
    gapClass,
    className
  );

  const Comp = asChild ? Slot : 'button';

  const renderButton = (elementProps) => (
    <Comp
      {...elementProps}
      ref={ref}
      className={buttonClasses}
      onClick={onClick}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </Comp>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');

    if (isExternal) {
      return renderButton({
        href,
        target: target || '_blank',
        rel: rel || 'noopener noreferrer',
        ...props,
      });
    }

    return (
      <Link href={href} legacyBehavior passHref>
        {renderButton({ ...props })}
      </Link>
    );
  }

  return renderButton(props);
});

export default Button;