import { createCode } from './asset-code'

export type AssetDownloadFormat = 'css' | 'html' | 'react' | 'all'

export type DownloadableAsset = {
  name: string
  preview: string
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function toComponentName(value: string): string {
  return value
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function downloadFile(
  content: string,
  filename: string,
  mimeType: string,
): void {
  const blob = new Blob([content], {
    type: `${mimeType};charset=utf-8`,
  })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  window.setTimeout(() => {
    URL.revokeObjectURL(url)
  }, 1000)
}

export function getAssetSource(asset: DownloadableAsset): {
  css: string
  html: string
  react: string
} {
  const source = createCode({
    name: asset.name,
    preview: asset.preview,
  })

  const slug = toSlug(asset.name)

  // Make the React example import the matching CSS filename.
  const react = source.react.replace(
    /import\s+['"][^'"]+\.css['"]/,
    `import './${slug}.css'`,
  )

  return {
    css: source.css,
    html: source.html,
    react,
  }
}

export function downloadAssetSource(
  asset: DownloadableAsset,
  format: AssetDownloadFormat,
): void {
  const source = getAssetSource(asset)
  const slug = toSlug(asset.name)
  const componentName = toComponentName(asset.name)

  if (format === 'css') {
    downloadFile(source.css, `${slug}.css`, 'text/css')
    return
  }

  if (format === 'html') {
    downloadFile(source.html, `${slug}.html`, 'text/html')
    return
  }

  if (format === 'react') {
    downloadFile(source.react, `${componentName}.tsx`, 'text/plain')
    return
  }

  const bundle = [
    `MOTIONLAB — ${asset.name}`,
    '========================================',
    '',
    'CSS SOURCE',
    '----------------------------------------',
    source.css,
    '',
    'HTML SOURCE',
    '----------------------------------------',
    source.html,
    '',
    'REACT / TSX SOURCE',
    '----------------------------------------',
    source.react,
    '',
    '========================================',
    'Generated with MotionLab',
  ].join('\n')

  downloadFile(bundle, `${slug}-source-bundle.txt`, 'text/plain')
}
