/**
 * Secure logging utility that only logs in development mode
 * Prevents leaking sensitive information in production
 */

const isDevelopment = process.env.NODE_ENV === "development";

export const logger = {
  log: (...args: unknown[]) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  error: (...args: unknown[]) => {
    // Always log errors, but sanitize in production
    if (isDevelopment) {
      console.error(...args);
    } else {
      // In production, only log error messages, not full objects
      const sanitized = args.map((arg) => {
        if (typeof arg === "object" && arg !== null) {
          return "[Error details hidden in production]";
        }
        return arg;
      });
      console.error(...sanitized);
    }
  },
  warn: (...args: unknown[]) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
};

