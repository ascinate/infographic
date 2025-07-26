'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import { svgList } from "../demodata";
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read `category` from URL on first load
  const urlCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'All');

  const [svgColor, setSvgColor] = useState('#576FF8');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Technology', 'People', 'Abstract', 'Business'];
  const itemsPerPage = 8;
  const coloredSvgList = svgList(svgColor);

  // Sync selected category to URL
  useEffect(() => {
    if (selectedCategory === 'All') {
      router.push(`/main?page=1`, { scroll: false });
    } else {
      router.push(`/main?page=1&category=${selectedCategory}`, { scroll: false });
    }
  }, [selectedCategory]);

  // Filter data
  const filteredSvgList = coloredSvgList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' ? true : item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredSvgList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredSvgList.slice(startIndex, startIndex + itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage => currentPage + 1);
  };

  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
          <div className="container">
            <Link className="navbar-brand" href="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                    className="form-control form-control-color "
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
          {/* Category Sidebar */}
          <div className="col-lg-3">
            <div className='list-page-left card mt-3'>
              <ul className="list-unstyled p-3">
                <h4 className='my-4'>Filter</h4>
                {categories.map((cat, index) => (
                  <li className="form-check mb-2" key={index}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="categoryRadios"
                      id={`category-${index}`}
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                      }}
                    />
                    <label className="form-check-label ms-2" htmlFor={`category-${index}`}>
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SVG Card Grid */}
          <div className="col-lg-9">
            <div className="row">
              {currentItems.length > 0 ? (
                currentItems.map((item) => (
                  <div className="col-lg-3 mb-4" key={item.id}>
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
        </div>

        {/* Pagination */}
   {filteredSvgList.length > itemsPerPage && (
  <div className='d-flex align-items-center justify-content-center mt-4'>
    
    {/* Only show Previous button if not on the first page */}
    {currentPage > 1 && (
      <button
        className='me-2 btn page-btn'
        onClick={goToPreviousPage}
      >
        Previous
      </button>
    )}

    <span>Page {currentPage} of {totalPages}</span>

    {/* Only show Next button if not on the last page */}
    {currentPage < totalPages && (
      <button
        className='ms-2 btn page-btn'
        onClick={goToNextPage}
      >
        Next
      </button>
    )}
    
  </div>
)}

      </div>
      <Footer />
    </>
  );
}
