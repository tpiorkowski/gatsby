import { Link } from 'gatsby';
import * as React from 'react';

const Layout = ({children}) => {
    return (
        <div className='w-full flex justify-center'>
            <header className='w-full flex py-4 px-12 bg-slate-300 text-black font-semibold text-lg fixed top-0'>
                <nav className='w-full flex'>
                    <ul>
                       <li>
                        <Link to="/blog">Blog</Link>
                        </li> 
                    </ul>
                </nav>
            </header>
            <main className='mt-[60px]'>
                {children}
            </main>
        </div>
    )
}

export default Layout
