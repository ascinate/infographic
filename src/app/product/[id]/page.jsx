'use client';
import { useSearchParams, useParams } from 'next/navigation';
import { svgList } from '@/app/demodata';
import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { svgStyleList } from '../../demoAPI/styleSvgAPI';
import { similarSvgList } from '../../demoAPI/moreLikeThisAPI'
import Link from 'next/link';



export default function ProductPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id;

  const initialColor = searchParams.get('color') || '#576FF8';
  const [backgroundType, setBackgroundType] = useState('hidden');
  const simpleBackground = (
     <svg width="400" height="200" viewBox="0 0 3750 1875">
      <rect width="3750" height="1875" fill="lightblue" />
    </svg>
  )
  const detailedBackground = (

   <svg width="400" height="200" viewBox="0 0 4800 4800">
      <circle cx="2400" cy="2400" r="2000" fill="lightgreen" />
    </svg>
  )




  const [downloadSize, setDownloadSize] = useState('');
const [showAll, setShowAll] = useState(false);

  const [svgColor, setSvgColor] = useState(initialColor);
  const [layerVisibility, setLayerVisibility] = useState({
    layer1: true,
    layer2: true,
    layer3: true,
  });
  const svgStyles = svgStyleList(svgColor);
  const similarSvg = similarSvgList(svgColor);

  const [availableLayers, setAvailableLayers] = useState([]);
  useEffect(() => {
    if (svgRef.current) {
      const nodes = svgRef.current.querySelectorAll('[data-layer]');
      const layers = new Set();

      nodes.forEach(el => {
        const layer = el.getAttribute('data-layer');
        if (layer) layers.add(layer);
      });

      setAvailableLayers([...layers]); // convert Set to Array
    }
  }, [svgColor]); // Or [svgItem] if you're switching SVGs

  useEffect(() => {
    const newState = {};
    availableLayers.forEach(layer => {
      newState[layer] = true;
    });
    setLayerVisibility(newState);
  }, [availableLayers]);


const visibleLayers = showAll ? availableLayers : availableLayers.slice(0, 3);
  const svgRef = useRef();

  useEffect(() => {
    setSvgColor(initialColor);
  }, [initialColor]);

  const toggleLayer = (layerKey) => {
    const el = svgRef.current?.querySelector(`[data-layer="${layerKey}"]`);
    if (el) {
      el.style.display = el.style.display === 'none' ? 'inline' : 'none';
    }
  };

  const svgItem = svgList(svgColor).find((item) => item.id === parseInt(id));




  const handleDownloadPng = async () => {
    const node = svgRef.current;
    if (!node) return;

    const textElement = node.querySelector('h2');
    const originalDisplay = textElement?.style.display;
    if (textElement) textElement.style.display = 'none';

    const canvas = await html2canvas(node, {
      backgroundColor: null,
      useCORS: true,
      allowTaint: true,
      scale: 2,
    });

    if (textElement) textElement.style.display = originalDisplay || 'block';

    let width = canvas.width;
    let height = canvas.height;

    // Resize based on dropdown
    if (downloadSize) {
      const size = parseInt(downloadSize);
      const ratio = canvas.width / canvas.height;
      width = size;
      height = size / ratio;
    }

    const resizedCanvas = document.createElement('canvas');
    resizedCanvas.width = width;
    resizedCanvas.height = height;

    const ctx = resizedCanvas.getContext('2d');
    ctx.drawImage(canvas, 0, 0, width, height);

    const link = document.createElement('a');
    link.download = `image-${downloadSize || 'original'}.png`;
    link.href = resizedCanvas.toDataURL('image/png');
    link.click();
  };


  const handleDownloadSvg = () => {
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    const clone = svgElement.cloneNode(true);

    if (downloadSize) {
      clone.setAttribute('width', `${downloadSize}px`);
      clone.setAttribute('height', `${downloadSize}px`);
    }

    const svgData = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `image-${downloadSize || 'original'}.svg`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light nav-bg">
          <div className="container">
            <Link href="/" className="navbar-brand">Ascinate</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            </div>
          </div>
        </nav>
      </header>






      <main className=" my-5">
        <div className="container">
          <div className="row mt-5">

            {/* left toolbar */}
            <div className="col-lg-8 mt-5">
              {/* <div className="product-page-svg canvas-editor" ref={svgRef}>
              {svgItem?.getSvg()}
              <h2>{svgItem?.name}</h2>
            </div> */}
              <div className='canvas-editor'>
                <div
                  className="product-page-svg w-100 text-center"
                  ref={svgRef}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    margin: '0 auto',
                    textAlign: 'center',
                  }}
                >
                  {/* Background Layer */}
                  {backgroundType === 'simple' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none',
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {simpleBackground}
                    </div>
                  )}
                  {backgroundType === 'detail' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none',
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      {detailedBackground}
                    </div>
                  )}

                  {/* Foreground SVG */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {svgItem?.getSvg()}
                    <h2>{svgItem?.name}</h2>
                  </div>
                </div>



                <div className='row gap-4 justify-content-center'>
                  <h3 className='my-3'>Style</h3>

                  {svgStyles.slice(0, 5).map((styleItem) => (
                    <div className="col-lg-2 col-md-3 col-sm-4 mb-3 text-center" key={styleItem.id}>
                      <Link
                        href={`/product/${styleItem.id}?color=${encodeURIComponent(svgColor)}`}
                        className="text-decoration-none text-dark"
                      >
                        <div className='card-styleSection p-2 text-center'>
                          {styleItem.getSvg()}
                        </div>
                        <p className='mt-2'>{styleItem.name}</p>
                      </Link>
                    </div>
                  ))}

                </div>

                <div className='d-flex  gap-2'>
                  <div className='detail-badge' >badge</div>
                  <div className='detail-badge' >badge</div>
                  <div className='detail-badge' >badge</div>
                </div>

              </div>



            </div>
            {/* right toolbar */}
            <div className="col-lg-4 mt-5">
              <div className="right-toolbar">
                <h4>Color</h4>
                <input
                  type="color"
                  value={svgColor}
                  onChange={(e) => setSvgColor(e.target.value)}
                  className="color-circle"
                />


                
<div>
      <h4>Layers</h4>
      <div>
        {visibleLayers.map((layer) => (
          <button
            key={layer}
            onClick={() => toggleLayer(layer)}
            style={{
              width: `70%`,
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              backgroundColor: layerVisibility[layer] ? '#4CAF50' : '#f0f0f0',
              color: layerVisibility[layer] ? 'white' : 'black',
              cursor: 'pointer',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            {layer}
          </button>
        ))}

        {availableLayers.length > 3 && (
          <button
          className='showmore-btn'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>



                <h4 className='mt-5'>Background</h4>
                <div>
                  {['hidden', 'simple', 'detail'].map((type) => (
                    <div className="form-check" key={type}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="backgroundOptions"
                        id={`radio-${type}`}
                        value={type}
                        checked={backgroundType === type}
                        onChange={(e) => setBackgroundType(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor={`radio-${type}`}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="download">

                  <select
                    name="size"
                    id="size"
                    className='select-size'
                    value={downloadSize}
                    onChange={(e) => setDownloadSize(e.target.value)}
                  >
                    <option value="">Select size</option>
                    <option value="16">16px</option>
                    <option value="24">24px</option>
                    <option value="32">32px</option>
                    <option value="64">64px</option>
                    <option value="128">128px</option>
                    <option value="256">256px</option>
                    <option value="512">512px</option>
                  </select>
                  <div>
                    <button className="btn btn-primary me-2 d-flex align-item-center justify-content-center w-100 my-2" onClick={handleDownloadPng}>
                      <img src="/iimage.svg" alt="" />
                      <span>Download PNG</span>
                    </button>
                    <button className="btn btn-primary d-flex align-item-center justify-content-center w-100 my-2" onClick={handleDownloadSvg}>
                      <img src="/icrown.svg" alt="" />
                      <span>
                        Download SVG
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <h6>License</h6>
                  <p>Free for personal and commercal. use with attribution. <a className="learsmore" href="#">Lears more</a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="row my-5">

            <div className='col-lg-12 more-like-this-section p-3'>
              <h2 className='my-4'>You may also like</h2>
              <div className="row">
                {similarSvg.slice(0, 8).map((styleItem) => (
                  <div className="col-lg-3 col-md-3 col-sm-4 mb-3 text-center " key={styleItem.id}>
                    <Link
                      href={`/product/${styleItem.id}?color=${encodeURIComponent(svgColor)}`}
                      className="text-decoration-none text-dark"
                    >
                      <div className='card more-like-this-card similarSvg-card p-2 text-center'>
                        {styleItem.getSvg()}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </main >


    </>
  );
}
