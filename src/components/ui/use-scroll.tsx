import * as React from "react";

export function useScroll(threshold: number = 10): boolean {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > threshold;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial scroll position

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return scrolled;
}
