'use client';

import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import { svgList } from "../demodata";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || '';
  
  const [svgColor, setSvgColor] = useState('#576FF8');
  const [searchTerm, setSearchTerm] = useState('');

  const coloredSvgList = svgList(svgColor);
  


  const filteredSvgList = coloredSvgList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryParam ? item.category === categoryParam : true;
    return matchesSearch && matchesCategory;
  });

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

      <div className="container py-4 my-5">
        <div className="row justify-content-center">
          {filteredSvgList.length > 0 ? (
            filteredSvgList.map((item) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 ms-4" key={item.id}>
                <Link
                  href={{
                    pathname: `/product/${item.id}`,
                    query: { color: svgColor }
                  }}
                  className="text-decoration-none text-dark"
                >
                  <div className="svg-card p-2 border rounded text-center">
                    <div>{item.getSvg()}</div>
                    <p className="mt-3">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <p>No results found</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
