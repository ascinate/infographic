import React from 'react'
import Footer from './components/Footer'
import Link from 'next/link'
import SVGHero from './components/SVGHero'

function page() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container ">
            <Link href="/" className="navbar-brand">Logo</Link>            
          </div>
        </nav>
      </header>

      <div className="title text-center my-5">
        <h1>Illustrations</h1>
        <p>Browse to find the images that fit your needs and click to download. Use <br /> the on-the-fly color image generation to match your brand identity.</p>
        <Link href={"/home"} className='btn main-btn browse-now-btn'>Browse now</Link>
      </div>
      <div className='row justify-content-center m-auto'>
        <div className="col-lg-8 d-flex justify-content-center">
          <SVGHero />
        </div>

      </div>

      <div className='container hero-box text-center mb-5'>
        <h3>A constantly updated collection of beautiful svg images that <br />you can use completely free and without attribution.</h3>
        <p>Create better looking landing pages, mobile apps and products.</p>
        <div className="row w-75  mx-auto my-5">
          <div className="col-lg-4">
            <div className='bg-white w-50 m-auto mb-3'>
              <img src="https://undraw.co/ud_steps_1.svg" alt="" />
            </div>
            <p>
              Browse or search the artwork that fits your product and messaging.
            </p>
          </div>
          <div className="col-lg-4">
            <div className='bg-white w-50 m-auto mb-3'>
              <img src="https://undraw.co/ud_steps_1.svg" alt="" />
            </div>
            <p>
              Browse or search the artwork that fits your product and messaging.
            </p>
          </div>
          <div className="col-lg-4">
            <div className='bg-white w-50 m-auto mb-3'>
              <img src="https://undraw.co/ud_steps_1.svg" alt="" />
            </div>
            <p>
              Browse or search the artwork that fits your product and messaging.
            </p>
          </div>

        </div>
      </div>


      <div className='container my-5'>
        <h2 className='text-center'>More than just beautiful and open artwork.</h2>
        <div className='row my-5'>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
        </div>
        <div className='row my-5'>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='card hero-card'>
              <img src="https://undraw.co/features_1.svg" alt="" width="30%" className='mb-4' />
              <h5>Infinite scalability</h5>
              <p>SVG images scale without quality degradation, making them not just 6K but future-ready.</p>
            </div>
          </div>
          <Link href={"/home"} className='btn main-btn browse-now-btn m-auto mt-5'>Browse now</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page




