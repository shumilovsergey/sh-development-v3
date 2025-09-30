// Language detection and translation system
const translations = {
    ru: {
        name: "Шумилов Сергей",
        jobTitle: "Системный администратор / DevOps",
        aboutText1: "Я придерживаюсь принципа осознанного выбора технологий. Каждое решение должно быть обоснованным, прозрачным и соответствующим задаче. Без избыточной сложности, но не в ущерб надежности.",
        aboutText2: "Моя цель — строить устойчивые и понятные системы, ориентируясь на реальные потребности проекта и команды.",

        // Section titles
        experienceTitle: "Карьера",
        projectsTitle: "Проекты",
        skillsTitle: "Навыки",

        // Experience cards
        job1Title: "Старший системный администратор",
        job1Date: "[ Декабрь 2024  /  по настоящее время ]",
        job1Section1Title: "Инфраструктура и виртуализация",
        job1Section1Tasks: [
            "Управление кластером из 14 нод и 100+ ВМ",
            "Ведение технической документации и журнала инцидентов",
            "Технологии: Proxmox, FreeIPA, Ansible, Terraform",
            "Работа с облачными платформами: Yandex Cloud, AWS, Hetzner, Selectel"
        ],
        job1Section2Title: "Linux и контейнеризация",
        job1Section2Tasks: [
            "Диагностика и решение проблем в Linux-системах",
            "Анализ логов и отладка системных процессов",
            "Управление контейнерами: Docker Swarm, Docker Compose"
        ],
        job1Section3Title: "Безопасность и доступ",
        job1Section3Tasks: [
            "Настройка и поддержка Bastion-хостов, VPN-соединений",
            "Управление SSH-ключами и доступами",
            "Установка и обновление SSL-сертификатов"
        ],
        job1Section4Title: "DevOps и мониторинг",
        job1Section4Tasks: [
            "Развёртывание GitLab, Sentry, YouTrack",
            "Настройка мониторинга: Zabbix, Prometheus, Grafana",
            "CI/CD через GitLab Actions",
            "API-интеграции (VK Workspace)"
        ],

        job2Title: "Системный администратор",
        job2Date: "[ Февраль 2022 / Декабрь 2024 ]",
        job2Section1Title: "IT-инфраструктура и серверы",
        job2Section1Tasks: [
            "Поддержка IT-инфраструктуры на 80 рабочих мест",
            "Администрирование сервера 1С: установка, обновления, бэкапы",
            "Управление Windows Server и Active Directory",
            "Работа с электронными цифровыми подписями"
        ],
        job2Section2Title: "Сетевое администрирование",
        job2Section2Tasks: [
            "Настройка оборудования MikroTik: VLAN, DHCP, NAT",
            "Управление Wi-Fi через контроллер CAPsMAN",
            "Поддержка и развитие локальной сети"
        ],
        job2Section3Title: "Инженерные системы",
        job2Section3Tasks: [
            "Настройка систем контроля доступа: Bolid, Timex",
            "Администрирование видеонаблюдения Hikvision",
            "Электромонтажные и слаботочные работы"
        ],
        job2Section4Title: "Техническая поддержка",
        job2Section4Tasks: [
            "Диагностика и ремонт компьютерной техники",
            "Обслуживание принтеров и офисного оборудования",
            "Установка и настройка программного обеспечения"
        ],

        job3Title: "Инженер тех. поддержки",
        job3Date: "[ Май 2020 / Июль 2021 ]",
        job3Section1Title: "Техническая поддержка пользователей",
        job3Section1Tasks: [
            "Поддержка сотрудников в распределённой сети (офисы по всей России)",
            "Диагностика и решение проблем на рабочих станциях Windows",
            "Настройка периферийного оборудования и печатающих устройств"
        ],
        job3Section2Title: "Развёртывание IT-инфраструктуры",
        job3Section2Tasks: [
            "Подготовка новых офисов \"под ключ\"",
            "Прокладка структурированных кабельных систем",
            "Инвентаризация и ввод в эксплуатацию оборудования"
        ],
        job3Section3Title: "Сетевая инфраструктура",
        job3Section3Tasks: [
            "Настройка базовых сетевых служб: DHCP, DNS",
            "Поддержка локальных сетей и беспроводных подключений",
            "Работа с коммутаторами и маршрутизаторами"
        ],
        job3Section4Title: "Инженерные системы безопасности",
        job3Section4Tasks: [
            "Обслуживание систем контроля доступа и турникетов",
            "Работа с оборудованием безопасности: Bolid, PERCo",
            "Монтаж и настройка слаботочных систем"
        ],

        // Projects
        project1Title: "zhenshen-tattoo",
        project1Description: "Сайт-визитка для тату мастера. Краткая информация о себе, портфолио с работами и удобные инструкции по уходу. Возможность записаться на сеанс онлайн.",
        project2Title: "wgetbash",
        project2Description: "Упрощённая альтернатива Ansible для менеджмента и запуска Bash скриптов. Формируйте библиотеку скриптов и запускайте нужный одним кликом.",
        project3Title: "blur",
        project3Description: "Простой и удобный аудиоплеер прямо в Telegram. Загружаю любимую музыку и слушаю её с любого устройства, где есть мой аккаунт.",
        project4Title: "tgDrive",
        project4Description: "Ваше личное облако в Telegram. Можно загружать файлы без ограничений по общему объёму. Доступ к ним есть с любого устройства, где вы вошли в свой аккаунт.",
        projectButton: "Открыть",
        projectChecking: "Проверяю...",
        projectUnavailable: "Проект временно недоступен, попробуйте позже",

        // Skills categories
        skillCategory1: "Администрирование",
        skillCategory2: "Виртуализация",
        skillCategory3: "Облака",
        skillCategory4: "Разработка",

        // Notifications
        emailCopied: "Email скопирован в буфер обмена!"
    },

    en: {
        name: "Sergey Shumilov",
        jobTitle: "System Administrator / DevOps",
        aboutText1: "I follow the principle of conscious technology choice. Every decision must be justified, transparent, and fit for purpose. No excessive complexity, but without compromising reliability.",
        aboutText2: "My goal is to build resilient and understandable systems, focusing on the real needs of the project and team.",

        // Section titles
        experienceTitle: "Career",
        projectsTitle: "Projects",
        skillsTitle: "Skills",

        // Experience cards
        job1Title: "Senior System Administrator",
        job1Date: "[ December 2024 / Present ]",
        job1Section1Title: "Infrastructure and Virtualization",
        job1Section1Tasks: [
            "Managing a cluster of 14 nodes and 100+ VMs",
            "Maintaining technical documentation and incident logs",
            "Technologies: Proxmox, FreeIPA, Ansible, Terraform",
            "Working with cloud platforms: Yandex Cloud, AWS, Hetzner, Selectel"
        ],
        job1Section2Title: "Linux and Containerization",
        job1Section2Tasks: [
            "Diagnosing and solving problems in Linux systems",
            "Log analysis and system process debugging",
            "Container management: Docker Swarm, Docker Compose"
        ],
        job1Section3Title: "Security and Access",
        job1Section3Tasks: [
            "Configuring and maintaining Bastion hosts, VPN connections",
            "Managing SSH keys and access controls",
            "Installing and updating SSL certificates"
        ],
        job1Section4Title: "DevOps and Monitoring",
        job1Section4Tasks: [
            "Deploying GitLab, Sentry, YouTrack",
            "Setting up monitoring: Zabbix, Prometheus, Grafana",
            "CI/CD via GitLab Actions",
            "API integrations (VK Workspace)"
        ],

        job2Title: "System Administrator",
        job2Date: "[ February 2022 / December 2024 ]",
        job2Section1Title: "IT Infrastructure and Servers",
        job2Section1Tasks: [
            "Supporting IT infrastructure for 80 workstations",
            "1C server administration: installation, updates, backups",
            "Managing Windows Server and Active Directory",
            "Working with digital signatures"
        ],
        job2Section2Title: "Network Administration",
        job2Section2Tasks: [
            "Configuring MikroTik equipment: VLAN, DHCP, NAT",
            "Managing Wi-Fi through CAPsMAN controller",
            "Supporting and developing local network"
        ],
        job2Section3Title: "Engineering Systems",
        job2Section3Tasks: [
            "Configuring access control systems: Bolid, Timex",
            "Administering Hikvision video surveillance",
            "Electrical and low-voltage work"
        ],
        job2Section4Title: "Technical Support",
        job2Section4Tasks: [
            "Computer hardware diagnostics and repair",
            "Printer and office equipment maintenance",
            "Software installation and configuration"
        ],

        job3Title: "Technical Support Engineer",
        job3Date: "[ May 2020 / July 2021 ]",
        job3Section1Title: "User Technical Support",
        job3Section1Tasks: [
            "Supporting employees in distributed network (offices across Russia)",
            "Diagnosing and solving problems on Windows workstations",
            "Configuring peripheral equipment and printing devices"
        ],
        job3Section2Title: "IT Infrastructure Deployment",
        job3Section2Tasks: [
            "Preparing new offices \"turnkey\"",
            "Installing structured cabling systems",
            "Equipment inventory and commissioning"
        ],
        job3Section3Title: "Network Infrastructure",
        job3Section3Tasks: [
            "Configuring basic network services: DHCP, DNS",
            "Supporting local networks and wireless connections",
            "Working with switches and routers"
        ],
        job3Section4Title: "Security Engineering Systems",
        job3Section4Tasks: [
            "Maintaining access control systems and turnstiles",
            "Working with security equipment: Bolid, PERCo",
            "Installing and configuring low-voltage systems"
        ],

        // Projects
        project1Title: "zhenshen-tattoo",
        project1Description: "Business card website for a tattoo artist. Brief information, portfolio with work samples, and convenient aftercare instructions. Online booking available.",
        project2Title: "wgetbash",
        project2Description: "Simplified alternative to Ansible for managing and running Bash scripts. Build a script library and run the right one with one click.",
        project3Title: "blur",
        project3Description: "Simple and convenient audio player right in Telegram. Upload your favorite music and listen to it from any device where you have your account.",
        project4Title: "tgDrive",
        project4Description: "Your personal cloud in Telegram. Upload files without limitations on total volume. Access them from any device where you're logged in.",
        projectButton: "Open",
        projectChecking: "Checking...",
        projectUnavailable: "Project temporarily unavailable, try later",

        // Skills categories
        skillCategory1: "Administration",
        skillCategory2: "Virtualization",
        skillCategory3: "Cloud",
        skillCategory4: "Development",

        // Notifications
        emailCopied: "Email copied to clipboard!"
    }
};

// Detect user language based on location
async function detectUserLanguage() {
    try {
        // First try to get location via API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // If user is from Russia, use Russian
        if (data.country_code === 'RU') {
            return 'ru';
        }

        // For all other countries, use English
        return 'en';
    } catch (error) {
        // Fallback to browser language if API fails
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('ru') ? 'ru' : 'en';
    }
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];

    // Update basic info
    document.querySelector('.big-name').textContent = t.name;
    document.querySelector('.job-title-main').textContent = t.jobTitle;

    // Update about section
    const aboutTexts = document.querySelectorAll('.about-text-content');
    aboutTexts[0].textContent = t.aboutText1;
    aboutTexts[1].textContent = t.aboutText2;

    // Update section titles
    document.querySelectorAll('.section-title')[0].textContent = t.experienceTitle;
    document.querySelectorAll('.section-title')[1].textContent = t.projectsTitle;
    document.querySelectorAll('.section-title')[2].textContent = t.skillsTitle;

    // Update experience cards
    const experienceCards = document.querySelectorAll('.experience-card');

    // Job 1
    experienceCards[0].querySelector('.job-title').textContent = t.job1Title;
    experienceCards[0].querySelector('.job-dates .start-date').textContent = t.job1Date;
    const job1Sections = experienceCards[0].querySelectorAll('.responsibility-section');
    job1Sections[0].querySelector('.section-header').textContent = t.job1Section1Title;
    job1Sections[0].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job1Section1Tasks[i]);
    job1Sections[1].querySelector('.section-header').textContent = t.job1Section2Title;
    job1Sections[1].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job1Section2Tasks[i]);
    job1Sections[2].querySelector('.section-header').textContent = t.job1Section3Title;
    job1Sections[2].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job1Section3Tasks[i]);
    job1Sections[3].querySelector('.section-header').textContent = t.job1Section4Title;
    job1Sections[3].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job1Section4Tasks[i]);

    // Job 2
    experienceCards[1].querySelector('.job-title').textContent = t.job2Title;
    experienceCards[1].querySelector('.job-dates .start-date').textContent = t.job2Date;
    const job2Sections = experienceCards[1].querySelectorAll('.responsibility-section');
    job2Sections[0].querySelector('.section-header').textContent = t.job2Section1Title;
    job2Sections[0].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job2Section1Tasks[i]);
    job2Sections[1].querySelector('.section-header').textContent = t.job2Section2Title;
    job2Sections[1].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job2Section2Tasks[i]);
    job2Sections[2].querySelector('.section-header').textContent = t.job2Section3Title;
    job2Sections[2].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job2Section3Tasks[i]);
    job2Sections[3].querySelector('.section-header').textContent = t.job2Section4Title;
    job2Sections[3].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job2Section4Tasks[i]);

    // Job 3
    experienceCards[2].querySelector('.job-title').textContent = t.job3Title;
    experienceCards[2].querySelector('.job-dates .start-date').textContent = t.job3Date;
    const job3Sections = experienceCards[2].querySelectorAll('.responsibility-section');
    job3Sections[0].querySelector('.section-header').textContent = t.job3Section1Title;
    job3Sections[0].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job3Section1Tasks[i]);
    job3Sections[1].querySelector('.section-header').textContent = t.job3Section2Title;
    job3Sections[1].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job3Section2Tasks[i]);
    job3Sections[2].querySelector('.section-header').textContent = t.job3Section3Title;
    job3Sections[2].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job3Section3Tasks[i]);
    job3Sections[3].querySelector('.section-header').textContent = t.job3Section4Title;
    job3Sections[3].querySelectorAll('.task-list li').forEach((li, i) => li.textContent = t.job3Section4Tasks[i]);

    // Update projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards[0].querySelector('.project-title').textContent = t.project1Title;
    projectCards[0].querySelector('.description-text').textContent = t.project1Description;
    projectCards[1].querySelector('.project-title').textContent = t.project2Title;
    projectCards[1].querySelector('.description-text').textContent = t.project2Description;
    projectCards[2].querySelector('.project-title').textContent = t.project3Title;
    projectCards[2].querySelector('.description-text').textContent = t.project3Description;
    projectCards[3].querySelector('.project-title').textContent = t.project4Title;
    projectCards[3].querySelector('.description-text').textContent = t.project4Description;

    // Update project buttons
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.textContent = t.projectButton;
    });

    // Update skill categories
    const skillCategories = document.querySelectorAll('.category-title');
    skillCategories[0].textContent = t.skillCategory1;
    skillCategories[1].textContent = t.skillCategory2;
    skillCategories[2].textContent = t.skillCategory3;
    skillCategories[3].textContent = t.skillCategory4;

    // Store current language for later use
    window.currentLang = lang;
    window.currentTranslations = t;

    // Update page language attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
async function initLanguage() {
    const lang = await detectUserLanguage();
    applyTranslations(lang);
}

// Carousel functionality
class ExperienceCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.cards = document.querySelectorAll('.experience-card');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        
        // Touch handling properties
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.isDragging = false;

        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Add touch events for mobile swipe
        if (window.innerWidth <= 768) {
            this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
            this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        }

        // Set initial carousel state (hides prev button)
        this.updateCarousel();
    }

    updateCarousel() {
        const translateX = -this.currentIndex * (100 / this.cards.length);
        this.track.style.transform = `translateX(${translateX}%)`;

        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });

        // Prevent layout shift by using visibility instead of display
        this.prevBtn.style.visibility = this.currentIndex === 0 ? 'hidden' : 'visible';
        this.nextBtn.style.visibility = this.currentIndex === this.cards.length - 1 ? 'hidden' : 'visible';
    }

    nextSlide() {
        if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex += 1;
            this.updateCarousel();
        }
    }

    prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex -= 1;
            this.updateCarousel();
        }
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
        this.isDragging = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        
        this.currentX = e.touches[0].clientX;
        this.currentY = e.touches[0].clientY;
        
        // Prevent vertical scrolling if horizontal swipe is dominant
        const deltaX = Math.abs(this.currentX - this.startX);
        const deltaY = Math.abs(this.currentY - this.startY);
        
        if (deltaX > deltaY && deltaX > 10) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        
        const deltaX = this.currentX - this.startX;
        const deltaY = Math.abs(this.currentY - this.startY);
        
        // Only trigger swipe if horizontal movement is significant and greater than vertical
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
            if (deltaX > 0) {
                // Swipe right - go to previous slide
                this.prevSlide();
            } else {
                // Swipe left - go to next slide
                this.nextSlide();
            }
        }
        
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
    }
}


// Skills interaction - simplified for performance
class SkillsInteraction {
    constructor() {
        // No additional JavaScript interactions needed
        // All styling handled by CSS hover states
    }
}

// Smooth scrolling for navigation (if you add navigation later)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.init();
    }
    
    init() {
        const sections = document.querySelectorAll('.glass-section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            this.observer.observe(section);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Unobserve after animation
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Parallax effect for blobs
class ParallaxEffect {
    // constructor() {
    //     this.blobs = document.querySelectorAll('.blob');
    //     this.init();
    // }
    
    // init() {
    //     window.addEventListener('scroll', () => this.handleScroll());
    //     window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    // }
    
    // handleScroll() {
    //     const scrolled = window.pageYOffset;
    //     const rate = scrolled * -0.5;
        
    //     this.blobs.forEach((blob, index) => {
    //         const speed = (index + 1) * 0.2;
    //         blob.style.transform = `translateY(${rate * speed}px)`;
    //     });
    // }
    
    // handleMouseMove(e) {
    //     const mouseX = e.clientX / window.innerWidth;
    //     const mouseY = e.clientY / window.innerHeight;
        
    //     this.blobs.forEach((blob, index) => {
    //         const speed = (index + 1) * 20;
    //         const x = (mouseX - 0.5) * speed;
    //         const y = (mouseY - 0.5) * speed;
            
    //         blob.style.transform += ` translate(${x}px, ${y}px)`;
    //     });
    // }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize language first
    await initLanguage();

    // Initialize carousel
    new ExperienceCarousel();

    // Initialize skills interaction
    new SkillsInteraction();

    // Initialize scroll animations - DISABLED
    // new AnimationObserver();

    // Initialize parallax effects
    new ParallaxEffect();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle window resize
window.addEventListener('resize', () => {
    // Only reset carousel on desktop, preserve state on mobile
    if (window.innerWidth > 768) {
        const carousel = document.querySelector('.carousel-track');
        if (carousel) {
            carousel.style.transform = 'translateX(0%)';
        }
    }
});

// Add some interactive effects for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Project health check configuration
const projectHealthChecks = {
    'blur': {
        name: 'blur',
        url: 'https://t.me/sh_blur_bot',
        healthCheckUrl: 'blur.sh-development.ru'
    },
    'tgDrive': {
        name: 'tgDrive', 
        url: 'https://t.me/sh_tgdrive_bot',
        healthCheckUrl: 'tgdrive-backend.sh-development.ru'
    },
    'wgetbash': {
        name: 'wgetbash',
        url: 'https://wgetbash.sh-development.ru/',
        healthCheckUrl: 'wgetbash.sh-development.ru'
    },
    'zhenshen-tattoo': {
        name: 'zhenshen-tattoo',
        url: 'https://zhenshen-tattoo.ru/',
        healthCheckUrl: 'zhenshen-tattoo.ru'
    }
};

// Check project availability
async function checkProjectAvailability(projectKey) {
    const project = projectHealthChecks[projectKey];
    if (!project) return false;
    
    try {
        const response = await fetch(project.healthCheckUrl, {
            method: 'GET',
            mode: 'no-cors', // For external APIs that don't support CORS
            timeout: 5000
        });
        
        // For no-cors mode, we can't check response status
        // So we assume if no error is thrown, the service is available
        return true;
    } catch (error) {
        console.log(`Health check failed for ${project.name}:`, error);
        return false;
    }
}

// Handle project button click with availability check
async function handleProjectClick(event, projectKey) {
    event.preventDefault();

    const project = projectHealthChecks[projectKey];
    const t = window.currentTranslations || translations.ru;

    if (!project) {
        showNotification(t.projectUnavailable, 'error');
        return;
    }

    // Show loading state
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = t.projectChecking;
    button.disabled = true;

    try {
        const isAvailable = await checkProjectAvailability(projectKey);

        if (isAvailable) {
            // Project is available, redirect
            window.open(project.url, '_blank');
        } else {
            // Project is not available, show notification
            showNotification(t.projectUnavailable, 'error');
        }
    } catch (error) {
        showNotification(t.projectUnavailable, 'error');
    } finally {
        // Restore button state
        button.textContent = originalText;
        button.disabled = false;
    }
}

// Email copy functionality
function copyEmail() {
    const email = 'wumilovsergey@gmail.com';
    const t = window.currentTranslations || translations.ru;

    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        showNotification(t.emailCopied);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(t.emailCopied);
    });
}

// Notification popup
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification-popup');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification-popup ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}