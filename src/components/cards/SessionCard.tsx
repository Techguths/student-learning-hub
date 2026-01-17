import { Session } from '@/types/student';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { SessionTypeBadge } from '@/components/ui/SessionTypeBadge';
import { Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format, parseISO } from 'date-fns';

interface SessionCardProps {
  session: Session;
  onClick?: () => void;
  compact?: boolean;
  className?: string;
}

export function SessionCard({ session, onClick, compact = false, className }: SessionCardProps) {
  const formattedDate = format(parseISO(session.date), 'EEE, MMM d');

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left bg-card rounded-2xl p-4 shadow-soft border border-border/50',
        'transition-all duration-200 hover:shadow-elevated hover:scale-[1.02]',
        'focus:outline-none focus:ring-2 focus:ring-primary/20',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <SessionTypeBadge type={session.type} />
            <StatusBadge status={session.status} />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Clock className="w-4 h-4" />
            <span>{formattedDate} • {session.time}</span>
          </div>
          
          {!compact && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{session.tutorName}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          <span className="text-sm font-semibold text-primary">{session.duration}m</span>
        </div>
      </div>

      {session.notes && !compact && (
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 border-t border-border/50 pt-3">
          {session.notes}
        </p>
      )}
    </button>
  );
}
