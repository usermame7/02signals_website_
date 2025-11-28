import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useLocation } from "wouter";

export default function JoinPage() {
  const [countdown, setCountdown] = useState(3);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Track the redirect page visit with Google Analytics (NO Lead event here)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Join Redirect',
        page_location: window.location.href
      });
    }

    // NO Lead event on this redirect page - Lead fires on /thank-you only

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLocation('/thank-you');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setLocation]);

  const handleDirectRedirect = () => {
    setLocation('/thank-you');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden flex items-center justify-center p-4">
      {/* Enhanced Background System */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <div className="backdrop-blend-v1 backdrop-morph absolute inset-0" />
        <div className="backdrop-dots-v1 dots-drift absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vpfx-bg/15 to-vpfx-bg/35" />
      </div>
      <div className="max-w-md w-full surface-panel-v2 rounded-2xl p-8 text-center relative z-10">
        <div className="mb-6">
          <Loader2 className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2" data-testid="text-redirect-title">
            Welcome to VictoryPipsFX
          </h1>
          <p className="text-gray-300" data-testid="text-redirect-description">
            Preparing your access to our community...
          </p>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-cyan-400 mb-2" data-testid="text-countdown">
            {countdown}
          </div>
          <p className="text-sm text-gray-400">
            Please wait {countdown} seconds
          </p>
        </div>

        <Button 
          onClick={handleDirectRedirect}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          data-testid="button-manual-redirect"
        >
          Continue Now
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          Click the button to skip the wait
        </p>
      </div>
    </div>
  );
}