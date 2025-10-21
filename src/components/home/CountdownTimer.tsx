import { memo, useState, useEffect } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer = () => {
    const targetDate = new Date("2026-03-28T09:00:00+05:30").getTime();

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-200/30 rounded-lg p-3 sm:p-4 md:p-5 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] shadow-sm">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 tabular-nums">
                {value.toString().padStart(2, "0")}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1 uppercase tracking-wide">
                {label}
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <TimeUnit value={timeLeft.days} label="Days" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">:</div>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">:</div>
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">:</div>
                <TimeUnit value={timeLeft.seconds} label="Sec" />
            </div>
        </div>
    );
};

CountdownTimer.displayName = "CountdownTimer";

export default memo(CountdownTimer);
