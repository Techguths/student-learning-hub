import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TutorCardProps {
  name: string;
  avatar?: string;
  className?: string;
}

export function TutorCard({ name, avatar, className }: TutorCardProps) {
  return (
    <div className={cn(
      'flex items-center gap-3 p-4 bg-card rounded-2xl shadow-soft border border-border/50',
      className
    )}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <User className="w-6 h-6 text-primary" />
        )}
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">Your Tutor</p>
        <p className="font-semibold text-foreground">{name}</p>
      </div>
    </div>
  );
}
