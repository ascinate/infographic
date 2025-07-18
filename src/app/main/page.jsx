'use client';
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer"
import { svgList } from "../demodata"
import Link from 'next/link';

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  //state 
  const [svgColor, setSvgColor] = useState('#576FF8');

  const [selectedSVG, setSelectedSVG] = useState(null);
  const [selectSize, setSelectSize] = useState("64px")
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const svgRef = useRef(null);


  const coloredSvgList = svgList(svgColor);

  //demo data



  // filtered list based on search
  // const filteredSVGs = svgList.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // pagination calculation
  // const totalPages = Math.ceil(filteredSVGs.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const visibleSVGs = filteredSVGs.slice(startIndex, startIndex + itemsPerPage);

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };



  //download buttons functionality
  const downloadSVG = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current.querySelector('svg');
    const clonedSvg = svgElement.cloneNode(true);
    const size = parseInt(selectSize); // e.g. "32px" → 32

    // Set new width & height
    clonedSvg.setAttribute('width', size);
    clonedSvg.setAttribute('height', size);

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `image-${size}px.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadPNG = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current.querySelector('svg');
    const clonedSvg = svgElement.cloneNode(true);
    const size = parseInt(selectSize); // Convert "64px" to 64

    // Apply size
    clonedSvg.setAttribute('width', size);
    clonedSvg.setAttribute('height', size);

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      const pngUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `image-${size}px.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };


  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
          <div className="container">
            <a className="navbar-brand" href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item me-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </li>
                <li className="nav-item">
                  <input
                    type="color"
                    className="form-control form-control-color"
                    value={svgColor}
                    onChange={(e) => setSvgColor(e.target.value)}
                    title="Choose color"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main>
        <div className="title text-center">
          <h1>Illustrations</h1>
          <p>Browse to find the images that fit your needs and click to download. Use <br /> the on-the-fly color image generation to match your brand identity.</p>

          <button className='btn main-btn'>▶️ New update: Videos are available on logo+!</button>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center">
            {coloredSvgList.map((item) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 ms-4" key={item.id}>
                <Link href={`/product/${item.id}`} className="text-decoration-none text-dark">
                  <div className="svg-card p-2 border rounded text-center">
                    <div>{item.getSvg()}</div>
                    <p className="mt-3">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* pagination  */}
          {/* {totalPages > 1 && (
            <div className='pagination d-flex justify-content-center align-items-center my-4'>
              <button className='btn page-btn' onClick={handlePreviousPage}>Previous</button>
              <p>page {currentPage} of {totalPages}</p>
              <button className='btn page-btn' onClick={handleNextPage}>Next</button>
            </div>
          )} */}
        </div>
      </main>

      <Footer />
      {/* Modal */}
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center ">
              {selectedSVG ? (
                <>
                  <h5 className="mb-3">{selectedSVG.name}</h5>  {/* SVG name from object */}
                  <div ref={svgRef} className="svg-shapes mb-4">
                    {selectedSVG.svg}
                  </div>
                </>
              ) : (
                <p>Select an SVG to view</p>
              )}

              <select className="form-select w-75 m-auto" aria-label="Default select example" value={selectSize} onChange={(e) => setSelectSize(e.target.value)}>
                <option selected>select size</option>
                <option value="16px">16px</option>
                <option value="24px">24px</option>
                <option value="32px">32px</option>
                <option value="64px">64px</option>
                <option value="128px">128px</option>
                <option value="256px">256px</option>
                <option value="512px">512px</option>
              </select>

              <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={downloadPNG}>Download PNG</button>
                <button className="btn btn-secondary" onClick={downloadSVG}>Download SVG</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

