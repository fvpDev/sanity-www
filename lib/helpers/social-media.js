import {
  Facebook,
  Instagram
} from '@icons-pack/react-simple-icons';
import {
  SOCIAL_MEDIA_FB_USERNAME,
  SOCIAL_MEDIA_IG_USERNAME
} from '../constants/social-media'

export function getSocialMedia(id, w, h, color = "currentColor") {
  switch (id) {
    case 'fb':
      return {
        name: 'facebook',
        path: `https://www.facebook.com/${SOCIAL_MEDIA_FB_USERNAME}/`,
        icon: <Facebook width={w} height={h} color={color} />
      }
      break;
    case 'ig':
      return {
        name: 'instagram',
        path: `https://www.instagram.com/${SOCIAL_MEDIA_IG_USERNAME}/`,
        icon: <Instagram width={w} height={h} color={color} />
      }
      break;
  }
}
