let gtm: typeof import("react-gtm-module");

export const getGTM = async () => {
  if (!gtm && typeof window !== "undefined") {
    gtm = await import("react-gtm-module");
    gtm.initialize({
      gtmId: "G-1HRR9H1F19",
    });
  }

  return gtm;
};
