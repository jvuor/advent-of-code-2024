const LOG_FILTER = process.env.DEBUG ?? "";
const FULL_LOG = 'FULL'

export function logger(label?: string) {
  if (!LOG_FILTER || (label && !LOG_FILTER.includes(label) && !LOG_FILTER.includes(FULL_LOG))) {
    return () => {};
  } 

  const prefix = label ? `[${label}]` : ''

  return (...args: unknown[]) => {
    console.debug(prefix, ...args);
  };
}
