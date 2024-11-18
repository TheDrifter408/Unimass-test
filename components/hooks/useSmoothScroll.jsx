import {useRef} from "react";
import {gsap} from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

export const useSmoothScroll = (isMobile) => {
    const el = useRef();
    const pathname = usePathname()
    const timeline = gsap.timeline();


    useGSAP(() => {
        let smoother;
        if (!ScrollTrigger.isTouch) {
            smoother = ScrollSmoother.create({
                smooth: !isMobile ? 2 : 0 ,
                effects:  !isMobile,
                smoothTouch: 0.1,
                ignoreMobileResize: true,
            });
        }

        ScrollTrigger.refresh();
        // Scroll to top when page changes
        window.scrollTo(0, 0);

        return () => {
            if (smoother) {
                smoother.revert();
            }else{
                ScrollTrigger.refresh();
            }
        };
    }, [isMobile,pathname]);

    return el;
};
