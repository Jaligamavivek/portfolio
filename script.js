// ===== LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 800);
    }
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNav();
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

// ===== ACTIVE NAV =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== TYPING EFFECT =====
const roles = ['"Full Stack Developer"', '"Problem Solver"', '"Java Developer"', '"Python Developer"', '"Web Developer"'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
    if (!typedEl) return;
    const current = roles[roleIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
    }
    let speed = isDeleting ? 60 : 100;
    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }
    setTimeout(type, speed);
}
type();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.edu-card, .timeline-card, .project-card, .cert-card, .coding-card, .skill-group').forEach(el => {
    el.classList.add('animate-hidden');
    observer.observe(el);
});

// ===== GITHUB REPOS =====
async function fetchGithubRepos() {
    const container = document.getElementById('githubRepos');
    if (!container) return;
    try {
        const res = await fetch('https://api.github.com/users/Jaligamavivek/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed');
        const repos = await res.json();
        if (!repos.length) {
            container.innerHTML = '<p class="repo-empty">No public repositories found.</p>';
            return;
        }
        container.innerHTML = repos.map(repo => `
            <a href="${repo.html_url}" target="_blank" class="repo-card">
                <div class="repo-header">
                    <i class="fab fa-github repo-icon"></i>
                    <h4>${repo.name}</h4>
                </div>
                <p>${repo.description || 'No description provided.'}</p>
                <div class="repo-footer">
                    <span><i class="fas fa-circle" style="color:${langColor(repo.language)}"></i> ${repo.language || 'N/A'}</span>
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            </a>
        `).join('');
    } catch {
        container.innerHTML = `
            <div class="repo-error">
                <i class="fab fa-github"></i>
                <p>Visit my GitHub to see all repositories</p>
                <a href="https://github.com/Jaligamavivek" target="_blank" class="btn-primary">Open GitHub <i class="fas fa-external-link-alt"></i></a>
            </div>`;
    }
}

function langColor(lang) {
    const colors = { JavaScript: '#f7df1e', Python: '#3572A5', Java: '#b07219', HTML: '#e34c26', CSS: '#563d7c', TypeScript: '#2b7489' };
    return colors[lang] || '#6c63ff';
}

fetchGithubRepos();

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
            btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            contactForm.reset();
            setTimeout(() => {
                btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
