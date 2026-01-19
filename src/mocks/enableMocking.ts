export async function enableMocking() {
  if (import.meta.env.MODE !== 'development') return;

  const { worker } = await import('./browser');
  await worker.start();
}
