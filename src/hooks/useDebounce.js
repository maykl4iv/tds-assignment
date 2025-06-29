import { useRef, useEffect } from "react";

export function useDebounce(callback, delay) {
    const timeoutRef = useRef();

    function debouncedFunction(...args) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return debouncedFunction;
}
