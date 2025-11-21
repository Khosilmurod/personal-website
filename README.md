# Portfolio Website

A clean, OOP-friendly TypeScript portfolio built with Astro that lets you manage content from the terminal and auto-deploy.

## 🚀 Project Structure

```
my-portfolio/
├── src/
│   ├── models/           # Domain models (Project, Experience)
│   │   ├── Project.ts
│   │   └── Experience.ts
│   ├── repos/            # Repository layer (data access)
│   │   ├── ContentRepo.ts
│   │   ├── FileProjectRepo.ts
│   │   └── FileExperienceRepo.ts
│   ├── services/         # Business logic
│   │   └── PortfolioService.ts
│   └── pages/
│       └── index.astro   # Main portfolio page
├── data/                 # JSON data files
│   ├── projects.json
│   └── experience.json
├── scripts/              # CLI management tools
│   ├── add-project.ts
│   ├── remove-project.ts
│   └── list-content.ts
└── package.json
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

### Add a project
```bash
npm run add:project -- <slug> <title> <description>

# Example:
npm run add:project -- mesh-nodes "mesh nodes" "a solar-powered mesh that helps people learn offline"
```

### Remove a project
```bash
npm run remove:project -- <slug>

# Example:
npm run remove:project -- mesh-nodes
```

### List all content
```bash
npm run list
```

## 🏗️ Architecture

This project follows clean architecture principles:

- **Models** (`src/models/`): Domain entities (Project, Experience)
- **Repositories** (`src/repos/`): Data access layer with file-based storage
- **Services** (`src/services/`): Business logic layer
- **Pages** (`src/pages/`): Presentation layer (Astro components)

The repository pattern allows easy swapping of data sources (file → database) without changing business logic.

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Import repository in Vercel
3. Framework: Astro
4. Auto-deploys on every push

### Netlify
1. Push to GitHub 
2. Import repository in Netlify
3. Build command: `astro build`
4. Publish directory: `dist/`

## 🔧 Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **tsx** - TypeScript execution for CLI scripts
- **File-based storage** - Simple JSON files for data

## 📁 Data Structure

### Projects (`data/projects.json`)
```json
[
  {
    "slug": "project-slug",
    "title": "Project Title", 
    "description": "Project description"
  }
]
```

### Experience (`data/experience.json`)
```json
[
  {
    "company": "Company Name",
    "role": "Your Role",
    "year": "2025"
  }
]
```

## 🎨 Customization

The main styling is in `src/pages/index.astro`. You can easily:

- Update the CSS styles
- Modify the layout structure
- Add new sections
- Integrate with CSS frameworks

The content is dynamically loaded from the service layer, so your styling will automatically apply to all projects and experience entries.
