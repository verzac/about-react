export async function mockAsync<T>(resolvedValue: T, timeoutMs: number): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => res(resolvedValue), timeoutMs);
  });
}