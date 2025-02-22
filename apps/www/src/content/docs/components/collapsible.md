---
title: Collapsible
description: An interactive component which expands/collapses a panel.
source: apps/www/registry/default/ui/collapsible
primitive: https://www.reka-ui.com/docs/components/collapsible.html
---

<ComponentPreview name="CollapsibleDemo" />

## Installation

```bash
npx shadcn-vue@latest add collapsible
```

## Usage

```vue
<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution
      required.
    </CollapsibleContent>
  </Collapsible>
</template>
```
