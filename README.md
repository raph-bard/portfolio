Projet Next.js avec Tailwind CSS et Storybook

Ce projet a été généré automatiquement avec un script bash.

✅ Déjà installé :
- Next.js avec App Router
- TypeScript
- Tailwind CSS
- Autoprefixer
- Alias @/
- Composant Card de démonstration (variant light)
- Fichier postcss.config.mjs propre

🛠 Étapes restantes pour Storybook :
1. Initialiser Storybook :
   npx storybook@latest init

2. Supprimer les stories par défaut :
   rm -rf src/stories

3. Lier le CSS global dans Storybook (dans .storybook/preview.ts) :
   import '../src/app/globals.css';

4. Lancer Storybook :
   npm run storybook
