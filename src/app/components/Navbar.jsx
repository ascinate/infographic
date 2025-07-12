import React from 'react'

function Navbar() {
  return (
<>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container ">
            <Link href="/" className="navbar-brand">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end align-items-center gap-2 ms-auto w-100">

                <li><input type="text" placeholder='Search' className='search-bar' value={searchQuery} onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }} /></li>
                <li className="nav-item">
                  <input
                    type="color"
                    id="colorPicker"
                    className="form-control form-control-color"
                    value={svgColor}
                    onChange={(e) => setSvgColor(e.target.value)}
                    title="Choose your color"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
</>
  )
}

export default Navbar