import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
} from "@telegram-apps/sdk-react";

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Mount all components used in the project.
  if (backButton.isSupported()) {
    backButton.mount();
  }

  initData.restore();

  if (!miniApp.isMounted()) {
    miniApp.mount();
    miniApp.bindCssVars(); // should bind it here
  }

  if (!themeParams.isMounted()) {
    themeParams.mount();
  }

  if (!viewport.isMounted() && !viewport.isMounting()) {
    void viewport.mount().catch((e) => {
      console.error("Something went wrong mounting the viewport", e);
    });
  }

  // Define components-related CSS variables.
  if (viewport.isMounted()) {
    viewport.bindCssVars();
  }

  themeParams.bindCssVars();

  // Add Eruda if needed.
  if (debug) {
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
  }
}

