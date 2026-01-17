import { ProgressStats } from '@/types/student';
import { BookOpen, Award, Calendar, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressSummaryCardProps {
  stats: ProgressStats;
  onClick?: () => void;
  className?: string;
}

export function ProgressSummaryCard({ stats, onClick, className }: ProgressSummaryCardProps) {
  const progressPercent = Math.round((stats.pagesMemorized / stats.totalPages) * 100);

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left gradient-primary rounded-2xl p-5 shadow-elevated',
        'transition-all duration-200 hover:scale-[1.02]',
        'focus:outline-none focus:ring-2 focus:ring-primary/30',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary-foreground">Your Progress</h3>
        <div className="flex items-center gap-1.5 bg-secondary/20 px-2.5 py-1 rounded-full">
          <Flame className="w-4 h-4 text-secondary" />
          <span className="text-sm font-semibold text-secondary">{stats.currentStreak} days</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-primary-foreground/80 mb-2">
          <span>Overall Progress</span>
          <span className="font-semibold">{progressPercent}%</span>
        </div>
        <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center p-2 rounded-xl bg-primary-foreground/10">
          <BookOpen className="w-5 h-5 text-secondary mb-1" />
          <span className="text-lg font-bold text-primary-foreground">{stats.pagesMemorized}</span>
          <span className="text-xs text-primary-foreground/70">Pages</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-primary-foreground/10">
          <Award className="w-5 h-5 text-secondary mb-1" />
          <span className="text-lg font-bold text-primary-foreground">{stats.surahsCompleted}</span>
          <span className="text-xs text-primary-foreground/70">Surahs</span>
        </div>
        <div className="flex flex-col items-center p-2 rounded-xl bg-primary-foreground/10">
          <Calendar className="w-5 h-5 text-secondary mb-1" />
          <span className="text-lg font-bold text-primary-foreground">{stats.attendanceRate}%</span>
          <span className="text-xs text-primary-foreground/70">Attendance</span>
        </div>
      </div>
    </button>
  );
}
