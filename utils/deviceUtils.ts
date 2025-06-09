export function isMobileDevice(userAgent: string): boolean {
  return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Opera Mini/i.test(
    userAgent
  );
}
