import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Giphy = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    const FetchData = async () => {
      const results = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: '96P982n2ALtDop8DyCArL16THp4wQu6W',
        },
      })

      console.log(results)
      setData(results.data.data)
    }
    FetchData()
  }, [])

  const RenderGiphy = () => {
    return data.map((items: any) => {
      return (
        <div className="px-5 py-5" key={items.id}>
          <div>
            <img
              className="rounded-[12px] w-[400px] h-[400px] object-cover"
              src={items.images.original.url}
              alt="giphy"
            />
          </div>
        </div>
      )
    })
  }

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const results = await axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: '96P982n2ALtDop8DyCArL16THp4wQu6W',
        q: search,
      },
    })

    setData(results.data.data)
  }

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <form>
          <input
            onChange={handleSearchChange}
            value={search}
            type="text"
            placeholder="search"
            className="px-3 rounded-[2px] bg-slate-200 w-[400px] h-[30px]"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-regal-blue h-[30px] w-[70px] mx-2 rounded-[2px] text-bold text-white"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-flow-row grid-cols-3">{RenderGiphy()}</div>
    </div>
  )
}

export default Giphy
