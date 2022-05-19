import Link from 'next/link'
import React from 'react'

const ProfilePageLinks = () => {
    const links = [
        {text: 'Posts', href: '/profile'},
        {text: 'About', href: '/profile/about'},
        {text: 'Friends', href: '/profile/friends'},
        {text: 'Photos', href: '/profile/photos'},
        {text: 'Videos', href: '/profile/videos'},
    ]
  return (
    <div>
        <ul className='list-none flex justify-center'>
            {
                links.map((link, index) => <li key={index}><Link  scroll={false} href={link.href} className='p-2'>
                        <a className='p-4 text-gray-500 font-semibold'>{link.text}</a>
                    </Link></li>)
            }
            
        </ul>
    </div>
  )
}

export default ProfilePageLinks