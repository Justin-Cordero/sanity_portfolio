import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className='bg-gray-300'>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-gray-500 hover:text-gray-50 text-4xl font-bold cursive tracking-widest">
                        John Smith
                    </NavLink>
                    <NavLink to='/about' activeClassName="text-gray-50 bg-gray-400" className="inline-flex items-center py-3 px-3 my-6 rounded tex-red-200 hover:text-gray-50">
                        About
                    </NavLink>
                    <NavLink to='/project' activeClassName="text-gray-50 bg-gray-400" className="inline-flex items-center py-3 px-3 my-6 rounded tex-red-200 hover:text-gray-50">
                        Projects
                    </NavLink>
                    <NavLink to='/post' activeClassName="text-gray-50 bg-gray-400" className="inline-flex items-center py-3 px-3 my-6 rounded tex-red-200 hover:text-gray-50">
                        Blog
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://youtube.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://instagram.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="mailto:johnsmith@johnsmith.john" className="mr-4" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}