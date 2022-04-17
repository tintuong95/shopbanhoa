import { Button } from 'antd'
import React from 'react'

export default function FooterComponent() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5 bg-slate-200 p-5">
    <div className="">
      <p className='text-lg text-slate-400 my-0'>Copyright @2020 by Logo.vn</p>
    </div>
      <div className="col-span-3 flex justify-end ">
        <p className='my-0 text-lg text-slate-400'>Liên hệ : admin@logo.vn</p>
      </div>
 </div>
  )
}
