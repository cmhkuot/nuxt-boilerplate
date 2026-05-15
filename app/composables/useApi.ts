/**
 * Composable that exposes a pre-configured $fetch instance.
 *
 * Base URL is read from NUXT_PUBLIC_API_BASE_URL (via runtimeConfig).
 * An `auth_token` cookie is automatically attached as a Bearer token when present.
 *
 * Usage:
 *   const { $api } = useApi()
 *   const data = await $api('/users')
 *   const result = await $api<User>('/users/1')
 */
export const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie("auth_token");

  const $api = $fetch.create({
    baseURL: config.public.apiBaseUrl as string,

    onRequest({ options }) {
      if (token.value) {
        options.headers = new Headers(options.headers);
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },

    onResponseError({ response }) {
      const data = response._data as { message?: string } | undefined;
      throw createError({
        statusCode: response.status,
        message: data?.message ?? response.statusText,
        fatal: false,
      });
    },
  });

  return { $api };
};
