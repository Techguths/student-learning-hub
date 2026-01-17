import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'Upcoming' | 'Completed' | 'Missed';
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
        status === 'Upcoming' && 'bg-primary/10 text-primary',
        status === 'Completed' && 'bg-success/10 text-success',
        status === 'Missed' && 'bg-destructive/10 text-destructive',
        className
      )}
    >
      {status}
    </span>
  );
}
