<p align="center">
<img src="https://avatars.githubusercontent.com/u/227831990?s=48&v=4" />
  <h1 align="center">
  shadvue
 </h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/shadvue"><img src="https://img.shields.io/npm/v/shadvue.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/shadvue"><img src="https://img.shields.io/npm/dm/shadvue.svg" alt="npm downloads"></a>
  <a href="https://github.com/shadvue/shadvue/blob/main/LICENSE"><img src="https://img.shields.io/github/license/shadvue/shadvue.svg" alt="license"></a>
</p>

[shadvue](https://www.shadvue.com/) is an unofficial community-led [Vue](https://vuejs.org) port of [shadcn/ui](https://ui.shadcn.com/).

> **Note** <br> **We are not affiliated with shadcn, but we did get his blessing prior to creating this project, forked from unovue/shadcn-vue** <br> This is a project born out of the need for a similar project for the vue ecosystem.

Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. **Use this to build your own component library**.

![hero](apps/www/src/public/og.png)

## ✨ Features

- 🎨 **Beautiful Components** - Carefully crafted components with attention to detail
- ♿ **Accessible** - Built with accessibility in mind using Reka UI primitives
- 🎯 **Customizable** - Easily customize components to match your design system
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in dark mode support
- 🚀 **TypeScript** - Full TypeScript support with type definitions
- 📦 **Copy & Paste** - No package dependencies, just copy and paste
- 🎭 **Framework Agnostic** - Works with Vue 3, Nuxt 3, and other Vue-based frameworks

## 🚀 Quick Start

### Installation

```bash
npx shadvue@latest init
```

### Add Components

```bash
npx shadvue@latest add button
```

### Usage

```vue
<script setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

## 📚 Documentation

[View full documentation here](https://www.shadvue.com/docs/introduction.html)

## 🏗️ Project Structure

This is a monorepo containing:

- **`packages/cli`** - The shadvue CLI tool
- **`packages/module`** - Nuxt module for shadvue
- **`apps/www`** - Documentation website
- **`apps/v4`** - Nuxt 4 demo application

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 9.6.0+

### Setup

```bash
# Clone the repository
git clone https://github.com/shadvue/shadvue.git
cd shadvue

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start documentation development server
- `pnpm build` - Build documentation
- `pnpm dev:cli` - Develop CLI in watch mode
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Credits

All credits go to these open-source works and resources:

- [**shadcn/ui**](https://ui.shadcn.com) - For creating this beautiful project and design system
- [**Shadcn Svelte**](https://shadcn-svelte.com) - For inspiration on registry implementation
- [**Reka UI**](https://reka-ui.com) - For accessible Vue primitives and components
- [**VueUse**](https://vueuse.org) - For providing many useful Vue composition utilities
- [**Radix Vue**](https://www.radix-vue.com) - For unstyled, accessible components for Vue
- [**Tailwind CSS**](https://tailwindcss.com) - For the utility-first CSS framework
- [**ahmedmayara**](https://github.com/ahmedmayara/shadvue) - For contributing many components
- [**unovue/shadcn-vue**](https://github.com/unovue/shadcn-vue) - The original project this was forked from

## 📄 License

Licensed under the [MIT License](https://github.com/shadvue/shadvue/blob/main/LICENSE).

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=shadvue/shadvue&type=Date)](https://star-history.com/#shadvue/shadvue&Date)

---

<p align="center">
  Made with ❤️ by the shadvue community
</p>
