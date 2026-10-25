import { useEffect, useState } from 'react';
import { Wifi, WifiOff, ServerCrash } from 'lucide-react';

const BACKEND_URL =
    'https://my-portfolio-backend-2026.onrender.com/';

export default function ApiHealth() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        let timer;
        let hideTimer;
        let active = true;

        const checkConnection = async () => {
            if (!navigator.onLine) {
                setMessage('offline');
                return;
            }

            const controller = new AbortController();
            timer = setTimeout(() => controller.abort(),6000);

            try {
                const response = await fetch(BACKEND_URL, {
                    cache: 'no-store',
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Backend unavailable');
                }

                const data = await response.json();

                if (data.status !== true) {
                    throw new Error('Backend unavailable');
                }

                if (active) {
                    setMessage((previous) => {
                        if (previous === 'offline' ||
                            previous === 'server-error') {
                            clearTimeout(hideTimer);
                            hideTimer = setTimeout(() => {
                                if (active) setMessage(null);
                            }, 6000);

                            return 'restored';
                        }

                        return previous === 'restored'
                            ? previous
                            : null;
                    });
                }
            } catch {
                if (active) {
                    setMessage(
                        navigator.onLine ? 'server-error' : 'offline'
                    );
                }
            } finally {
                clearTimeout(timer);
            }
        };

        const handleOnline = () => checkConnection();
        const handleOffline = () => setMessage('offline');

        checkConnection();

        const interval = setInterval(checkConnection, 30000);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            active = false;
            clearInterval(interval);
            clearTimeout(timer);
            clearTimeout(hideTimer);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (!message) return null;

    const isOffline = message === 'offline';
    const isRestored = message === 'restored';

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed left-0 top-0 z-[9999] flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white shadow-lg ${isRestored
                    ? 'bg-green-700'
                    : 'bg-red-700'
                }`}
        >
            {isOffline ? (
                <WifiOff size={18} />
            ) : isRestored ? (
                <Wifi size={18} />
            ) : (
                <ServerCrash size={18} />
            )}

            <span>
                {isOffline
                    ? 'You are offline. Check your internet connection.'
                    : isRestored
                        ? "You're back online!"
                        : 'Unable to reach the server. Please try again.'}
            </span>
        </div>
    );
}
