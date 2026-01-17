import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Bell, 
  Globe, 
  LogOut,
  ChevronRight,
  Shield
} from 'lucide-react';

export default function SettingsScreen() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <MobileLayout showNav={false}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-card border-b border-border px-6 pt-12 pb-6 safe-top">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Notifications */}
          <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden animate-slide-up">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive session reminders</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </div>

          {/* Language */}
          <button
            className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border/50 flex items-center justify-between hover:bg-muted/50 transition-colors animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Language</p>
                <p className="text-sm text-muted-foreground">English</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Privacy */}
          <button
            className="w-full bg-card rounded-2xl p-4 shadow-soft border border-border/50 flex items-center justify-between hover:bg-muted/50 transition-colors animate-slide-up"
            style={{ animationDelay: '150ms' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Privacy Policy</p>
                <p className="text-sm text-muted-foreground">Read our terms</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Logout */}
          <div className="pt-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full h-12 rounded-xl border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* App Version */}
          <p className="text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
            Version 1.0.0
          </p>
        </div>
      </div>
    </MobileLayout>
  );
}
