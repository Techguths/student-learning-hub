import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { 
  User, 
  BookOpen, 
  GraduationCap, 
  Building2, 
  Calendar,
  Settings,
  ChevronRight
} from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { student } = useAuth();

  const enrollmentDate = student?.enrollmentDate 
    ? format(parseISO(student.enrollmentDate), 'MMMM d, yyyy')
    : 'N/A';

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header with Profile */}
        <div className="gradient-hero islamic-pattern pt-12 pb-20 px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-semibold text-primary-foreground">Profile</h1>
            <button
              onClick={() => navigate('/settings')}
              className="p-2 bg-primary-foreground/10 rounded-xl hover:bg-primary-foreground/20 transition-colors"
            >
              <Settings className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>

          <div className="flex flex-col items-center animate-fade-in">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center shadow-elevated">
                {student?.avatar ? (
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-primary" />
                )}
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-secondary-foreground text-sm">📷</span>
              </button>
            </div>
            <h2 className="text-xl font-bold text-primary-foreground">
              {student?.name || 'Student'}
            </h2>
            <p className="text-primary-foreground/70">{student?.email}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-background -mt-8 rounded-t-3xl px-6 pt-6 pb-6 space-y-6">
          {/* Info Cards */}
          <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden animate-slide-up">
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Assigned Tutor</p>
                <p className="font-medium text-foreground">{student?.tutorName}</p>
              </div>
            </div>

            <div className="h-px bg-border mx-4" />

            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Learning Track</p>
                <p className="font-medium text-foreground">{student?.learningTrack}</p>
              </div>
            </div>

            <div className="h-px bg-border mx-4" />

            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Academy</p>
                <p className="font-medium text-foreground">{student?.academyName}</p>
              </div>
            </div>

            <div className="h-px bg-border mx-4" />

            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Enrolled Since</p>
                <p className="font-medium text-foreground">{enrollmentDate}</p>
              </div>
            </div>
          </div>

          {/* Settings Link */}
          <button
            onClick={() => navigate('/settings')}
            className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border/50 flex items-center justify-between hover:bg-muted/50 transition-colors animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Settings className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-medium text-foreground">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
