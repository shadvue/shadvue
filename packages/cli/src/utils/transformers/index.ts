import type { Config } from '@/src/utils/get-config'
import type { registryBaseColorSchema } from '@/src/utils/registry/schema'
import type * as z from 'zod'
import { getRegistryIcons } from '@/src/utils/registry'
import { transformCssVars } from '@/src/utils/transformers/transform-css-vars'
import { transformImport } from '@/src/utils/transformers/transform-import'
import { transformSFC } from '@/src/utils/transformers/transform-sfc'
import { transformTwPrefix } from '@/src/utils/transformers/transform-tw-prefix'
import { transform as metaTransform } from 'vue-metamorph'
import { transformIcons } from './transform-icons'

export interface TransformOpts {
  filename: string
  raw: string
  config: Config
  baseColor?: z.infer<typeof registryBaseColorSchema>
}

export async function transform(opts: TransformOpts) {
  const source = await transformSFC(opts)

  const registryIcons = await getRegistryIcons()

  return metaTransform(source, opts.filename, [
    transformImport(opts),
    transformCssVars(opts),
    transformTwPrefix(opts),
    transformIcons(opts, registryIcons),
  ]).code
}
