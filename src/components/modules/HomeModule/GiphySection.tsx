import React from 'react'
import Giphy from './Giphy'

export const GiphySection: React.FC = () => (
  <div>
    <div className="relative flex items-center justify-center">
      <h1 className="text-white text-[50px]">Haephy</h1>
    </div>
    <div className="">
      <Giphy />
    </div>
  </div>
)
