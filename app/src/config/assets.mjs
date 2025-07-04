const VITE_MANIFEST_PATH = process.cwd() + '/public/.vite/manifest.json'

const ASSET_DIRECTORIES = [
    '/.vite',
    '/assets',
    '/css',
    '/img'
]

const STATIC_ASSETS = {
    css: '',
    js: '',
}

export {
    VITE_MANIFEST_PATH,
    STATIC_ASSETS,
    ASSET_DIRECTORIES
}