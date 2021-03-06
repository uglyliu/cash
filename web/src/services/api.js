import { stringify } from 'qs';
import request from '@/utils/request';


export async function Settings() {
  return request('/api/extra/settings/');
}

export async function Login(params) {
  return request('/api/account/login/', {
    method: 'POST',
    body: params,
  });
}

export async function UserDetail() {
  return request('/api/account/detail/', {
    isAuth: true,
  });
}

export async function Links() {
  return request('/api/link/');
}

export async function Tags() {
  return request('/api/tag/');
}

export async function HotArticles() {
  return request('/api/article/hot/');
}

export async function TopicArticles() {
  return request('/api/article/topic/');
}

export async function Articles(params) {
  return request(`/api/article/?${stringify(params)}`);
}

export async function Archive() {
  return request('/api/article/archive/');
}

//  管理后台API

export async function AdminLinks(params) {
  return request(`/api/admin/link/?${stringify(params)}`, {
    isAuth: true,
  });
}

export async function createLink(params) {
  return request('/api/admin/link/', {
    method: 'POST',
    body: params,
    isAuth: true,
  });
}

export async function updateLink(params, id) {
  return request(`/api/admin/link/${id}/`, {
    method: 'PUT',
    body: params,
    isAuth: true,
  });
}

export async function AdminUser(params) {
  return request(`/api/admin/account/?${stringify(params)}`, {
    isAuth: true,
  });
}

export async function updateUser(params, id) {
  return request(`/api/admin/account/${id}/`, {
    method: 'PUT',
    body: params,
    isAuth: true,
  });
}

export async function adminArticle(params) {
  return request(`/api/admin/article/?${stringify(params)}`, {
    isAuth: true,
  });
}

export async function adminSetting() {
  return request('/api/admin/settings/', {
    isAuth: true,
  });
}

export async function adminUpdateSetting(params) {
  return request('/api/admin/settings/', {
    method: 'POST',
    body: params,
    isAuth: true,
  });
}

export async function articleDetail(url) {
  return request(`/api/article/${url}/`);
}

export async function articleDetailComment(url) {
  return request(`/api/article/${url}/comment/`);
}

export async function tagArticles(name) {
  return request(`/api/tag/${name}/`);
}

export async function AdminTags(params) {
  return request(`/api/admin/tag/?${stringify(params)}`, {
    isAuth: true,
  });
}

export async function createTag(params) {
  return request('/api/admin/tag/', {
    method: 'POST',
    body: params,
    isAuth: true,
  });
}

export async function updateTag(params, id) {
  return request(`/api/admin/tag/${id}/`, {
    method: 'PUT',
    body: params,
    isAuth: true,
  });
}

export async function createComment(params) {
  return request('/api/comment/', {
    method: 'POST',
    body: params,
    isAuth: true,
  });
}

export async function adminArticleCreate(params) {
  return request('/api/admin/article/', {
    method: 'POST',
    isAuth: true,
    body: params,
  });
}

export async function adminArticleCreateTags() {
  return request('/api/admin/article/tags/', {
    isAuth: true,
  });
}

export function uploadImage(params) {
  return request('/api/extra/image/', {
    method: 'POST',
    isAuth: true,
    body: params,
  });
}

export function adminArticleCreateDetail(params) {
  return request(`/api/admin/article/${params}/`, {
    isAuth: true,
  });
}

export async function adminArticleUpdate(params, id) {
  return request(`/api/admin/article/${id}/`, {
    method: 'PUT',
    isAuth: true,
    body: params,
  });
}
