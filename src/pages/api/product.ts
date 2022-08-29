import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const url =
    'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC'
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  res.status(200).json(data)
}
