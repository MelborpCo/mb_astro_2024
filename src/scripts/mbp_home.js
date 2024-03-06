export function setHomeHero(gsap, ScrollTrigger, lenis) {
    if (document.getElementById('mbp__hero')) {
        const mm = gsap.matchMedia()
        mm.add('(min-width: 768px)', () => {
            const tlHero = gsap.timeline({
                ease: 'power2.out',
                delay: 0.3,
                repeat: 0,
                overwrite: 'auto',
                onStart: () => {},
                onComplete: () => {
                    const mbp__hero_marquee_images = gsap.utils.toArray('.mbp__hero_marquee_images')
                    mbp__hero_marquee_images.forEach((item) => {
                        item.classList.add('ready')
                    })
                },
            })
            tlHero.fromTo(
                '#mbp__hero',
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.inOut',
                },
            )
            tlHero.fromTo(
                '.mbp__hero',
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
                '-=0.2',
            )
            tlHero.fromTo(
                '.mbp__hero .anim',
                {
                    clipPath: 'inset(0 0 100% 0)',
                    y: -20,
                },
                {
                    clipPath: 'inset(0 0 0% 0)',
                    y: 0,
                    duration: 0.5,
                    stagger: {
                        each: 0.2,
                        from: 'center',
                    },
                    ease: 'power2.inOut',
                },
                '<',
            )
            tlHero.fromTo(
                '.mbp__hero_marquee_images.rev img',
                {
                    clipPath: 'inset(100% 0 0 0)',
                    yPercent: 80,
                },
                {
                    clipPath: 'inset(0% 0 0 0)',
                    yPercent: 0,
                    duration: 0.5,
                    stagger: {
                        each: -0.05,
                    },
                    ease: 'power2.inOut',
                },
                '<',
            )
            tlHero.fromTo(
                '.mbp__hero_marquee_images.norm img',
                {
                    clipPath: 'inset(0 0 100% 0)',
                    yPercent: -80,
                },
                {
                    clipPath: 'inset(0 0 0% 0)',
                    yPercent: 0,
                    duration: 0.5,
                    stagger: {
                        each: -0.05,
                    },
                    ease: 'power2.inOut',
                },
                '<',
            )
            tlHero.fromTo(
                '.mbp__marquee_wrap img',
                {
                    clipPath: 'inset(0 0 100% 0)',
                    yPercent: '16rem',
                },
                {
                    clipPath: 'inset(0 0 0% 0)',
                    yPercent: 0,
                    duration: 0.5,
                    stagger: {
                        each: 0.05,
                    },
                    ease: 'power2.inOut',
                },
                '-=1.5',
            )
        })
    }
}
export function setHomeProjects(gsap, ScrollTrigger, lenis) {
    if (document.getElementById('mbp__projects')) {
        const mm = gsap.matchMedia()
        const projectsItems = gsap.utils.toArray('.proyecto_tipo')
        projectsItems.forEach((item) => {
            const slug = item.dataset.slug

            mm.add('(min-width: 768px)', () => {
                const tlImages = gsap.timeline({
                    paused: true,
                    ease: 'power2.out',
                    delay: 0.3,
                    repeat: 0,
                    overwrite: 'auto',
                    onStart: () => {
                        // console.log('start ->' + slug)
                    },
                    onComplete: () => {
                        // console.log('complete ->' + slug)
                    },
                })

                tlImages.fromTo(
                    '#proyecto_' + slug + ' .proyecto_title div div',
                    {
                        autoAlpha: 0.5,
                        x: 0,
                    },
                    {
                        x: 50,
                        autoAlpha: 0,
                        duration: 0.2,
                        ease: 'power2.inOut',
                        stagger: {
                            each: 0.2,
                        },
                    },
                )
                tlImages.fromTo(
                    '#proyecto_' + slug + ' .proyecto_arrow',
                    {
                        autoAlpha: 0.8,
                        x: '-30vw',
                        y: '60vh',
                        scale: 0.2,
                    },
                    {
                        scale: 0.6,
                        x: '30vw',
                        y: '-60vh',
                        autoAlpha: 0,
                        duration: 1,
                        ease: 'power2.inOut',
                    },
                    '<',
                )
                tlImages.fromTo(
                    '#proyecto_' + slug + ' .proyecto_media',
                    {
                        x: -20,
                        autoAlpha: 0,
                    },
                    {
                        x: 0,
                        autoAlpha: 1,
                        duration: 0.4,
                        stagger: {
                            each: 0.1,
                        },
                        ease: 'power4.inOut',
                    },
                    '-=0.3',
                )
                tlImages.fromTo(
                    '#proyecto_' + slug + ' .proyecto_data_int',
                    {
                        y: -10,
                        autoAlpha: 0,
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.5,
                        ease: 'power4.out',
                    },
                    '<',
                )

                const over = document.querySelector('#proyecto_' + slug + ' .proyecto_over img')
                const tlHover = gsap.timeline({
                    paused: true,
                    ease: 'power4.out',
                    overwrite: 'auto',
                    onStart: () => {},
                    onComplete: () => {},
                })

                tlHover.fromTo(
                    '#proyecto_' + slug + ' .proyecto_data .to_hide',
                    {
                        x: 0,
                        y: 0,
                    },
                    {
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 0.4,
                        stagger: {
                            each: 0.1,
                        },
                    },
                    '+=0',
                )

                tlHover.to(
                    '#proyecto_' + slug,
                    {
                        color: 'var(--color-primary)',
                        duration: 0.3,
                        ease: 'power4.out',
                    },
                    '<',
                )
                tlHover.fromTo(
                    '#proyecto_' + slug + ' .proyecto_over',
                    {
                        clipPath: 'inset(0% 100% 0% 0%)',
                    },
                    {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        opacity: 1,
                        duration: 1,
                        ease: 'power4.inOut',
                    },
                    '<',
                )

                tlHover.fromTo(
                    '#proyecto_' + slug + ' .proyecto_media',
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0.4,
                        yPercent: 5,
                        duration: 1,
                        ease: 'power4.out',
                        stagger: {
                            each: 0.1,
                            from: 'center',
                        },
                    },
                    '-=0.8',
                )

                tlHover.to(
                    '#proyecto_' + slug + ' .proyecto_title div div',
                    {
                        x: '3rem',
                        autoAlpha: 1,
                        stagger: {
                            each: 0.2,
                        },
                        duration: 0.6,
                    },
                    '-=1',
                )
                tlHover.fromTo(
                    '#proyecto_' + slug + ' .proyecto_title_int_nom span',
                    {
                        x: 10,
                        clipPath: 'inset(0% 100% 0% 0%)',
                    },
                    {
                        x: 0,
                        clipPath: 'inset(0% 0% 0% 0%)',
                        stagger: {
                            each: 0.1,
                        },
                        duration: 0.6,
                    },
                    '-=1.3',
                )

                const hover = document.querySelectorAll('#proyecto_' + slug + ' .pr_hover')
                hover.forEach((item) => {
                    item.addEventListener('mouseenter', () => {
                        if (tlImages !== null) {
                            tlImages.kill()
                        }
                        over.classList.add('init')
                        // lenis.scrollTo('#proyecto_' + slug, {
                        //     offset: -80,
                        // })
                        tlHover.play()
                    })
                    item.addEventListener('mouseleave', () => {
                        if (tlImages !== null) {
                            tlImages.kill()
                        }
                        tlHover.pause().timeScale(2).reverse()
                        setTimeout(() => {
                            over.classList.remove('init')
                        }, 1000)
                    })
                })

                const scroll = ScrollTrigger.create({
                    animation: tlImages,
                    trigger: item,
                    start: '-10% bottom',
                    end: '10% center',
                    scrub: false,
                    once: true,
                    // markers: true,
                    toggleClass: 'active',
                    // toggleActions: 'play play play play',
                    onUpdate: ({ progress }) => {},
                    onComplete: () => {
                        if (tlImages !== null) {
                            tlImages.kill()
                        }
                    },
                })
            })
        })
    }
}
