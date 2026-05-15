/**
 * Auth route guard middleware.
 *
 * Apply to protected pages via definePageMeta:
 *   definePageMeta({ middleware: 'auth' })
 *
 * This example uses an `auth_token` cookie. Replace with your actual
 * auth logic (e.g. check a Pinia auth store, validate a session, etc.).
 */
export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("auth_token");

  if (!token.value) {
    return navigateTo("/login");
  }
});
