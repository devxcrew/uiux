export const uiuxGalleryModule = {
  id: 'uiux.web.gallery',
  owner: "devkits/uiux/web/modules/gallery",
  version: '1.3.1',
  dependencies: ['@devxcrew/react-ui'],
  contracts: ['uiux.gallery.browser'],
  events: { published: [], consumed: [] },
} as const
