---
title: CLI
description: Use the CLI to add components to your project.
---

## init

Use the `init` command to initialize configuration and dependencies for a new project.

The `init` command installs dependencies, adds the `cn` util, configures `tailwind.config.js`, and CSS variables for the project.

```bash
npx shadvue@latest init
```

You will be asked a few questions to configure `components.json`:

```:line-numbers
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes
```

### Options

```txt
Usage: shadvue init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         the components to add or a url to the component.

Options:
  -d, --defaults    use default values i.e new-york, zinc and css variables. (default: false)
  -f, --force       force overwrite of existing components.json. (default: false)
  -y, --yes         skip confirmation prompt. (default: false)
  -c, --cwd <cwd>   the working directory. defaults to the current directory.
  -h, --help       display help for command
```

## add

Use the `add` command to add components and dependencies to your project.

```bash
npx shadvue@latest add [component]
```

You will be presented with a list of components to choose from:

```txt
Which components would you like to add? › Space to select. A to toggle all.
Enter to submit.

◯  accordion
◯  alert
◯  alert-dialog
◯  aspect-ratio
◯  avatar
◯  badge
◯  button
◯  calendar
◯  card
◯  checkbox
```

### Options

```txt
Usage: shadvue add [options] [components...]

add a component to your project

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes          skip confirmation prompt. (default: false)
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd <cwd>    the working directory. defaults to the current directory.
  -a, --all          add all available components. (default: false)
  -p, --path <path>  the path to add the component to.
  -h, --help         display help for command
```

## Monorepo

In a monorepo, you can specify the path to your workspace with the `-c` or `--cwd` option.

```bash
npx shadvue@latest init -c ./apps/www
```

or

```bash
npx shadvue@latest add alert-dialog -c ./apps/www
```
