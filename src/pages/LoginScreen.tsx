import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Eye, EyeOff, Loader2 } from 'lucide-react';
import { MobileLayout } from '@/components/layout/MobileLayout';

export default function LoginScreen() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      navigate('/dashboard', { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen flex flex-col">
        {/* Header with gradient */}
        <div className="gradient-hero islamic-pattern pt-16 pb-20 px-6">
          <div className="flex flex-col items-center animate-fade-in">
            <div className="flex items-center justify-center w-20 h-20 bg-card rounded-2xl shadow-elevated mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-primary-foreground mb-1">
              Welcome Back
            </h1>
            <p className="text-primary-foreground/70">
              Sign in to continue your learning
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex-1 bg-background -mt-8 rounded-t-3xl px-6 pt-8 pb-6 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email or Phone
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-muted border-0 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl bg-muted border-0 pr-12 focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-destructive/10 text-destructive text-sm animate-scale-in">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-xl text-base font-semibold gradient-primary hover:opacity-90 transition-opacity"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Sign In'
              )}
            </Button>

            <button
              type="button"
              className="w-full text-center text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
          </form>
        </div>
      </div>
    </MobileLayout>
  );
}
