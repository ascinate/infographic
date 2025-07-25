import React from 'react'

function LoaddingUI() {
      const dummyCards = Array.from({ length: 12 });
  return (
     <>
          {/* Dummy Header */}
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                {/* Dummy logo */}
                <div style={{
                  width: '80px',
                  height: '32px',
                  backgroundColor: '#ccc',
                  borderRadius: '4px'
                }} />

                <button className="navbar-toggler" type="button" disabled>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse show">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <li className="me-5" key={i}>
                        <div style={{
                          width: '70px',
                          height: '18px',
                          backgroundColor: '#ccc',
                          borderRadius: '4px'
                        }} />
                      </li>
                    ))}

                    <li className="me-5 d-flex align-items-center">
                      <div style={{
                        width: '40px',
                        height: '18px',
                        backgroundColor: '#ccc',
                        borderRadius: '4px',
                        marginRight: '6px'
                      }} />
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#ccc">
                        <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>


          {/* Dummy SVG Box */}
          <div className="row justify-content-center mt-5">
            {dummyCards.map((_, index) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 ms-4" key={index}>
                <div className="p-2 rounded text-center">
                
                  <div style={{
                    width: '100%',
                    paddingTop: '100%', 
                    backgroundColor: '#e0e0e0',
                    borderRadius: '6px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#ccc'
                    }} />
                  </div>

       
                  <div style={{
                    width: '80%',
                    height: '14px',
                    backgroundColor: '#ddd',
                    margin: '12px auto 0',
                    borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>




        </>
  )
}

export default LoaddingUI