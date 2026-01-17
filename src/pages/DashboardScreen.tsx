import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { TutorCard } from '@/components/cards/TutorCard';
import { SessionCard } from '@/components/cards/SessionCard';
import { ProgressSummaryCard } from '@/components/cards/ProgressSummaryCard';
import { mockSessions, mockProgress } from '@/data/mockData';
import { Bell, Calendar } from 'lucide-react';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const { student } = useAuth();

  const todaySession = mockSessions.find(s => s.status === 'Upcoming');
  const nextSession = mockSessions.filter(s => s.status === 'Upcoming')[1];

  return (
    <MobileLayout>
      <div className="min-h-screen">
        {/* Header */}
        <div className="gradient-hero islamic-pattern pt-12 pb-24 px-6">
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <div>
              <p className="text-primary-foreground/70 text-sm">Assalamu Alaikum</p>
              <h1 className="text-2xl font-bold text-primary-foreground">
                {student?.name || 'Student'}
              </h1>
            </div>
            <button className="relative p-3 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors">
              <Bell className="w-5 h-5 text-primary-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full" />
            </button>
          </div>

          {/* Tutor Card */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <TutorCard 
              name={student?.tutorName || 'Your Tutor'} 
              avatar={student?.tutorAvatar}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-background -mt-16 rounded-t-3xl px-6 pt-6 pb-6 space-y-6">
          {/* Progress Summary */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <ProgressSummaryCard 
              stats={mockProgress} 
              onClick={() => navigate('/progress')}
            />
          </div>

          {/* Today's Session */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-foreground">Today's Session</h2>
              <button 
                onClick={() => navigate('/schedule')}
                className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
              >
                <Calendar className="w-4 h-4" />
                View All
              </button>
            </div>

            {todaySession ? (
              <SessionCard 
                session={todaySession}
                onClick={() => navigate(`/session/${todaySession.id}`)}
              />
            ) : (
              <div className="bg-muted rounded-2xl p-6 text-center">
                <Calendar className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No session scheduled for today</p>
              </div>
            )}
          </div>

          {/* Upcoming Session */}
          {nextSession && (
            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-lg font-semibold text-foreground mb-3">Next Session</h2>
              <SessionCard 
                session={nextSession}
                onClick={() => navigate(`/session/${nextSession.id}`)}
                compact
              />
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
