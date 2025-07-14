import React from 'react'

function Footer() {
  return (
 <footer>
        <div className="my-5 d-flex justify-content-between w-100">
          <div className="ms-5">
            <ul>
              <li className='my-2'>
                <ul className='d-flex flex-wrap gap-3 ps-0 align-items-start'>
                  <li><a href="#">Supporters</a></li>
                  <li><a href="#">Thankful</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
              <li>© 2025 · Ascinate Technology · All rights reserved</li>
            </ul>
          </div>
          <div className="me-5">
            <ul>
              <li className='my-2'>Created by Ascinate Technology</li>
              <li>Code / Design by Ascinate Technology</li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer