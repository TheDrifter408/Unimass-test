import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const splitLeft = () => {
  const pathName = usePathname();

  useEffect(() => {
    // Ensure gsap, SplitText, and ScrollTrigger are defined
    if (typeof window === "undefined" || !gsap || !SplitText || !ScrollTrigger) {
      console.warn("GSAP or its plugins are not available, or window is undefined.");
      return;
    }

    gsap.registerPlugin(SplitText, ScrollTrigger);

    if (window.innerWidth > 767) {
      // Ensure DOM is fully loaded and elements exist
      const splitItems = gsap.utils.toArray(".split-left");

      if (splitItems.length === 0) {
        console.warn("No elements with class '.split-left' found.");
        return;
      }

      splitItems.forEach((item) => {
        const originalHTML = item.innerHTML;
        const originalLetterSpacing = window.getComputedStyle(item).letterSpacing;

        try {
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
              toggleActions: 'play none none none',
            }
          });
        } catch (error) {
          console.error("Error while splitting text or creating animation:", error);
        }
      });

      // Refresh ScrollTrigger after setting up the animations
      ScrollTrigger.refresh();
    }

  }, [pathName]);
};

export const ParallaxXX = () => {
  const pathName = usePathname();

  useGSAP(() => {
    // Ensure gsap and ScrollTrigger are available
    if (typeof window === "undefined" || !gsap || !ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger is not available, or window is undefined.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Ensure DOM is fully loaded and elements exist
    const parallaxItems = gsap.utils.toArray(".parallax-x");

    if (parallaxItems.length === 0) {
      console.warn("No elements with class '.parallax-x' found.");
      return;
    }

    parallaxItems.forEach((item) => {
      const parallaxSize = item.getAttribute("data-size");

      try {
        gsap.to(item, {
          xPercent: parallaxSize || -40,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            scrub: true,
            // Uncomment markers for debugging ScrollTrigger positions
            // markers: true,
          },
        });
      } catch (error) {
        console.error("Error applying parallax animation:", error);
      }
    });

    // Refresh ScrollTrigger after setting up the animations
    ScrollTrigger.refresh();

  }, [pathName]);
};
export const ParallaxX = () => {
  const pathName = usePathname();
  useGSAP(() => {
    gsap.utils.toArray(".parallax-xx").forEach((item, i) => {
      let parallaxSize = item.getAttribute("data-size");
      gsap.to(item, {
        xPercent: parallaxSize || -20,
        duration:1,
        ease: "none",
        scrollTrigger: {
          // start: "clump(bottom 0)",
          trigger: item,
          // markers: true,
          scrub: true,
        },
      });
    });
    // return () => {
    //     ScrollTrigger.getAll().forEach(trigger => {
    //         trigger.kill(); // Remove all ScrollTriggers
    //     });
    // };
  }, [pathName]);
};

export const ParallaxXR = () => {
  const pathName = usePathname();
  useGSAP(() => {
    gsap.utils.toArray(".parallax-xr").forEach((item, i) => {
      let parallaxSize = item.getAttribute("data-size");
      gsap.to(item, {
        xPercent: parallaxSize || 30,
        ease: "none",
        scrollTrigger: {
          // start: "clump(bottom 0)",
          trigger: item,
          // markers: true,
          scrub: true,
        },
      });
    });
    // return () => {
    //     ScrollTrigger.getAll().forEach(trigger => {
    //         trigger.kill(); // Remove all ScrollTriggers
    //     });
    // };
  }, [pathName]);
};

export const FadeUp = () => {
  const pathName = usePathname();
  useGSAP(() => {
    gsap.utils.toArray(".fade-up").forEach((item, i) => {
      gsap.from(item, {
        y: "50px",
        ease: "power4.out",
        duration: 1,
        delay: 0.01,
        scrollTrigger: {
          // start: "clump(bottom 0)",
          trigger: item,
          toggleActions: "restart none none reset",
        },
      });
    });
    return () => {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill(); // Remove all ScrollTriggers
        });
    };
  }, [pathName]);
};

export const SplitUp = (data) => {
  const pathName = usePathname();
  gsap.registerPlugin(SplitText, ScrollTrigger);
  useGSAP(() => {
    // Check if the screen width is greater than 767px
    if (window.innerWidth > 767) {
      gsap.utils.toArray('.split-up').forEach((item) => {
        const originalHTML = item.innerHTML;
        const originalLetterSpacing = window.getComputedStyle(item).letterSpacing;

        // Split the text into lines
        const parentSplit = new SplitText(item, {
          linesClass: "split-parent",
        });

        // Split the text into lines and characters
        const childSplit = new SplitText(item, {
          type: "lines, chars",
          linesClass: "split-child",
        });

        // Fix letter-spacing to prevent layout shifting
        childSplit.chars.forEach((char) => {
          char.style.letterSpacing = originalLetterSpacing;
          char.style.whiteSpace = 'nowrap'; // Prevent unintended line breaks
        });

        // GSAP animation
        gsap.from(parentSplit.lines, {
          duration: 1,
          yPercent: 100,
          scrollTrigger: {
            trigger: item,
            toggleActions: 'play none none none',
          }
        });
      });
    }
  }, [pathName]);

};
