import hyRequest from '@/services';
export function getBanners() {
  return hyRequest.get({
    url: '/banner'
  });
}
