import { Student, Session, ProgressStats, ProgressEntry, Notification } from '@/types/student';

export const mockStudent: Student = {
  id: '1',
  name: 'Ahmad Ibrahim',
  email: 'ahmad@example.com',
  avatar: undefined,
  tutorId: 't1',
  tutorName: 'Ustaz Muhammad',
  tutorAvatar: undefined,
  learningTrack: 'Hifz Program',
  academyName: 'Al-Noor Academy',
  enrollmentDate: '2024-01-15',
};

export const mockSessions: Session[] = [
  {
    id: '1',
    date: '2025-01-17',
    time: '09:00 AM',
    tutorName: 'Ustaz Muhammad',
    type: 'Hifz',
    status: 'Upcoming',
    duration: 60,
  },
  {
    id: '2',
    date: '2025-01-18',
    time: '09:00 AM',
    tutorName: 'Ustaz Muhammad',
    type: 'Revision',
    status: 'Upcoming',
    duration: 45,
  },
  {
    id: '3',
    date: '2025-01-16',
    time: '09:00 AM',
    tutorName: 'Ustaz Muhammad',
    type: 'Hifz',
    status: 'Completed',
    notes: 'Excellent progress on Surah Al-Mulk. Memorized verses 1-10 with proper tajweed.',
    duration: 60,
  },
  {
    id: '4',
    date: '2025-01-15',
    time: '09:00 AM',
    tutorName: 'Ustaz Muhammad',
    type: 'Recitation',
    status: 'Completed',
    notes: 'Reviewed Surah Ar-Rahman. Focus on makhraj improvements needed.',
    duration: 45,
  },
  {
    id: '5',
    date: '2025-01-14',
    time: '09:00 AM',
    tutorName: 'Ustaz Muhammad',
    type: 'Revision',
    status: 'Missed',
    duration: 60,
  },
];

export const mockProgress: ProgressStats = {
  pagesMemorized: 47,
  totalPages: 604,
  surahsCompleted: 8,
  totalSurahs: 114,
  attendanceRate: 92,
  currentStreak: 12,
  totalSessions: 45,
};

export const mockProgressHistory: ProgressEntry[] = [
  {
    id: '1',
    date: '2025-01-16',
    pagesLearned: 2,
    surahName: 'Al-Mulk',
    type: 'Hifz',
    tutorNotes: 'Great memorization of verses 1-10',
  },
  {
    id: '2',
    date: '2025-01-15',
    pagesLearned: 1,
    surahName: 'Ar-Rahman',
    type: 'Recitation',
    tutorNotes: 'Focus on tajweed rules',
  },
  {
    id: '3',
    date: '2025-01-13',
    pagesLearned: 2,
    surahName: 'Al-Mulk',
    type: 'Revision',
  },
  {
    id: '4',
    date: '2025-01-12',
    pagesLearned: 3,
    surahName: 'Ar-Rahman',
    type: 'Hifz',
    tutorNotes: 'Completed Surah Ar-Rahman',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Session Reminder',
    message: 'Your Hifz session with Ustaz Muhammad starts in 1 hour',
    timestamp: '2025-01-17T08:00:00',
    type: 'session',
    read: false,
  },
  {
    id: '2',
    title: 'Milestone Achieved!',
    message: 'Congratulations! You have completed Surah Ar-Rahman',
    timestamp: '2025-01-16T10:00:00',
    type: 'progress',
    read: true,
  },
  {
    id: '3',
    title: 'Academy Announcement',
    message: 'New revision schedule available for next week',
    timestamp: '2025-01-15T14:00:00',
    type: 'announcement',
    read: true,
  },
];
