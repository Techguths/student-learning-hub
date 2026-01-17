export interface Student {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  tutorId: string;
  tutorName: string;
  tutorAvatar?: string;
  learningTrack: string;
  academyName: string;
  enrollmentDate: string;
}

export interface Session {
  id: string;
  date: string;
  time: string;
  tutorName: string;
  tutorAvatar?: string;
  type: 'Hifz' | 'Revision' | 'Recitation';
  status: 'Upcoming' | 'Completed' | 'Missed';
  notes?: string;
  duration: number; // in minutes
}

export interface ProgressStats {
  pagesMemorized: number;
  totalPages: number;
  surahsCompleted: number;
  totalSurahs: number;
  attendanceRate: number;
  currentStreak: number;
  totalSessions: number;
}

export interface ProgressEntry {
  id: string;
  date: string;
  pagesLearned: number;
  surahName?: string;
  type: 'Hifz' | 'Revision' | 'Recitation';
  tutorNotes?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'session' | 'progress' | 'announcement';
  read: boolean;
}
