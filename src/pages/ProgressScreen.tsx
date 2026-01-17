import { MobileLayout } from '@/components/layout/MobileLayout';
import { mockProgress, mockProgressHistory } from '@/data/mockData';
import { BookOpen, Award, Calendar, Flame, TrendingUp, FileText } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { SessionTypeBadge } from '@/components/ui/SessionTypeBadge';

export default function ProgressScreen() {
  const progressPercent = Math.round((mockProgress.pagesMemorized / mockProgress.totalPages) * 100);
  const surahPercent = Math.round((mockProgress.surahsCompleted / mockProgress.totalSurahs) * 100);

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-6 pt-12 pb-6 safe-top">
          <h1 className="text-2xl font-bold text-foreground">Progress</h1>
          <p className="text-muted-foreground mt-1">Track your Qur'an learning journey</p>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Streak Card */}
          <div className="gradient-primary rounded-2xl p-5 shadow-elevated animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/70 text-sm mb-1">Current Streak</p>
                <p className="text-4xl font-bold text-primary-foreground">
                  {mockProgress.currentStreak}
                  <span className="text-lg ml-1">days</span>
                </p>
              </div>
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                <Flame className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Pages</span>
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">
                {mockProgress.pagesMemorized}
                <span className="text-sm text-muted-foreground font-normal">/{mockProgress.totalPages}</span>
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Surahs</span>
              </div>
              <p className="text-2xl font-bold text-foreground mb-2">
                {mockProgress.surahsCompleted}
                <span className="text-sm text-muted-foreground font-normal">/{mockProgress.totalSurahs}</span>
              </p>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${surahPercent}%` }}
                />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-success" />
                </div>
                <span className="text-sm text-muted-foreground">Attendance</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {mockProgress.attendanceRate}%
              </p>
            </div>

            <div className="bg-card rounded-2xl p-4 shadow-soft border border-border/50 animate-slide-up" style={{ animationDelay: '250ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Sessions</span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {mockProgress.totalSessions}
              </p>
            </div>
          </div>

          {/* History */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent History</h2>
            <div className="space-y-3">
              {mockProgressHistory.map((entry, index) => (
                <div 
                  key={entry.id}
                  className="bg-card rounded-xl p-4 shadow-soft border border-border/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <SessionTypeBadge type={entry.type} />
                        <span className="text-xs text-muted-foreground">
                          {format(parseISO(entry.date), 'MMM d, yyyy')}
                        </span>
                      </div>
                      {entry.surahName && (
                        <p className="font-medium text-foreground mb-1">
                          Surah {entry.surahName}
                        </p>
                      )}
                      {entry.tutorNotes && (
                        <p className="text-sm text-muted-foreground flex items-start gap-1.5">
                          <FileText className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                          {entry.tutorNotes}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <span className="text-sm font-semibold text-primary">+{entry.pagesLearned}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
