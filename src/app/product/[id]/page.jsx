'use client';
import { svgList } from '@/app/demodata';
import { useState } from 'react';

export default function ProductPage({ params }) {
  const { id } = params;
  const [svgColor, setSvgColor] = useState('#576FF8');
  const [selectSize, setSelectSize] = useState('64px');

  const svgItem = svgList(svgColor).find(item => item.id === parseInt(id));

  if (!svgItem) return <p>SVG Not Found</p>;

  return (
    <main className="text-center my-5">

      <div className='container'>
        <div className="row">
          <div className="col-lg-8">
            <div style={{ width: "auto", height: "auto", margin: "0 auto" }} className='product-page-svg canvas-editor'>
              {svgItem.getSvg()}
                    <h2>{svgItem.name}</h2>
            </div>

          </div>
          <div className='col-lg-4'>
            <div className='right-toolbar'>
              <h4>Color</h4>
              <input
                type="color"
                value={svgColor}
                onChange={(e) => setSvgColor(e.target.value)}
                className="form-control form-control-color w-auto mx-auto my-3 product-colorinput"
              />
            </div>
          </div>
        </div>

      </div>


      {/* 
      <select
        className="form-select w-50 mx-auto my-3"
        value={selectSize}
        onChange={(e) => setSelectSize(e.target.value)}
      >
        <option value="16px">16px</option>
        <option value="24px">24px</option>
        <option value="32px">32px</option>
        <option value="64px">64px</option>
        <option value="128px">128px</option>
        <option value="256px">256px</option>
        <option value="512px">512px</option>
      </select> */}
    </main>
  );
}
