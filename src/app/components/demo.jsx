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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Show 12 items per page

    const coloredSvgList = svgList(svgColor);

    const filteredSvgList = coloredSvgList.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryParam ? item.category === categoryParam : true;
        return matchesSearch && matchesCategory;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredSvgList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredSvgList.slice(startIndex, startIndex + itemsPerPage);

    // Handlers
    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage => currentPage + 1);
    };

    return (
        <>
            <div className="container py-4 my-5">
                <div className="row justify-content-center">
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
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

                {/* Pagination */}
                {filteredSvgList.length > itemsPerPage && (
                    <div className='d-flex align-items-center justify-content-center mt-4'>
                        <button
                            className='me-2 btn page-btn'
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            className='ms-2 btn page-btn'
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
