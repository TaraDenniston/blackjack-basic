
// Utility functions for generating a random integer in the range 1..52 (inclusive)
// Exports (named): mathRandom1to52, secureRandom1to52, nodeRandom1to52

// Simple Math.random version (fine for UI/gameplay where cryptographic security isn't required)
export function mathRandom1to52() {
  return Math.floor(Math.random() * 52) + 1;
}

// Secure version for browsers using crypto.getRandomValues with rejection sampling
// This produces unbiased results in 1..52.
export function secureRandom1to52() {
  if (typeof crypto === 'undefined' || typeof crypto.getRandomValues !== 'function') {
    // fallback to Math.random if Web Crypto API not available
    return mathRandom1to52();
  }

  const max = 52;
  const byteSize = 256; // one byte
  const limit = Math.floor(byteSize / max) * max; // largest multiple of 52 less than 256 -> 208
  const buf = new Uint8Array(1);

  while (true) {
    crypto.getRandomValues(buf);
    const val = buf[0];
    if (val < limit) {
      return (val % max) + 1;
    }
    // otherwise retry (rejection sampling)
  }
}

// Node.js version using crypto.randomInt when available.
// This function uses dynamic import to avoid resolving Node-only modules in browser builds.
export async function nodeRandom1to52() {
  try {
    // dynamic import keeps this file browser-friendly under bundlers
    const crypto = await import('crypto');
    // crypto.randomInt(min, maxExclusive)
    return crypto.randomInt(1, 53);
  } catch (e) {
    // fall back to secure or math implementations
    try {
      return secureRandom1to52();
    } catch (err) {
      return mathRandom1to52();
    }
  }
}
