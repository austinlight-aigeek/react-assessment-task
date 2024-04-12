import React from 'react'
import { Facebook ,Twitter, Instagram, LinkedIn} from '@mui/icons-material'
export default function FooterTabs() {
  return (
    <div className='flex flex-row justify-center items-center bg-gray-700'>
        <div className='flex flex-col text-white p-5'>
            <h1 className='font-bold text-white'>Category</h1>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p>
        </div>
        <div className='flex flex-col text-white p-5'>
            <h1 className='font-bold text-white'>UseFull Link</h1>
            <p>
                lorem ipsum dolor sit amet
            </p>
            <p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><p>
                lorem ipsum dolor sit amet
            </p><h1 className='font-bold text-white'>
                    FOLLOW US
            </h1>
        </div>

        <div className='flex flex-col text-white p-5'>
            <h1 className='font-bold text-white'>Contact-US</h1>
            <p>
                +265521246032
            </p>
            <p>
                +52162580982
            </p><p>
               test.elie@test.com
            </p>
            <div className='text-white p-6'>
                <Facebook/>
                <LinkedIn/>
                <Twitter/>
                <Instagram/>

            </div>
        </div>
    </div>
  )
}
