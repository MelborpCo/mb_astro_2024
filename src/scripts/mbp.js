import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

import { setHomeProjects, setHomeHero } from './mbp_home'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({ lerp: 0.5, smooth: true })

lenis.on('scroll', ({ scroll }) => {
    ScrollTrigger.update()
    if (scroll > 20) {
        document.querySelector('.mbp__nav nav').classList.add('str')
    } else {
        document.querySelector('.mbp__nav nav').classList.remove('str')
    }
})
// lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

/**
 * HOME
 */
setHomeProjects(gsap, ScrollTrigger, lenis)
setHomeHero(gsap, ScrollTrigger, lenis)

if (document.getElementById('mbp__header')) {
    const header = document.getElementById('mbp__header')
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
        const tlHero = gsap.timeline({
            ease: 'power2.out',
            delay: 0.3,
            repeat: 0,
            overwrite: 'auto',
            onStart: () => {},
            onComplete: () => {},
        })

        tlHero.fromTo(
            '.mbp__header',
            {
                backkgrounColor: 'var(--color-primary-a)',
                clipPath: 'inset(0 0 100% 0)',
                opacity: 0.2,
            },
            {
                backkgrounColor: 'var(--color-primary)',
                clipPath: 'inset(0 0 0% 0)',
                opacity: 1,
                duration: 0.2,
                ease: 'power2.inOut',
            },
        )
        tlHero.fromTo(
            '.mbp__header h1 span',
            {
                clipPath: 'inset(0 0 100% 0)',
                y: -20,
            },
            {
                clipPath: 'inset(0 0 0% 0)',
                y: 0,
                duration: 0.3,
                stagger: {
                    each: 0.2,
                },
                ease: 'power2.out',
            },
            '<',
        )
        // tlHero.fromTo(
        //     '.mbp__hero_marquee_images.rev img',
        //     {
        //         clipPath: 'inset(100% 0 0 0)',
        //         yPercent: 80,
        //     },
        //     {
        //         clipPath: 'inset(0% 0 0 0)',
        //         yPercent: 0,
        //         duration: 0.5,
        //         stagger: {
        //             each: -0.05,
        //         },
        //         ease: 'power2.inOut',
        //     },
        //     '<',
        // )
        // tlHero.fromTo(
        //     '.mbp__hero_marquee_images.norm img',
        //     {
        //         clipPath: 'inset(0 0 100% 0)',
        //         yPercent: -80,
        //     },
        //     {
        //         clipPath: 'inset(0 0 0% 0)',
        //         yPercent: 0,
        //         duration: 0.5,
        //         stagger: {
        //             each: -0.05,
        //         },
        //         ease: 'power2.inOut',
        //     },
        //     '<',
        // )
        // tlHero.fromTo(
        //     '.mbp__marquee_wrap img',
        //     {
        //         clipPath: 'inset(0 0 100% 0)',
        //         yPercent: '16rem',
        //     },
        //     {
        //         clipPath: 'inset(0 0 0% 0)',
        //         yPercent: 0,
        //         duration: 0.5,
        //         stagger: {
        //             each: 0.05,
        //         },
        //         ease: 'power2.inOut',
        //     },
        //     '-=1.5',
        // )
    })
}
