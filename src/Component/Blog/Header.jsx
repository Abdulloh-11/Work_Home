import React from 'react'



export default function Header() {

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blogs' },
        { name: 'Work', href: '/work' },
        { name: 'Contact', href: 'contact' },
        { name: 'Login In', href: '/auth' },
      ]
  return (
    <div className='container'>
   

    <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className=" flex gap-11 space-y-2 py-6 align-items-center justify-end">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=" align-items-center -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-[#8a63f7] hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}

               
                </div>
                
              </div>
            </div>

    </div>
  )
}

