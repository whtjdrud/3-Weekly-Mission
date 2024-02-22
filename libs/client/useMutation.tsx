import { useState } from 'react'

export default function useMutation(
  url: string,
): [
  (data: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any },
] {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<undefined | any>(undefined)
  const [error, setError] = useState<undefined | any>(undefined)
  function mutation(data: any) {
    const accessToken = sessionStorage.getItem('accessToken')

    setLoading(true)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }
  return [mutation, { loading, data, error }]
}
