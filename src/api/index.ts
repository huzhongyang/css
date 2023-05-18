import axios from 'axios'

export interface City {
  name: string
  id: string
  country: string
  fxLink: string
}

export async function getCitys(searchStr: string) {
  const { data } = await axios.get('https://geoapi.qweather.com/v2/city/lookup',
    {
      params: {
        location: searchStr,
        key: '237fec219c0d4aa2b7af72b05be31445',
      },
    })
  return data.location as City[]
}
