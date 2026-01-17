import { useParams, useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { SessionTypeBadge } from '@/components/ui/SessionTypeBadge';
import { mockSessions } from '@/data/mockData';
import { ArrowLeft, Calendar, Clock, User, FileText, Timer } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function SessionDetailScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const session = mockSessions.find(s => s.id === id);

  if (!session) {
    return (
      <MobileLayout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-muted-foreground">Session not found</p>
        </div>
      </MobileLayout>
    );
  }

  const formattedDate = format(parseISO(session.date), 'EEEE, MMMM d, yyyy');

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="gradient-hero islamic-pattern pt-12 pb-20 px-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <SessionTypeBadge type={session.type} />
              <StatusBadge status={session.status} />
            </div>
            <h1 className="text-2xl font-bold text-primary-foreground">
              {session.type} Session
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-background -mt-8 rounded-t-3xl px-6 pt-6 pb-6 space-y-6">
          {/* Details Card */}
          <div className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 space-y-4 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium text-foreground">{formattedDate}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium text-foreground">{session.time}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium text-foreground">{session.duration} minutes</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tutor</p>
                <p className="font-medium text-foreground">{session.tutorName}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          {session.notes && (
            <div className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Session Notes</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {session.notes}
              </p>
            </div>
          )}

          {/* Status info for missed sessions */}
          {session.status === 'Missed' && (
            <div className="bg-destructive/10 rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <p className="text-destructive text-sm">
                This session was missed. Please contact your tutor if you need to reschedule.
              </p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
