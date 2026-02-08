declare module "react-gtm-module" {
  export function initialize(options: { gtmId: string }): void;
  // Add other exports if needed
  const _default: {
    initialize: typeof initialize;
  };
  export default _default;
}