import { defineStore } from "pinia";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppState {
  // Define your state properties here
  // For example:
  // isLoggedIn: boolean;
  // user: User | null;
  // theme: string;
  // Add more properties as needed
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({}),
  actions: {},
});
