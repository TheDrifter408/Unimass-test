'use client'
import StyledComponentsRegistry from "@/lib/registry";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import GlobalStyle from "@/styles/globalStyle";
import ErrorBoundary from "@/components/meta/ErrorBoundary";
import SEO from "@/components/meta/SEO";
import {usePathname} from "next/navigation";
import useDeviceType from "@/components/hooks/useDeviceType";
import {useSmoothScroll} from "@/components/hooks/useSmoothScroll";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import {FadeUp, ParallaxX, ParallaxXR, ParallaxXX, splitLeft, SplitUp} from "@/components/animation/TextAnimations";



// import css
import "./global.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);


export default function RootLayout({children}) {
    const pathName = usePathname();

    // is mobile hook - components/hooks/useDeviceType
    const isMobile = useDeviceType();

    // use SmoothScroll Features - components/hooks/useSmoothScroll
    const el = useSmoothScroll(isMobile);

    // Animation all Initialize
    splitLeft();
    ParallaxX();
    ParallaxXR();
    FadeUp();
    SplitUp();
    ParallaxXX()

    return (
        <html lang="en">
        <SEO
            title="Unimass Property Solutions"
            description="Unimass Property Solutions desc."
            keywords="Unimass, Property, Properties , Bangladesh , Unimass Property"
            author="Unimass Property Solutions"
            url={`https://localhost:3000${pathName}`}
            image="/images/static/logo.svg"
            twitterHandle=""
            facebookVerification=""
            googleVerification=""
            canonical={`https://localhost:3000${pathName}`}
        />
        <body>
        <StyledComponentsRegistry>
            <ErrorBoundary>
                <GlobalStyle/>
                <ToastContainer/>
                <MyHeader />
                <div ref={el} id="smooth-wrapper" style={{opacity: 1}}>
                    <div id="smooth-content">
                        {children}
                        <MyFooter />
                    </div>
                </div>
            </ErrorBoundary>
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}
