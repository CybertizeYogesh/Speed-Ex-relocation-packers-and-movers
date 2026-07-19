'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for GSAP and DOM elements to be ready
    const timer = setTimeout(() => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const SplitText = window.SplitText;
      const Swiper = window.Swiper;

      const revealContainers = document.querySelectorAll(".reveal");
      const textStyle1 = document.querySelectorAll(".text-anime-style-1");
      const textStyle2 = document.querySelectorAll(".text-anime-style-2");
      const textStyle3 = document.querySelectorAll(".text-anime-style-3");

      // 1. Re-initialize Swiper Sliders
      if (Swiper) {
        try {
          const testimonialSliderEl = document.querySelector(".testimonial-slider .swiper");
          if (testimonialSliderEl) {
            if (testimonialSliderEl.swiper) {
              try { testimonialSliderEl.swiper.destroy(true, true); } catch(e) {}
            }
            new Swiper('.testimonial-slider .swiper', {
              slidesPerView: 1,
              speed: 1000,
              spaceBetween: 30,
              loop: true,
              autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.testimonial-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.testimonial-btn-next',
                prevEl: '.testimonial-btn-prev',
              },
              breakpoints: {
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 2,
                }
              }
            });
          }

          const heroSliderEl = document.querySelector(".hero-slider-layout .swiper");
          if (heroSliderEl) {
            if (heroSliderEl.swiper) {
              try { heroSliderEl.swiper.destroy(true, true); } catch(e) {}
            }
            new Swiper('.hero-slider-layout .swiper', {
              effect: 'fade',
              slidesPerView: 1,
              speed: 1000,
              spaceBetween: 0,
              loop: true,
              autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
              pagination: {
                el: '.hero-pagination',
                clickable: true,
              },
            });
          }
        } catch (e) {
          console.error("Swiper init error:", e);
        }
      }

      // Fallback: If GSAP or plugins are not loaded, show everything immediately
      if (!gsap || !ScrollTrigger) {
        revealContainers.forEach((container) => {
          container.style.visibility = "visible";
          container.style.opacity = "1";
        });
        const wowElements = document.querySelectorAll(".wow");
        wowElements.forEach((el) => {
          el.style.visibility = "visible";
          el.style.opacity = "1";
        });
        [textStyle1, textStyle2, textStyle3].forEach((list) => {
          list.forEach((el) => {
            el.style.opacity = "1";
            el.style.visibility = "visible";
          });
        });
        return;
      }

      try {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Kill any existing ScrollTrigger instances to prevent duplicate bindings/mem leaks
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // 2. Re-initialize Reveal Image Animations
        revealContainers.forEach((container) => {
          const image = container.querySelector("img");
          if (!image) return;

          gsap.set(container, { clearProps: "all" });
          gsap.set(image, { clearProps: "all" });
          gsap.set(container, { autoAlpha: 1 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          });

          tl.from(container, {
            duration: 1,
            xPercent: -100,
            ease: "power2.out"
          });

          tl.from(image, {
            duration: 1,
            xPercent: 100,
            scale: 1,
            delay: -1,
            ease: "power2.out"
          });
        });

        // Helper to strip stale split spans before new SplitText
        const sanitizeElementText = (element) => {
          gsap.set(element, { clearProps: "all" });
          if (element.split) {
            try { element.split.revert(); } catch(e) {}
          }
          if (element.querySelector('.split-line') || element.querySelector('div') || element.querySelector('span')) {
            element.innerHTML = element.textContent;
          }
        };

        // 3. Re-initialize Text Style 1
        textStyle1.forEach((element) => {
          sanitizeElementText(element);
          if (SplitText) {
            try {
              const split = new SplitText(element, { type: "chars, words" });
              element.split = split;
              gsap.from(split.words, {
                duration: 1,
                delay: 0.5,
                x: 20,
                autoAlpha: 0,
                stagger: 0.05,
                scrollTrigger: { trigger: element, start: "top 85%" },
              });
            } catch (err) {
              element.style.opacity = "1";
              element.style.visibility = "visible";
            }
          } else {
            element.style.opacity = "1";
            element.style.visibility = "visible";
          }
        });

        // 4. Re-initialize Text Style 2
        textStyle2.forEach((element) => {
          sanitizeElementText(element);
          if (SplitText) {
            try {
              const split = new SplitText(element, { type: "chars, words" });
              element.split = split;
              gsap.from(split.chars, {
                duration: 1,
                delay: 0.1,
                x: 20,
                autoAlpha: 0,
                stagger: 0.03,
                ease: "power2.out",
                scrollTrigger: { trigger: element, start: "top 85%" },
              });
            } catch (err) {
              element.style.opacity = "1";
              element.style.visibility = "visible";
            }
          } else {
            element.style.opacity = "1";
            element.style.visibility = "visible";
          }
        });

        // 5. Re-initialize Text Style 3
        textStyle3.forEach((element) => {
          sanitizeElementText(element);
          if (SplitText) {
            try {
              const split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
              });
              element.split = split;
              
              gsap.set(element, { perspective: 400 });
              gsap.set(split.chars, {
                opacity: 0,
                x: "50",
              });

              gsap.to(split.chars, {
                scrollTrigger: { trigger: element, start: "top 90%" },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: "back.out",
                stagger: 0.02,
              });
            } catch (err) {
              element.style.opacity = "1";
              element.style.visibility = "visible";
            }
          } else {
            element.style.opacity = "1";
            element.style.visibility = "visible";
          }
        });

        // 6. Re-initialize WOW.js
        if (window.WOW) {
          new window.WOW().init();
        }

        // Refresh calculations
        ScrollTrigger.refresh();

        // 7. Robust Fallback: Force visibility of all elements after 1 second if they are still hidden
        setTimeout(() => {
          try {
            revealContainers.forEach((container) => {
              if (gsap.getProperty(container, "opacity") === 0 || container.style.visibility === "hidden") {
                gsap.to(container, { autoAlpha: 1, duration: 0.4 });
              }
            });
            [textStyle1, textStyle2, textStyle3].forEach((list) => {
              list.forEach((element) => {
                if (element.split && element.split.chars) {
                  const firstChar = element.split.chars[0];
                  if (firstChar && gsap.getProperty(firstChar, "opacity") === 0) {
                    gsap.to(element.split.chars, {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      rotateX: 0,
                      duration: 0.4,
                      stagger: 0.01,
                      overwrite: "auto"
                    });
                  }
                }
                element.style.opacity = "1";
                element.style.visibility = "visible";
              });
            });
          } catch (e) {
            console.error("ScrollRevealInit timeout fallback error:", e);
          }
        }, 1000);

      } catch (err) {
        console.error("ScrollRevealInit error:", err);
        revealContainers.forEach((container) => {
          container.style.visibility = "visible";
          container.style.opacity = "1";
        });
        [textStyle1, textStyle2, textStyle3].forEach((list) => {
          list.forEach((el) => {
            el.style.opacity = "1";
            el.style.visibility = "visible";
          });
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
