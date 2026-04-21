# eitanfalkon.com.ar

Sitio web personal de Eitan Falkon. Deployado en Cloudflare Pages.

## Estructura

```
/
├── index.html     # Página principal (HTML + CSS inline)
├── script.js      # Email obfuscation, nav scroll, fade-in animations
├── _headers       # Security headers para Cloudflare Pages
└── README.md
```

## Stack

- HTML/CSS/JS vanilla — sin frameworks
- Fuente: Inter via Google Fonts
- Host: Cloudflare Pages (auto-deploy desde rama `main`)

## Deploy

Cada `git push` a `main` dispara un deploy automático en Cloudflare Pages.

```bash
git add .
git commit -m "feat: descripción del cambio"
git push
```
