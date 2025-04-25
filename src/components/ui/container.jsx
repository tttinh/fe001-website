import { cn } from '@/lib/utils';

const Container = ({ className, children }) => {
  return (
    <div className={cn('container mx-auto px-4', className)}>{children}</div>
  );
};

export default Container;
