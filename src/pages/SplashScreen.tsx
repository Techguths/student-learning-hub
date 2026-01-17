import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { BookOpen } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const redirectTimer = setTimeout(() => {
        if (isAuthenticated) {
          navigate('/dashboard', { replace: true });
        } else {
          navigate('/login', { replace: true });
        }
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className="min-h-screen gradient-hero islamic-pattern flex flex-col items-center justify-center p-6">
      <div className={`flex flex-col items-center transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Logo */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-secondary/30 rounded-3xl blur-xl animate-pulse" />
          <div className="relative flex items-center justify-center w-24 h-24 bg-card rounded-3xl shadow-elevated">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-bold text-primary-foreground mb-2">
          Qur'an Academy
        </h1>
        <p className="text-primary-foreground/70 text-center mb-8 font-arabic text-lg">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Loading indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
}
