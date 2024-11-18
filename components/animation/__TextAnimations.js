import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const splitLeft = () => {
  const pathName = usePathname();

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (window.innerWidth > 767) {
      const splitElements = gsap.utils.toArray(".split-left");

      splitElements.forEach((item) => {
        const parentSplit = new SplitText(item, {
          linesClass: "split-parent",
        });

        const childSplit = new SplitText(item, {
          type: "lines, chars",
          linesClass: "split-child",
        });

        gsap.from(parentSplit.lines, {
          duration: 1,
          yPercent: 100,
          scrollTrigger: {
            trigger: item,
            toggleActions: 'restart none none reset',
          }
        });
      });

      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};

export const ParallaxXX = () => {
  const pathName = usePathname();

  useGSAP(() => {
    const elements = gsap.utils.toArray(".parallax-x");

    elements.forEach((item) => {
      const parallaxSize = item.getAttribute("data-size");
      gsap.to(item, {
        xPercent: parallaxSize || -40,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};

export const ParallaxX = () => {
  const pathName = usePathname();

  useGSAP(() => {
    const elements = gsap.utils.toArray(".parallax-xx");

    elements.forEach((item) => {
      const parallaxSize = item.getAttribute("data-size");
      gsap.to(item, {
        xPercent: parallaxSize || -20,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};

export const ParallaxXR = () => {
  const pathName = usePathname();

  useGSAP(() => {
    const elements = gsap.utils.toArray(".parallax-xr");

    elements.forEach((item) => {
      const parallaxSize = item.getAttribute("data-size");
      gsap.to(item, {
        xPercent: parallaxSize || 30,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};

export const FadeUp = () => {
  const pathName = usePathname();

  useGSAP(() => {
    const elements = gsap.utils.toArray(".fade-up");

    elements.forEach((item) => {
      gsap.from(item, {
        y: "50px",
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: item,
          toggleActions: "restart none none reset",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};

export const SplitUp = (data) => {
  const pathName = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (window.innerWidth > 767) {
      const elements = gsap.utils.toArray(".split-up");

      elements.forEach((item) => {
        const parentSplit = new SplitText(item, {
          linesClass: "split-parent",
        });

        const childSplit = new SplitText(item, {
          type: "lines, chars",
          linesClass: "split-child",
        });

        gsap.from(parentSplit.lines, {
          duration: 1,
          yPercent: 100,
          scrollTrigger: {
            trigger: item,
            toggleActions: 'restart none none reset',
          }
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathName]);
};
