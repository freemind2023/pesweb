// window.dataLayer is declared as Object[] by @next/third-parties — we align with that.
function push(entry: object): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(entry);
}

export const pageview = (url: string): void => {
  push({ event: 'pageview', page: url });
};

export interface GtmEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ event, category, action, label, value }: GtmEvent): void => {
  push({
    event,
    ...(category !== undefined && { category }),
    ...(action !== undefined && { action }),
    ...(label !== undefined && { label }),
    ...(value !== undefined && { value }),
  });
};
