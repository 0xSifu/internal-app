export default async function getPlans() {
	try {
		const res = await fetch("http://localhost:3030/api/plans")
		if (!res.ok) {
			throw new Error('Gagal ndasmu')
		}
		const data = await res.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
