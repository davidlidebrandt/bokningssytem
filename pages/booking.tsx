import React from 'react'

export default function booking() {
  return (
    <main className='light-bg py-16'>
        <section className='light-blue-bg py-12 dark-blue-c'>
            <h2 className='dark-blue-c text-center mb-8 font-bold'>Book now</h2>
            <form className='text-center'>
                <label className='block text-sm' htmlFor="search">Search for company</label>
                <input className='rounded-md' name='search' id='search' type="search" />
                <label className='block mt-8 text-sm' htmlFor="search">Browse registered companies</label>
                <input className='rounded-md' name='browse' id='browse' type="text" />
            </form>
        </section>
    </main>
  )
}
