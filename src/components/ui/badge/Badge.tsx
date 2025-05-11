import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  variant?: 'blue' | 'red' | 'green' | 'yellow';
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Badge = ({ children, variant = 'blue', className = '', ...props }: BadgeProps) => {
  const variantStyles = {
    blue: 'bg-teal-400/10 text-teal-400',
    red: 'bg-red-400/10 text-red-400',
    green: 'bg-green-400/10 text-green-400',
    yellow: 'bg-yellow-400/10 text-yellow-400',
  };

  const badgeStyles = `${variantStyles[variant]} inline-block mr-1.5 mt-2 px-3 py-1 text-xs font-medium leading-5 rounded-full`;

  if (Array.isArray(children) && children.length > 1) {
    return (
      <ul className={`flex flex-wrap gap-2 ${className}`} {...props}>
        {children.map((badge, index) => (
          <li key={index} className={badgeStyles}>
            {badge}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={`${badgeStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Badge;
