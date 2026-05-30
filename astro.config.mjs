// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const [githubOwner, githubRepo] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserPage = githubOwner && githubRepo && githubRepo.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;

// https://astro.build/config
export default defineConfig({
  site: githubOwner ? `https://${githubOwner}.github.io` : undefined,
  base: isGitHubActions && githubRepo && !isUserPage ? `/${githubRepo}` : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
