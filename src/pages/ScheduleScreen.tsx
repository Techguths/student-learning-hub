import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { SessionCard } from '@/components/cards/SessionCard';
import { mockSessions } from '@/data/mockData';
import { Calendar, List } from 'lucide-react';
import { cn } from '@/lib/utils';

type ViewMode = 'upcoming' | 'past';

export default function ScheduleScreen() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<ViewMode>('upcoming');

  const upcomingSessions = mockSessions.filter(s => s.status === 'Upcoming');
  const pastSessions = mockSessions.filter(s => s.status !== 'Upcoming');

  const displayedSessions = viewMode === 'upcoming' ? upcomingSessions : pastSessions;

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-6 pt-12 pb-6 safe-top">
          <h1 className="text-2xl font-bold text-foreground mb-4">Schedule</h1>
          
          {/* View Toggle */}
          <div className="flex p-1 bg-muted rounded-xl">
            <button
              onClick={() => setViewMode('upcoming')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                viewMode === 'upcoming' 
                  ? 'bg-card text-foreground shadow-sm' 
                  : 'text-muted-foreground'
              )}
            >
              <Calendar className="w-4 h-4" />
              Upcoming
            </button>
            <button
              onClick={() => setViewMode('past')}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                viewMode === 'past' 
                  ? 'bg-card text-foreground shadow-sm' 
                  : 'text-muted-foreground'
              )}
            >
              <List className="w-4 h-4" />
              Past
            </button>
          </div>
        </div>

        {/* Sessions List */}
        <div className="px-6 py-6 space-y-4">
          {displayedSessions.length > 0 ? (
            displayedSessions.map((session, index) => (
              <div 
                key={session.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SessionCard
                  session={session}
                  onClick={() => navigate(`/session/${session.id}`)}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-center">
                {viewMode === 'upcoming' 
                  ? 'No upcoming sessions scheduled'
                  : 'No past sessions yet'}
              </p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
