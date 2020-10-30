export interface GiphyPage {
  data: Gif[];
  pagination: Pagination;
  meta: GiphyMeta;
}

export interface GiphyMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Gif {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user?: User;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Analytics {
  onload: Onload;
  onclick: Onload;
  onsent: Onload;
}

export interface Onload {
  url: string;
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
}

export interface Images {
  original: MetaImage;
  downsized: MetaImage;
  downsized_large: MetaImage;
  downsized_medium: MetaImage;
  downsized_small: MetaImage;
  downsized_still: MetaImage;
  fixed_height: MetaImage;
  fixed_height_downsampled: MetaImage;
  fixed_height_small: MetaImage;
  fixed_height_small_still: MetaImage;
  fixed_height_still: MetaImage;
  fixed_width: MetaImage;
  fixed_width_downsampled: MetaImage;
  fixed_width_small: MetaImage;
  fixed_width_small_still: MetaImage;
  fixed_width_still: MetaImage;
  looping: MetaImage;
  original_still: MetaImage;
  original_mp4: MetaImage;
  preview: MetaImage;
  preview_gif: MetaImage;
  preview_webp: MetaImage;
  hd?: MetaImage;
  '480w_still': MetaImage;
}

export interface MetaImage {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

// export function createGiphy(params: Partial<Giphy>) {
//   return {} as Giphy;
// }
