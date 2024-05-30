export async function getTenants(): Promise<any> {
  const res = await fetch('http://localhost:3030/api/tenants')

  if (!res.ok) {
    throw new Error('Gagal ndasmu')
  }
  const data = await res.json()

  return data
}
