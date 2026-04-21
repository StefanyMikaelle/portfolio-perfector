# Stefany Mikaelle — Backend Developer Portfolio

> Portfólio futurista e profissional de **Stefany Mikaelle da Silva Lima**, desenvolvedora backend especializada em **Kotlin** e **Java**.

Site construído com foco em performance, SEO e uma identidade visual cyberpunk/glassmorphism — pensado para destacar expertise em arquitetura de sistemas, APIs escaláveis e microsserviços.

---

## ✨ Destaques

- 🎨 **Design futurista** — dark mode, neon (roxo/ciano), glassmorphism e grid animado
- ⚡ **SSR + roteamento type-safe** com TanStack Start (React 19 + Vite 7)
- 🎭 **Animações fluidas** com Framer Motion (scroll reveals, typewriter, parallax)
- 📱 **Mobile-first** e totalmente responsivo
- 🔍 **SEO otimizado** — metadados únicos por rota, Open Graph, Twitter Cards
- 🧩 **Componentes acessíveis** baseados em shadcn/ui + Radix UI
- 🎯 **Design system** com tokens semânticos em `oklch` (Tailwind CSS v4)

---

## 🗂️ Estrutura de páginas

| Rota | Descrição |
| --- | --- |
| `/` | Home com Hero, Skills, Projetos, Arquitetura, Experiência, GitHub |
| `/about` | Sobre — trajetória, valores e stack técnica |
| `/projects` | Lista completa de projetos backend |
| `/projects/$slug` | Case study técnico (problema, arquitetura, implementação, resultados) |
| `/contact` | Formulário de contato com validação |

---

## 🛠️ Stack Técnica

**Frontend**
- [TanStack Start](https://tanstack.com/start) (React 19, SSR, file-based routing)
- [Vite 7](https://vitejs.dev/) — build & dev server
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/) — design tokens em `src/styles.css`
- [Framer Motion](https://www.framer.com/motion/) — animações
- [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) — componentes
- [Lucide React](https://lucide.dev/) — ícones
- [Zod](https://zod.dev/) + React Hook Form — validação de formulários
- [Sonner](https://sonner.emilkowal.ski/) — notificações

**Tipografia**
- Orbitron — títulos futuristas
- Space Grotesk — corpo do texto
- JetBrains Mono — trechos de código

**Deploy**
- Cloudflare Workers (via `wrangler.jsonc`)

---

## 🚀 Começando

### Pré-requisitos

- Node.js 20+
- [Bun](https://bun.sh/) (recomendado) ou npm/pnpm

### Instalação

```bash
bun install
```

### Desenvolvimento

```bash
bun run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

### Build de produção

```bash
bun run build
bun run start
```

---

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens (perfil, OG cover)
├── components/
│   ├── sections/        # Seções da home (Hero, About, Skills, Projects, ...)
│   ├── site/            # Header, Footer, ScrollProgress, BackToTop, ...
│   └── ui/              # Componentes shadcn/ui
├── data/
│   └── projects.ts      # Conteúdo dos case studies
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
├── routes/              # File-based routing (TanStack Router)
│   ├── __root.tsx       # Layout raiz + meta tags globais
│   ├── index.tsx        # Home
│   ├── about.tsx
│   ├── contact.tsx
│   ├── projects.tsx
│   └── projects.$slug.tsx
├── router.tsx           # Configuração do router
└── styles.css           # Design tokens + Tailwind v4
```

---

## 🎨 Design System

Todas as cores, sombras e gradientes são definidos como **tokens semânticos** em `src/styles.css` usando `oklch`. Os componentes consomem esses tokens via Tailwind — nunca cores hardcoded.

Principais tokens:
- `--background`, `--foreground`
- `--primary` (roxo neon), `--accent` (ciano)
- `--gradient-primary`, `--shadow-glow`
- Bordas e superfícies com glassmorphism

---

## ✏️ Personalizando o conteúdo

- **Projetos:** edite `src/data/projects.ts`
- **Foto de perfil:** substitua `src/assets/profile.jpg`
- **Imagem Open Graph:** substitua `src/assets/og-cover.jpg`
- **Experiência / Formação / Certificações:** edite os arquivos em `src/components/sections/`
- **Links sociais (GitHub, LinkedIn, e-mail):** edite `Contact.tsx`, `Footer.tsx` e `Hero.tsx`

---

## 📈 SEO & Performance

- Metadados únicos (`title`, `description`, `og:*`, `twitter:*`) por rota
- HTML semântico com hierarquia correta de headings
- Imagens otimizadas e lazy loading
- Tags de acessibilidade (alt, aria-*) nos componentes interativos

---

## 📬 Contato

- **GitHub:** [github.com](https://github.com)
- **LinkedIn:** [linkedin.com](https://linkedin.com)
- **E-mail:** stefany@example.com

---

## 📄 Licença

Este projeto é distribuído para fins de portfólio pessoal. Sinta-se à vontade para se inspirar — apenas não copie o conteúdo (textos, fotos) atribuído a Stefany Mikaelle.

---

<p align="center"><em>Building scalable systems for the future.</em></p>