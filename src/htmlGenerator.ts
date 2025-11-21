import { SiteData, Project, Experience, Writing } from './types';

export class HTMLGenerator {
  private data: SiteData;

  constructor(data: SiteData) {
    this.data = data;
  }

  private generateHeader(): string {
    return `
  <!-- header -->
  <header class="fixed top-0 left-0 right-0 z-20 border-b border-black/5 dark:border-white/10 backdrop-blur bg-white/80 dark:bg-black/80">
    <div class="mx-auto w-full max-w-[var(--container)] px-5 py-3 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2">
        <span class="inline-block h-5 w-5 rounded-md bg-zinc-900 dark:bg-zinc-100"></span>
        <span class="text-sm font-medium tracking-tight">${this.data.personal.name}</span>
      </a>
      <nav class="text-sm flex items-center gap-4">
        <a href="#about" class="hover:opacity-80">about</a>
        <a href="#experience" class="hover:opacity-80">experience</a>
        <a href="#projects" class="hover:opacity-80">projects</a>
        <a href="#writing" class="hover:opacity-80">writing</a>
        <a href="#contact" class="hover:opacity-80">contact</a>
      </nav>
    </div>
  </header>`;
  }

  private generateHeroSection(): string {
    return `
    <!-- hero / about -->
    <section class="py-8 md:py-10 space-y-3 p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/15 dark:border-white/10">
      <p class="section-title">${this.data.personal.title}</p>
      <div class="flex items-center gap-3 mt-2">
        <a href="${this.data.personal.github}" target="_blank" rel="noopener noreferrer" class="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a href="${this.data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:${this.data.personal.email}" class="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
      <div class="flex flex-wrap items-center gap-2 mt-3">
        <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-md hover:opacity-80 transition-opacity">yale '27</a>
        <a href="https://interactive-machines.gitlab.io/" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-md hover:opacity-80 transition-opacity">interactive machines group</a>
      </div>
      <p class="text-base text-zinc-600 dark:text-zinc-300 max-w-prose">${this.data.personal.bio}</p>
    </section>`;
  }

  private generateProjectCard(project: Project): string {
    const hiddenClass = project.hidden ? ' hidden' : '';
    return `
        <li class="${hiddenClass} flex items-baseline text-sm relative navigable-item">
          <span class="nav-indicator absolute -left-6 opacity-0 transition-opacity">→</span>
          <span class="font-medium w-80 flex-shrink-0">${project.title}</span>
          <span class="text-zinc-500 flex-1 project-fade" title="${project.description}">${project.description}</span>
        </li>`;
  }

  private generateProjectsSection(): string {
    const projectCards = this.data.projects.map(project => this.generateProjectCard(project)).join('');
    
    return `
    <!-- projects -->
    <section id="projects" class="py-8 md:py-10 space-y-6 p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/15 dark:border-white/10">
      <p class="section-title">projects</p>
      <ul id="project-list" class="space-y-3">${projectCards}
      </ul>
      <div class="pt-4">
        <button id="show-more" class="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors font-medium">
          + more projects
        </button>
      </div>
    </section>`;
  }

  private generateExperienceItem(exp: Experience): string {
    return `
        <li class="flex items-baseline text-sm relative navigable-item">
          <span class="nav-indicator absolute -left-6 opacity-0 transition-opacity">→</span>
          <span class="font-medium w-80 flex-shrink-0">${exp.company}</span>
          <span class="text-zinc-500 flex-1">${exp.position} · ${exp.year}</span>
        </li>`;
  }

  private generateExperienceSection(): string {
    const experienceItems = this.data.experience.map(exp => this.generateExperienceItem(exp)).join('');
    
    return `
    <!-- experience -->
    <section id="experience" class="py-8 md:py-10 space-y-6 p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/15 dark:border-white/10">
      <p class="section-title">experience</p>
      <ul class="space-y-3">${experienceItems}
      </ul>
    </section>`;
  }

  private generateWritingItem(writing: Writing): string {
    return `
        <li><a href="${writing.url}" class="hover:underline">${writing.title}</a></li>`;
  }

  private generateWritingSection(): string {
    const writingItems = this.data.writing.map(writing => this.generateWritingItem(writing)).join('');
    
    return `
    <!-- writing -->
    <section id="writing" class="py-8 md:py-10 space-y-3 p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/15 dark:border-white/10">
      <p class="section-title">writing</p>
      <ul class="space-y-2 text-sm">${writingItems}
      </ul>
    </section>`;
  }

  private generateContactSection(): string {
    return `
    <!-- contact -->
    <section id="contact" class="py-8 md:py-10 space-y-3 p-6 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/15 dark:border-white/10">
      <p class="section-title">contact</p>
      <p class="max-w-prose text-zinc-700 dark:text-zinc-300">say hi at <a href="mailto:${this.data.personal.email}" class="underline hover:opacity-80">${this.data.personal.email}</a> or find me on <a href="${this.data.personal.linkedin}" class="hover:underline">linkedin</a> and <a href="${this.data.personal.github}" class="hover:underline">github</a>.</p>
    </section>`;
  }

  private generateFooter(): string {
    return `
    <footer class="py-8 text-xs text-zinc-500 dark:text-zinc-400">
      <p>© 2025 · minimal build. no tracking. deployed on vercel.</p>
    </footer>`;
  }

  private generateJavaScript(): string {
    return `
  <script>
    const btn = document.getElementById('show-more');
    const projects = document.querySelectorAll('#project-list .hidden');
    btn.addEventListener('click', () => {
      projects.forEach(p => p.classList.remove('hidden'));
      btn.style.display = 'none';
    });

    // Keyboard navigation for list items
    let currentIndex = 0;
    const items = document.querySelectorAll('.navigable-item:not(.hidden)');
    
    if (items.length > 0) {
      items[0].classList.add('active');
    }
    
    document.addEventListener('keydown', (e) => {
      const visibleItems = Array.from(document.querySelectorAll('.navigable-item:not(.hidden)'));
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentIndex < visibleItems.length - 1) {
          visibleItems[currentIndex].classList.remove('active');
          currentIndex++;
          visibleItems[currentIndex].classList.add('active');
          
          // Smooth scroll only if item is not in viewport
          const rect = visibleItems[currentIndex].getBoundingClientRect();
          if (rect.bottom > window.innerHeight || rect.top < 100) {
            window.scrollBy({ top: rect.top - window.innerHeight / 2 + rect.height / 2, behavior: 'smooth' });
          }
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          visibleItems[currentIndex].classList.remove('active');
          currentIndex--;
          visibleItems[currentIndex].classList.add('active');
          
          // Smooth scroll only if item is not in viewport
          const rect = visibleItems[currentIndex].getBoundingClientRect();
          if (rect.top < 100 || rect.bottom > window.innerHeight) {
            window.scrollBy({ top: rect.top - window.innerHeight / 2 + rect.height / 2, behavior: 'smooth' });
          }
        }
      }
    });
    </script>

    <!-- Generative art - Clean sprawling roots - COMMENTED OUT -->
    <!--
    <script>
    (function() {
      const canvas = document.createElement('canvas');
      canvas.id = 'generative-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.zIndex = '-1';
      canvas.style.pointerEvents = 'auto'; // Enable pointer events
      canvas.style.cursor = 'pointer';
      document.body.insertBefore(canvas, document.body.firstChild);
      
      const ctx = canvas.getContext('2d');
      
      // High resolution canvas to prevent pixelation
      const dpr = window.devicePixelRatio || 2;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
      
      const isDark = document.documentElement.classList.contains('dark') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const baseColor = isDark ? '120, 120, 120' : '90, 90, 90';
      const roots = [];
      const maxRoots = 15;
      let hoveredRoot = null;
      let mouseX = -1000;
      let mouseY = -1000;
      
      class Root {
        constructor(startX, startY, angle, depth, thickness) {
          this.points = [];
          this.angle = angle;
          this.baseAngle = angle;
          this.depth = depth;
          this.thickness = 0.8; // Uniform thin width
          this.children = [];
          this.length = 0;
          this.maxLength = 225 + Math.random() * 180;
          this.growing = true;
          this.x = startX;
          this.y = startY;
          this.nextBranchAt = 35 + Math.random() * 25;
          this.hasBranched = false;
          this.speed = 1.8 - (depth * 0.25);
          this.isMainRoot = depth === 0;
          this.mainRoot = this.isMainRoot ? this : null;
        }
        
        grow() {
          if (!this.growing) {
            let anyGrowing = false;
            for (const child of this.children) {
              if (child.grow()) anyGrowing = true;
            }
            return anyGrowing;
          }
          
          this.angle += (Math.random() - 0.5) * 0.15;
          
          const downwardPull = Math.PI / 2;
          const pullStrength = 0.008;
          this.angle += (downwardPull - this.angle) * pullStrength;
          
          this.x += Math.cos(this.angle) * this.speed;
          this.y += Math.sin(this.angle) * this.speed;
          
          this.points.push({x: this.x, y: this.y});
          this.length++;
          
          if (!this.hasBranched && this.length >= this.nextBranchAt && this.depth < 4 && roots.length < maxRoots) {
            this.branch();
            this.hasBranched = true;
          }
          
          if (this.length >= this.maxLength || this.y > window.innerHeight || 
              this.x < window.innerWidth * 0.65 || this.x > window.innerWidth) {
            this.growing = false;
          }
          
          return true;
        }
        
        branch() {
          const numBranches = this.depth < 2 ? 2 : (Math.random() > 0.5 ? 2 : 1);
          
          for (let i = 0; i < numBranches; i++) {
            const angleSpread = (Math.random() - 0.5) * Math.PI * 0.8;
            const branchAngle = this.angle + angleSpread;
            
            const child = new Root(
              this.x,
              this.y,
              branchAngle,
              this.depth + 1,
              0.8 // Same thin width
            );
            
            child.mainRoot = this.mainRoot || this;
            this.children.push(child);
            roots.push(child);
          }
        }
        
        isNearMouse(mx, my, threshold = 8) {
          for (const point of this.points) {
            const dist = Math.sqrt((point.x - mx) ** 2 + (point.y - my) ** 2);
            if (dist < threshold) return true;
          }
          return false;
        }
        
        draw() {
          if (this.points.length < 2) return;
          
          const isHovered = hoveredRoot && (hoveredRoot === this.mainRoot || this.mainRoot === hoveredRoot);
          const opacity = Math.max(0.06, 0.14 - this.depth * 0.02);
          const finalOpacity = isHovered ? opacity * 2.5 : opacity; // Bolder on hover
          
          ctx.strokeStyle = 'rgba(' + baseColor + ', ' + finalOpacity + ')';
          ctx.lineWidth = isHovered ? this.thickness * 1.8 : this.thickness; // Thicker on hover
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          
          ctx.beginPath();
          ctx.moveTo(this.points[0].x, this.points[0].y);
          
          for (let i = 1; i < this.points.length - 1; i += 1) {
            const xc = (this.points[i].x + this.points[i + 1].x) / 2;
            const yc = (this.points[i].y + this.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
          }
          
          if (this.points.length > 1) {
            const last = this.points[this.points.length - 1];
            ctx.lineTo(last.x, last.y);
          }
          
          ctx.stroke();
        }
      }
      
      function spawnRootSystem() {
        if (roots.length >= maxRoots) return;
        
        const startX = window.innerWidth * 0.78 + Math.random() * window.innerWidth * 0.12;
        const startY = 25 + Math.random() * 35;
        
        const mainRoot = new Root(
          startX,
          startY,
          Math.PI / 2 + (Math.random() - 0.5) * 0.35,
          0,
          0.8 // Thin uniform width
        );
        
        roots.push(mainRoot);
      }
      
      spawnRootSystem();
      setTimeout(() => spawnRootSystem(), 1500);
      
      // Mouse tracking
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Check which root is hovered
        hoveredRoot = null;
        for (const root of roots) {
          if (root.isMainRoot && root.isNearMouse(mouseX, mouseY, 15)) {
            hoveredRoot = root;
            break;
          }
        }
      });
      
      canvas.addEventListener('mouseleave', () => {
        hoveredRoot = null;
      });
      
      canvas.addEventListener('click', () => {
        if (hoveredRoot) {
          console.log('Clicked on root tree!', hoveredRoot);
          // You can add custom behavior here
        }
      });
      
      let frameCount = 0;
      
      function animate() {
        ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.004)' : 'rgba(255, 255, 255, 0.004)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        
        for (const root of roots) {
          root.draw();
          root.grow();
        }
        
        frameCount++;
        
        if (frameCount % 900 === 0 && roots.length < maxRoots) {
          spawnRootSystem();
        }
        
        requestAnimationFrame(animate);
      }
      
      animate();
      
      window.addEventListener('resize', () => {
        const dpr = window.devicePixelRatio || 2;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(dpr, dpr);
      });
    })();
    </script>
    -->
  </script>`;
  }

  public generateFullHTML(): string {
    return `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${this.data.personal.name} — engineer</title>
  <meta name="description" content="minimal, fast personal site for a developer." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
      <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root { --container: 46rem; }
    body, h1, h2, h3, h4, h5, h6, p, a, li, span { font-family: 'EB Garamond', serif; text-transform: lowercase; font-size: 1.05em; font-weight: 500; }
    .section-title { letter-spacing:.15em; text-transform:lowercase; font-size:12px; font-weight:700; color:rgb(113,113,122); }
    .project-fade {
      white-space: nowrap;
      overflow: hidden;
      position: relative;
    }
    .project-fade::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 100%;
      background: linear-gradient(90deg, 
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      pointer-events: none;
    }
    .dark .project-fade::after {
      background: linear-gradient(90deg, 
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
    #generative-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      pointer-events: none;
      opacity: 0.5;
    }
    .navigable-item.active .nav-indicator {
      opacity: 1;
    }
  </style>
</head>
<body class="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased">
${this.generateHeader()}

  <main id="top" class="mx-auto w-full max-w-[var(--container)] px-5 pt-20">
${this.generateHeroSection()}
${this.generateExperienceSection()}
${this.generateProjectsSection()}
${this.generateWritingSection()}
${this.generateContactSection()}
${this.generateFooter()}
  </main>
${this.generateJavaScript()}
</body>
</html>`;
  }

  public generateV2HTML(): string {
    return `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${this.data.personal.name} — engineer</title>
  <meta name="description" content="minimal, fast personal site for a developer." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.js"></script>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root { --container: 46rem; }
    body, h1, h2, h3, h4, h5, h6, p, a, li, span { font-family: 'EB Garamond', serif; text-transform: lowercase; font-size: 1.05em; font-weight: 500; }
    .section-title { letter-spacing:.15em; text-transform:lowercase; font-size:12px; font-weight:700; color:rgb(113,113,122); }
    .project-fade {
      white-space: nowrap;
      overflow: hidden;
      position: relative;
    }
    .project-fade::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 100%;
      background: linear-gradient(90deg, 
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      pointer-events: none;
    }
    .dark .project-fade::after {
      background: linear-gradient(90deg, 
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
    .navigable-item.active .nav-indicator {
      opacity: 1;
    }
    #defaultCanvas0 {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      z-index: -1 !important;
      opacity: 0.3;
    }
  </style>
</head>
<body class="bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased">
${this.generateHeader()}

  <main id="top" class="mx-auto w-full max-w-[var(--container)] px-5 pt-20">
${this.generateHeroSection()}
${this.generateExperienceSection()}
${this.generateProjectsSection()}
${this.generateWritingSection()}
${this.generateContactSection()}
${this.generateFooter()}
  </main>
${this.generateJavaScript()}
  
  <!-- P5.js Fractal Tree -->
  <script>
    // Branch class
    class Branch {
      constructor(begin, end, treeRef) {
        this.begin = begin;
        this.end = end;
        this.age = 1;
        this.branch_diameter = 0.5; // Start thinner (was 1)
        this.branch_maturity_age = random(30, 90);
        this.is_mature = false;
        this.has_child = false;
        this.will_split = false;
        this.attached_child = 0;
        this.treeRef = treeRef;
      }

      update(tree_food) {
        this.update_branch_diameter();
        if (tree_food > 0) {
          this.age += 1;
          this.is_branch_mature();
          if (!this.is_mature) {
            let branch_length = p5.Vector.sub(this.end, this.begin);
            this.end.add(branch_length.setMag(1));
            
            // Add downward bias (stronger as tree grows)
            const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
            const downwardBias = 0.03 + (progress * 0.05); // Starts at 0.03, increases to 0.08
            this.end.y += downwardBias;
            
            this.will_split = this.generate_boolean();
          }
        }
      }

      update_branch_diameter() {
        this.branch_diameter += 0.005;
      }

      is_branch_mature() {
        if (this.age >= this.branch_maturity_age) {
          this.is_mature = true;
        }
      }

      generate_boolean() {
        // Dynamic probability: very low branching - starts at 15% (0.85 trigger), ends at 99.5% (0.005 trigger)
        const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
        const progressCurved = Math.pow(progress, 0.25); // Ultra fast exponential curve
        const true_trigger = 0.85 - (progressCurved * 0.845); // 0.85 -> 0.005 (minimal branching)
        const rand_boolean = Math.random();
        return rand_boolean >= true_trigger;
      }

      random_orientation() {
        return this.generate_boolean() ? -1 : 1;
      }

      count_attached_child(branch_orientation) {
        this.attached_child = branch_orientation;
      }
    }

    // Tree class
    class Tree {
      constructor(begin, end, alpha = 255) {
        this.main_branch = new Branch(begin, end, this);
        this.main_branch.branch_maturity_age = random(40, 110);
        this.branches = [];
        this.branches.push(this.main_branch);
        this.age = 1;
        this.alpha = alpha;
        this.tree_food = 8000;
        this.isGrowing = true;
        this.branchSplits = 0;
        this.maxBranchSplits = 20;
      }

      create_new_branch(parent_branch, orientation) {
        let dir_branch = p5.Vector.sub(parent_branch.end, parent_branch.begin);
        dir_branch.rotate(random(PI / 6 * orientation, PI / 8 * orientation));
        dir_branch.setMag(0.1);
        let branch_end = p5.Vector.add(parent_branch.end, dir_branch);
        let new_branch = new Branch(parent_branch.end, branch_end, this);
        return new_branch;
      }

      grows() {
        if (!this.isGrowing) return;
        
        for (let i = this.branches.length - 1; i >= 0; i--) {
          let current_branch = this.branches[i];
          current_branch.update(this.tree_food);
          let new_branch;
          if (current_branch.is_mature) {
            if (!current_branch.has_child && this.branchSplits < this.maxBranchSplits) {
              let branch_orientation = current_branch.random_orientation();
              new_branch = this.create_new_branch(current_branch, branch_orientation);
              this.branches.push(new_branch);
              current_branch.count_attached_child(branch_orientation);
              current_branch.has_child = true;
              this.branchSplits++;
              
              if (current_branch.will_split && this.branchSplits < this.maxBranchSplits) {
                new_branch = this.create_new_branch(current_branch, current_branch.attached_child * -1);
                this.branches.push(new_branch);
                current_branch.has_child = true;
                new_branch.count_attached_child();
                this.branchSplits++;
              }
              
              if (this.branchSplits >= this.maxBranchSplits) {
                this.isGrowing = false;
              }
            }
          }
        }
        if (this.tree_food > 0) {
          this.tree_food -= 10;
        } else {
          this.isGrowing = false;
        }
      }

      shows() {
        const isDark = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
        for (let i = 0; i < this.branches.length; i++) {
          stroke(isDark ? this.alpha : 255 - this.alpha);
          strokeWeight(this.branches[i].branch_diameter);
          line(
            this.branches[i].begin.x,
            this.branches[i].begin.y,
            this.branches[i].end.x,
            this.branches[i].end.y
          );
        }
      }
    }

    // P5.js sketch
    let forest = [];
    let tree;

    function setup() {
      let canvas = createCanvas(windowWidth, windowHeight);
      canvas.style('position', 'fixed');
      canvas.style('top', '0px');
      canvas.style('right', '0px');
      canvas.style('z-index', '-1');
      canvas.style('opacity', '0.3');
      
      // Start tree from top right corner growing downward
      let random_abciss = width - 200;
      let depth = 255;
      let seed_start_x = createVector(random_abciss, 0);
      let seed_start_y = createVector(random_abciss, 1);
      tree = new Tree(seed_start_x, seed_start_y, depth);
      forest.push(tree);
    }

    function draw() {
      const isDark = document.documentElement.classList.contains('dark') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
      background(isDark ? 0 : 255);
      
      for (let i = 0; i < forest.length; i++) {
        forest[i].grows();
        forest[i].shows();
      }
      frameRate(60);
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  </script>
</body>
</html>`;
  }
}