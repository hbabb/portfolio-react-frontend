import { useMediaQuery } from 'react-responsive';

/**
 * useBreakpoint
 *
 * Hook to determine the current breakpoint. It detects mobile, tablet and desktop
 * devices and returns an object with boolean properties:
 *
 *  - isMobile: true if the device is a mobile phone
 *  - isTablet: true if the device is a tablet
 *  - isDesktop: true if the device is a desktop computer
 *
 * @return {{isMobile: boolean, isTablet: boolean, isDesktop: boolean}}
 */
const useBreakpoint = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // mobile
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' }); // tablet
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' }); // desktop

    return { isMobile, isTablet, isDesktop };
};


export default useBreakpoint;