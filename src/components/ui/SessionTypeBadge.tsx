import { cn } from '@/lib/utils';
import { BookOpen, RefreshCw, Volume2 } from 'lucide-react';

interface SessionTypeBadgeProps {
  type: 'Hifz' | 'Revision' | 'Recitation';
  className?: string;
}

const typeConfig = {
  Hifz: {
    icon: BookOpen,
    className: 'bg-primary/10 text-primary',
  },
  Revision: {
    icon: RefreshCw,
    className: 'bg-secondary/20 text-secondary-foreground',
  },
  Recitation: {
    icon: Volume2,
    className: 'bg-accent/20 text-accent-foreground',
  },
};

export function SessionTypeBadge({ type, className }: SessionTypeBadgeProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
        config.className,
        className
      )}
    >
      <Icon className="w-3 h-3" />
      {type}
    </span>
  );
}
