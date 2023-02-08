"use client";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import { forwardRef } from 'react'


function Avatar() {
    const estilo = "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  return (
    <div>
        <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-orange-600 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
                        // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
      <div className="font-medium truncate">daniel@datasyn.com</div>
      </div>
                    <div className={estilo}>
                    
                      <Menu.Item >
                        
                            <a href="#">Profile</a>
                          
                        
                      </Menu.Item>
                      
                      </div>
                      <div className={estilo}>
                      <Menu.Item>
                        <a  href="#">Profile</a>
                        
                      </Menu.Item>
                      </div>
                      <div className={estilo}>
                      <Menu.Item>
                        {({ active }) => (
                          <a  href="#">Profile</a>
                        )}
                      </Menu.Item>
                      </div>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
        
    </div>
  )
}

export default Avatar