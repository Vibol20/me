        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
        
        // Custom Cursor
        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.cursor-dot');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });
        
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
        
        // Scroll Reveal Animations
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 100;
                
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
        
        // Skill Bar Animations
        const skillBars = document.querySelectorAll('.skill-progress');
        let animated = false;
        
        const animateSkills = () => {
            const skillSection = document.getElementById('skills');
            const skillSectionTop = skillSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (skillSectionTop < windowHeight - 100 && !animated) {
                animated = true;
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        };
        
        window.addEventListener('scroll', animateSkills);
        
        // Form Submission
        const contactForm = document.querySelector('#contact form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! I\'ll get back to you soon.');
            contactForm.reset();
        });