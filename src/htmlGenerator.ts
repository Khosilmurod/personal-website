import { SiteData, Project, Experience, Writing } from './types';

export class HTMLGenerator {
  private data: SiteData;

  constructor(data: SiteData) {
    this.data = data;
  }



  private generateHeader(): string {
    return `
  <!-- theme toggle - fixed at right edge -->
  <div class="fixed right-0 z-30 flex items-center" style="top: 12px; padding-right: 32px;">
    <span id="theme-toggle" onclick="toggleDarkMode()" class="cursor-pointer hover:opacity-80" style="font-size: 16px;">☀️</span>
  </div>

  <!-- header -->
  <header class="fixed top-0 left-0 right-0 z-20 backdrop-blur" style="background: var(--header-bg); border-bottom: 1px solid var(--header-border);">
    <div class="mx-auto w-full max-w-[var(--container)] px-5 py-3 flex items-center">
      <a href="#top" class="flex items-center gap-2 hover:opacity-80" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <span class="inline-block h-5 w-5 rounded-md bg-black dark:bg-white"></span>
        <span style="font-weight: 900; color: var(--text);">${this.data.personal.name}</span>
      </a>
      <div class="flex-1"></div>
      <nav class="flex items-center gap-6" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <a href="about.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">about</a>
        <a href="experience.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">experience</a>
        <a href="projects.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">projects</a>
        <a href="writing.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">writing</a>
      </nav>
    </div>
  </header>`;
  }

  private generateHeroSection(): string {
    return `
    <!-- hero / about -->
    <section class="py-4 md:py-6 space-y-3 p-6 rounded-xl card mb-2">
      <div class="flex items-start justify-between">
        <div class="flex-1 pr-6">
          <h1 class="text-2xl md:text-3xl font-bold mb-2" style="color: var(--text);">khosilmurod abdukholikov</h1>
          <p class="section-title">${this.data.personal.title}</p>
          <div class="flex items-center gap-3 mt-3">
        <a href="${this.data.personal.github}" target="_blank" rel="noopener noreferrer" class="transition-colors hover:opacity-80" style="color: var(--text-secondary);" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="${this.data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="transition-colors hover:opacity-80" style="color: var(--text-secondary);" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
          </div>
          <div class="flex flex-wrap items-center gap-2 mt-3">
            <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 rounded-md hover:opacity-80 transition-opacity">yale '27</a>
            <a href="https://interactive-machines.gitlab.io/" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-200 rounded-md hover:opacity-80 transition-opacity">interactive machines group</a>
            <a href="mailto:${this.data.personal.email}" class="px-2.5 py-1 text-xs font-semibold bg-gray-50 dark:bg-gray-900/30 text-gray-700 dark:text-gray-200 rounded-md hover:opacity-80 transition-opacity cursor-pointer" aria-label="Send email">${this.data.personal.email}</a>
          </div>
        </div>
        <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-gray-500 dark:text-gray-400">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <p class="text-base max-w-prose" style="color: var(--text);">i am a computer science student at yale with a love for building systems that feel simple and fast. i grew up fascinated by how technology connects people, and now i focus on creating ai tools and platforms that are both reliable and delightful to use. my journey has been about constant learning, from <span class="highlight">operating systems</span> to large-scale <span class="highlight">ai assistants</span>, always with the goal of making complex things feel effortless.</p>
    </section>`;
  }

  private generateProjectCard(project: Project): string {
    const hiddenClass = project.hidden ? ' hidden' : '';
    return `
        <li class="${hiddenClass} flex items-baseline text-sm relative navigable-item cursor-pointer hover:bg-opacity-50 transition-all" data-url="${project.url || '#'}">
          <span class="nav-indicator absolute -left-8 opacity-0 transition-opacity">→</span>
          <span class="font-medium w-80 flex-shrink-0">${project.title}</span>
          <span class="flex-1 project-fade" style="color: var(--text-secondary);" title="${project.description}">${project.description}</span>
        </li>`;
  }

  private generateProjectsSection(): string {
    const projectCards = this.data.projects.map(project => this.generateProjectCard(project)).join('');
    
    return `
    <!-- projects -->
    <section id="projects" class="py-6 md:py-8 space-y-6 p-6 rounded-xl card mb-2">
      <p class="section-title" style="color: var(--muted);">projects</p>
      <ul id="project-list" class="space-y-3">${projectCards}
      </ul>
      <div class="pt-4">
        <button id="show-more" class="text-sm transition-colors font-medium hover:opacity-80" style="color: var(--text-tertiary);">
          + more projects
        </button>
      </div>
    </section>`;
  }

  private generateExperienceItem(exp: Experience): string {
    return `
        <li class="flex items-baseline text-sm relative navigable-item cursor-pointer hover:bg-opacity-50 transition-all" data-url="${exp.url || '#'}">
          <span class="nav-indicator absolute -left-8 opacity-0 transition-opacity">→</span>
          <span class="font-medium w-80 flex-shrink-0">${exp.company}</span>
          <span class="flex-1" style="color: var(--text-secondary);">${exp.position} · ${exp.year}</span>
        </li>`;
  }

  private generateExperienceSection(): string {
    const experienceItems = this.data.experience.map(exp => this.generateExperienceItem(exp)).join('');
    
    return `
    <!-- experience -->
    <section id="experience" class="py-6 md:py-8 space-y-6 p-6 rounded-xl card mb-2">
      <p class="section-title" style="color: var(--muted);">experience</p>
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
    <section id="writing" class="py-6 md:py-8 space-y-3 p-6 rounded-xl card mb-2">
      <p class="section-title" style="color: var(--muted);">writing</p>
      <ul class="space-y-2 text-sm">${writingItems}
      </ul>
    </section>`;
  }

  private generateContactSection(): string {
    return `
    <!-- contact -->
    <section id="contact" class="py-6 md:py-8 space-y-3 p-6 rounded-xl card mb-8">
      <p class="section-title">contact</p>
      <p class="text-base max-w-prose" style="color: var(--text);">say hi at <a href="mailto:m.abdukholikov@yale.edu" class="underline hover:opacity-80" style="color: var(--text);">m.abdukholikov@yale.edu</a> or find me on <a href="${this.data.personal.linkedin}" class="hover:underline" style="color: var(--text);">linkedin</a> and <a href="${this.data.personal.github}" class="hover:underline" style="color: var(--text);">github</a>.</p>
    </section>`;
  }

  generateBlogPost(writing: Writing): string {
    const content = writing.content || this.generateDefaultBlogContent(writing);
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${writing.title} - ${this.data.personal.name}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class'
    }
  </script>
  ${this.getStylesForBlogPost()}
</head>
<body>
  <!-- theme toggle - fixed at right edge -->
  <div class="fixed right-0 z-30 flex items-center" style="top: 12px; padding-right: 32px;">
    <span id="theme-toggle" onclick="toggleDarkMode()" class="cursor-pointer hover:opacity-80" style="font-size: 16px;">☀️</span>
  </div>

  <!-- header -->
  <header class="fixed top-0 left-0 right-0 z-20 backdrop-blur" style="background: var(--header-bg); border-bottom: 1px solid var(--header-border);">
    <div class="mx-auto w-full max-w-[var(--container)] px-5 py-3 flex items-center">
      <a href="../index.html" class="flex items-center gap-2 hover:opacity-80" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <span class="inline-block h-5 w-5 rounded-md bg-black dark:bg-white"></span>
        <span style="font-weight: 900; color: var(--text);">${this.data.personal.name}</span>
      </a>
      <div class="flex-1"></div>
      <nav class="flex items-center gap-6" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <a href="../about.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">about</a>
        <a href="../experience.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">experience</a>
        <a href="../projects.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">projects</a>
        <a href="../writing.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">writing</a>
      </nav>
    </div>
  </header>

  <main id="top" class="mx-auto w-full max-w-[var(--container)] px-5 pt-16">
    <article class="py-6 md:py-8 space-y-6 p-6 rounded-xl card">
      <header class="space-y-3">
        <h1 class="text-3xl md:text-4xl font-bold" style="color: var(--text); text-transform: none;">${writing.title}</h1>
        <div class="text-sm" style="color: var(--text-secondary);">
          <time>published recently</time>
        </div>
      </header>
      
      <div class="prose max-w-none" style="color: var(--text);">
        ${content}
      </div>
    </article>
  </main>
  
  ${this.generateJavaScript()}
</body>
</html>`;
  }

  private generateDefaultBlogContent(writing: Writing): string {
    return `
      <p>this is a placeholder for the blog post "${writing.title}". 
      you can replace this content with markdown or html to create your actual blog post.</p>
      
      <p>some ideas for content structure:</p>
      <ul>
        <li>introduction to the topic</li>
        <li>main points or sections</li>
        <li>code examples if relevant</li>
        <li>conclusions and takeaways</li>
      </ul>
      
      <p>the styling will automatically match your main site theme, 
      so you can focus on writing great content.</p>
    `;
  }

  private getStylesForBlogPost(): string {
    return `
  <style>
    :root {
      --container: 46rem;
      --bg: #ffffff;
      --text: #18181b;
      --text-secondary: #52525b;
      --text-tertiary: #71717a;
      --muted: #a1a1aa;
      --card-bg: rgba(255,255,255,0.4);
      --card-border: transparent;
      --header-bg: rgba(255,255,255,0.95);
      --header-border: rgba(0,0,0,0.05);
      --canvas-opacity: 0.5;
    }
    .dark {
      --bg: #0f0f0f;
      --text: #ffffff;
      --text-secondary: #a1a1aa;
      --text-tertiary: #71717a;
      --muted: #52525b;
      --card-bg: rgba(15,15,15,0.25);
      --card-border: transparent;
      --header-bg: rgba(15,15,15,0.95);
      --header-border: rgba(255,255,255,0.1);
      --canvas-opacity: 0.2;
    }
    body { background: var(--bg); color: var(--text); }
    a, p, span, li { color: var(--text); }
    body, h1, h2, h3, h4, h5, h6, p, a, li, span { font-family: 'EB Garamond', serif; text-transform: lowercase; font-size: 1.05em; font-weight: 500; }
    .section-title { letter-spacing:.15em; text-transform:lowercase; font-size:12px; font-weight:700; color: var(--muted); }
    .nav-text { font-family: 'EB Garamond', serif !important; letter-spacing: 0.15em !important; text-transform: lowercase !important; font-size: 12px !important; font-weight: 700 !important; color: var(--text) !important; }
    .card { 
      background: var(--card-bg); 
      border: 1px solid var(--card-border); 
      border-radius: 12px; 
      backdrop-filter: blur(12px) saturate(180%);
      -webkit-backdrop-filter: blur(12px) saturate(180%);
    }
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
        transparent 0%,
        var(--card-bg) 100%
      );
      pointer-events: none;
    }
    .navigable-item.active .nav-indicator {
      opacity: 1;
    }
    .navigable-item:hover {
      background: var(--card-bg);
      border-radius: 6px;
    }
    .highlight {
      padding: 0 0.25rem;
      display: inline;
      position: relative;
    }
    .highlight::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: rgba(34, 197, 94, 0.15);
      border-radius: 0.125rem;
      z-index: -1;
    }
    .dark .highlight::after {
      background: rgba(34, 197, 94, 0.2);
    }
    
    /* Blog-specific styling */
    .prose {
      line-height: 1.7;
    }
    .prose p {
      margin-bottom: 1.5rem;
    }
    .prose ul {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    .prose li {
      margin-bottom: 0.5rem;
    }
    .prose h1, .prose h2, .prose h3 {
      margin-bottom: 1rem;
      margin-top: 2rem;
      font-weight: 600;
      text-transform: none;
    }
    .prose code {
      background: var(--card-bg);
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-size: 0.9em;
    }
  </style>`;
  }

  generateAboutPage(): string {
    return this.generateBasePage('about', 'about me', '<p>coming soon...</p>');
  }

  generateExperiencePage(): string {
    return this.generateBasePage('experience', 'experience', '<p>coming soon...</p>');
  }

  generateProjectsPage(): string {
    return this.generateBasePage('projects', 'projects', '<p>coming soon...</p>');
  }

  generateWritingPage(): string {
    return this.generateBasePage('writing', 'writing', '<p>coming soon...</p>');
  }

  private generateBasePage(pageId: string, title: string, content: string): string {
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} — ${this.data.personal.name}</title>
  <meta name="description" content="${title} page for ${this.data.personal.name}" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.10.0/p5.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class'
    }
  </script>
  ${this.getStylesForBlogPost()}
</head>
<body class="antialiased" style="background: var(--bg); color: var(--text);">
  <!-- theme toggle - fixed at right edge -->
  <div class="fixed right-0 z-30 flex items-center" style="top: 12px; padding-right: 32px;">
    <span id="theme-toggle" onclick="toggleDarkMode()" class="cursor-pointer hover:opacity-80" style="font-size: 16px;">☀️</span>
  </div>

  <!-- header -->
  <header class="fixed top-0 left-0 right-0 z-20 backdrop-blur" style="background: var(--header-bg); border-bottom: 1px solid var(--header-border);">
    <div class="mx-auto w-full max-w-[var(--container)] px-5 py-3 flex items-center">
      <a href="index.html" class="flex items-center gap-2 hover:opacity-80" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <span class="inline-block h-5 w-5 rounded-md bg-black dark:bg-white"></span>
        <span style="font-weight: 900; color: var(--text);">${this.data.personal.name}</span>
      </a>
      <div class="flex-1"></div>
      <nav class="flex items-center gap-6" style="letter-spacing: 0.15em; text-transform: lowercase; font-size: 12px; font-weight: 900; color: var(--text);">
        <a href="about.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">about</a>
        <a href="experience.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">experience</a>
        <a href="projects.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">projects</a>
        <a href="writing.html" class="hover:opacity-80" style="font-weight: 900; color: var(--text);">writing</a>
      </nav>
    </div>
  </header>

  <main id="top" class="mx-auto w-full max-w-[var(--container)] px-5 pt-16">
    <section class="py-4 md:py-6 space-y-3 p-6 rounded-xl card mb-2">
      <h1 class="text-2xl md:text-3xl font-bold mb-2" style="color: var(--text); text-transform: none;">${title}</h1>
      <div class="prose max-w-none" style="color: var(--text);">
        ${content}
      </div>
    </section>
  </main>

  ${this.generateJavaScript()}
  ${this.generateTreeScript()}
</body>
</html>`;
  }

  private generateTreeScript(): string {
    return `
  <!-- P5.js Fractal Tree -->
  <script>
    // Branch class
    class Branch {
      constructor(begin, end, treeRef) {
        this.begin = begin;
        this.end = end;
        this.age = 1;
        this.branch_diameter = 0.5; // Start thinner (was 1)
        // faster maturity for quicker branching
        this.branch_maturity_age = random(30, 80);
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
            // faster per-frame growth
            this.end.add(branch_length.setMag(1.2));
            
            // Add downward bias (stronger as tree grows)
            const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
            const downwardBias = 0.03 + (progress * 0.05); // Starts at 0.03, increases to 0.08
            this.end.y += downwardBias;
            
            this.will_split = this.generate_boolean();
          }
        }
      }

      update_branch_diameter() {
        // slower diameter growth for a gentler animation
        this.branch_diameter += 0.002;
      }

      is_branch_mature() {
        if (this.age >= this.branch_maturity_age) {
          this.is_mature = true;
        }
      }

      generate_boolean() {
        // Dynamic probability: moderate branching - starts at 15% (0.85 trigger), ends at 95% (0.05 trigger)
        const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
        const progressCurved = Math.pow(progress, 0.3); // Slightly slower curve
        const true_trigger = 0.85 - (progressCurved * 0.80); // 0.85 -> 0.05 (more branching)
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
        // faster initial split
        this.main_branch.branch_maturity_age = random(40, 100);
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
          // consume food faster for quicker growth
          this.tree_food -= 4;
        } else {
          this.isGrowing = false;
        }
      }

      shows() {
        const isDark = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
        for (let i = 0; i < this.branches.length; i++) {
          // Use a light stroke in dark mode, darker stroke in light mode
          if (isDark) {
            stroke(230, 230, 230, 200);
          } else {
            stroke(40, 40, 40, 200);
          }
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
      // higher frame rate for faster animation
      frameRate(60);
    }

    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  </script>`;
  }

  private generateFooter(): string {
    return ``;
  }

  private generateJavaScript(): string {
    return `
  <script>
    // Dark mode functions
    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      updateThemeIcon();
    }

    function setLightMode() {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateThemeIcon();
    }

    function setDarkMode() {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateThemeIcon();
    }

    function updateThemeIcon() {
      const icon = document.getElementById('theme-toggle');
      if (icon) {
        icon.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '☀️';
      }
    }

    // Initialize theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
    updateThemeIcon();

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
    
    // Click navigation for list items
    document.addEventListener('click', (e) => {
      const clickedItem = e.target.closest('.navigable-item');
      if (clickedItem) {
        const url = clickedItem.getAttribute('data-url');
        if (url && url !== '#' && url !== 'undefined') {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
        
        // Update active state
        const visibleItems = Array.from(document.querySelectorAll('.navigable-item:not(.hidden)'));
        visibleItems.forEach(item => item.classList.remove('active'));
        clickedItem.classList.add('active');
        
        // Update currentIndex for keyboard navigation consistency
        currentIndex = visibleItems.indexOf(clickedItem);
      }
    });
  </script>`;
  }

  public generateHTML(): string {
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
  <script>
    tailwind.config = {
      darkMode: 'class'
    }
  </script>
  <style>
    :root {
      --container: 46rem;
      --bg: #ffffff;
      --text: #18181b;
      --text-secondary: #52525b;
      --text-tertiary: #71717a;
      --muted: #a1a1aa;
      --card-bg: rgba(255,255,255,0.4);
      --card-border: transparent;
      --header-bg: rgba(255,255,255,0.95);
      --header-border: rgba(0,0,0,0.05);
      --canvas-opacity: 0.5;
    }
    .dark {
      --bg: #0f0f0f;
      --text: #ffffff;
      --text-secondary: #a1a1aa;
      --text-tertiary: #71717a;
      --muted: #52525b;
      --card-bg: rgba(15,15,15,0.25);
      --card-border: transparent;
      --header-bg: rgba(15,15,15,0.95);
      --header-border: rgba(255,255,255,0.1);
      --canvas-opacity: 0.2;
    }
    body { background: var(--bg); color: var(--text); }
    a, p, span, li { color: var(--text); }
    body, h1, h2, h3, h4, h5, h6, p, a, li, span { font-family: 'EB Garamond', serif; text-transform: lowercase; font-size: 1.05em; font-weight: 500; }
    .section-title { letter-spacing:.15em; text-transform:lowercase; font-size:12px; font-weight:700; color: var(--muted); }
    .nav-text { font-family: 'EB Garamond', serif !important; letter-spacing: 0.15em !important; text-transform: lowercase !important; font-size: 12px !important; font-weight: 700 !important; color: var(--text) !important; }
    .card { 
      background: var(--card-bg); 
      border: 1px solid var(--card-border); 
      border-radius: 12px; 
      backdrop-filter: blur(12px) saturate(180%);
      -webkit-backdrop-filter: blur(12px) saturate(180%);
    }
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
        transparent 0%,
        var(--card-bg) 100%
      );
      pointer-events: none;
    }
    .navigable-item.active .nav-indicator {
      opacity: 1;
    }
    .navigable-item:hover {
      background: var(--card-bg);
      border-radius: 6px;
    }
    .highlight {
      padding: 0 0.25rem;
      display: inline;
      position: relative;
    }
    .highlight::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: rgba(34, 197, 94, 0.15);
      border-radius: 0.125rem;
      z-index: -1;
    }
    .dark .highlight::after {
      background: rgba(34, 197, 94, 0.2);
    } position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      z-index: -1 !important;
      opacity: 0.3;
    }
  </style>
</head>
<body class="antialiased" style="background: var(--bg); color: var(--text);">
${this.generateHeader()}

  <main id="top" class="mx-auto w-full max-w-[var(--container)] px-5 pt-16">
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
        // faster maturity for quicker branching
        this.branch_maturity_age = random(30, 80);
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
            // faster per-frame growth
            this.end.add(branch_length.setMag(1.2));
            
            // Add downward bias (stronger as tree grows)
            const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
            const downwardBias = 0.03 + (progress * 0.05); // Starts at 0.03, increases to 0.08
            this.end.y += downwardBias;
            
            this.will_split = this.generate_boolean();
          }
        }
      }

      update_branch_diameter() {
        // slower diameter growth for a gentler animation
        this.branch_diameter += 0.002;
      }

      is_branch_mature() {
        if (this.age >= this.branch_maturity_age) {
          this.is_mature = true;
        }
      }

      generate_boolean() {
        // Dynamic probability: moderate branching - starts at 15% (0.85 trigger), ends at 95% (0.05 trigger)
        const progress = this.treeRef ? this.treeRef.branchSplits / this.treeRef.maxBranchSplits : 0;
        const progressCurved = Math.pow(progress, 0.3); // Slightly slower curve
        const true_trigger = 0.85 - (progressCurved * 0.80); // 0.85 -> 0.05 (more branching)
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
        // faster initial split
        this.main_branch.branch_maturity_age = random(40, 100);
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
          // consume food faster for quicker growth
          this.tree_food -= 4;
        } else {
          this.isGrowing = false;
        }
      }

      shows() {
        const isDark = document.documentElement.classList.contains('dark') || 
                       window.matchMedia('(prefers-color-scheme: dark)').matches;
        for (let i = 0; i < this.branches.length; i++) {
          // Use a light stroke in dark mode, darker stroke in light mode
          if (isDark) {
            stroke(230, 230, 230, 200);
          } else {
            stroke(40, 40, 40, 200);
          }
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
      // higher frame rate for faster animation
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