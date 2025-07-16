import React from 'react'
import Footer from './components/Footer'
import Link from 'next/link'
import SVGHero from './components/SVGHero'

function page() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light nav-bg">
                    <div className="container">
                        <a className="navbar-brand" href="#">Ascinate</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">

                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* hero secltion */}
                <section className="hero-bg title text-start">
                    <div className='container'>
                        <div className='row align-items-center py-5'>
                            <div className='col-lg-6 hero-left'>
                                <h1>Beautiful, customizable vector illustrations and animations - free for everyone</h1>
                                <p>Create stunning infographic, web pages, or presentations</p>
                                <Link href={"/main"} className='btn main-btn browse-now-btn'>Explore Illustrations</Link>
                                <Link href={"/main"} className='btn main-btn browse-now-btn outline-btn'>Learn How</Link>
                            </div>

                            <div className='col-lg-6 d-flex justify-content-center'>
                                <svg width="350" height="350" viewBox="0 0 799.946 621.627" class="injected-svg" role="img" artist="Katerina Limpitsouni" copyright="unDraw" scrapped="true" source="https://undraw.co/"><g transform="translate(-583 -242.762)"><path d="M799.946,579.777c0,.829-1.658,1.494-3.723,1.494H3.723c-2.065,0-3.723-.665-3.723-1.494s1.658-1.494,3.723-1.494h792.5C798.288,578.283,799.946,578.949,799.946,579.777Z" transform="translate(583 248.082)" fill="#d6d6e3"></path><ellipse cx="55.446" cy="55.446" rx="55.446" ry="55.446" transform="translate(744.23 275.186)" fill="#ed9da0"></ellipse><path d="M333.618,16.03c12.213,4.292,19.2,6.749,25.6,12.915,10.812,10.417,12.6,24.338,14.255,37.274,1.3,10.119,2.975,23.2-2.958,38.151-2.022,5.1-11.833,27.829-30.608,30.7-3.687.564-12.344.712-9.849-1.13C353.155,116.891,363.01,106.6,362.2,80.323,361.7,64,336.753,46.369,321.941,43.2a25.228,25.228,0,0,0-20.5,4.775c-12.45,10.221-11.92,52.486-25.048,61.32-5.4,3.634-1.8-21.944-5.606-17.8-7.506,8.184-2.692,20.708-1.342,25.489,6.4,22.641,13.1,5.9,19.343,25.232,6.747,20.873-39.909,43.406-41.923,48.067-3.5,8.108,34.018,38.1,20.283,44.769-17.433,8.471-31.176-2.561-39.279,6.9-4.53,5.283-2.079,10.886-10.263,27.332-2.671,5.369-4.015,8.053-5.19,7.958-5.6-.45-14.656-45.242,0-86.955,6.149-17.506,12.173-34.654,28.315-48.069,8.539-7.091,15.7-9.642,17.737-17.923,2.912-11.833-9.179-16.879-11.6-35.543-1.657-12.765-2.821-31.021,1.69-42.723,4.256-11.051,7.951-20.642,17.621-29.339C268.5,14.6,287.251.4,307.131,0c9.152-.184,15.877,12.294,26.487,16.023h0Z" transform="translate(492.433 242.766)" fill="#090814"></path><g transform="translate(1039.462 678.195)"><path d="M223.527,525.812l-149.511-.729L59.16,490.238l52.531-3.813-9.156-38.2,103.9-13.467-99.492-34.587,8.789-2.088,159.981,26.1L266.9,483.8l-12.593,32.765Z" transform="translate(-55.041 -380.214)" fill="#576FF8"></path><path d="M600.454,670.36s-9.9,12.086-2.04,30.358l-79.062,34.29-7.587,1.59-3.494-15.288,2.337-19.294V691.471Z" transform="translate(-346.668 -552.527)" fill="#d5d6db"></path><path d="M59.16,583.339,168.589,563.39l145,23.1-90.061,32.424Z" transform="translate(-55.041 -473.316)" fill="#576FF8"></path><path d="M142.429,652.47s-10.234,19.39,1.559,37.3l162.274,35.163s-10.073-15.446.52-36.884Z" transform="translate(-138.309 -542.451)" fill="#576FF8"></path><path d="M142.429,652.47s-10.234,19.39,1.559,37.3l162.274,35.163s-10.073-15.446.52-36.884Z" transform="translate(-138.309 -542.451)" opacity="0.1"></path><path d="M313.584,768.518l90.594-38.658s5.067,1.092,1.791,4.8-90.638,37.566-90.638,37.566L151.31,733.354Z" transform="translate(-145.631 -586.036)" fill="#576FF8"></path><path d="M313.584,768.518l90.594-38.658s5.067,1.092,1.791,4.8-90.638,37.566-90.638,37.566L151.31,733.354Z" transform="translate(-145.631 -586.036)" opacity="0.1"></path><rect width="41.309" height="0.437" transform="translate(163.638 162.397) rotate(-18.45)" opacity="0.1"></rect><rect width="50.333" height="0.437" transform="translate(163.623 165.914) rotate(-20.82)" opacity="0.1"></rect><rect width="58.34" height="0.437" transform="translate(163.886 170.06) rotate(-22.26)" opacity="0.1"></rect><rect width="67.155" height="0.437" transform="translate(164.516 173.715) rotate(-24.31)" opacity="0.1"></rect><rect width="73.449" height="0.437" transform="matrix(0.916, -0.401, 0.401, 0.916, 165.002, 175.494)" opacity="0.1"></rect><rect width="87.895" height="0.437" transform="translate(166.018 178.481) rotate(-23.36)" opacity="0.1"></rect><path d="M614.074,659.69s3.975,1.6,1.642,4.08S524,692.114,524,692.114Z" transform="translate(-355.527 -546.517)" fill="#576FF8"></path><path d="M699.75,574.18s-9.9,12.082-2.036,30.358l-79.062,34.29-7.587,1.6-3.495-15.288,2.372-19.289V595.291Z" transform="translate(-402.593 -498.359)" fill="#d5d6db"></path><path d="M158.46,487.155,267.885,467.21l145,23.1-90.061,32.424Z" transform="translate(-110.965 -419.148)" fill="#090814"></path><path d="M241.685,556.29s-10.239,19.39,1.555,37.3l162.274,35.163s-10.068-15.459.537-36.888Z" transform="translate(-194.208 -488.283)" fill="#3a3768"></path><path d="M241.685,556.29s-10.239,19.39,1.555,37.3l162.274,35.163s-10.068-15.459.537-36.888l-51.316-11.108Z" transform="translate(-194.208 -488.283)" fill="#090814"></path><path d="M412.874,672.338l90.6-38.658s5.063,1.092,1.786,4.8-90.638,37.565-90.638,37.565L250.6,637.174Z" transform="translate(-201.55 -531.869)" fill="#3a3768"></path><path d="M412.874,672.338l90.6-38.658s5.063,1.092,1.786,4.8-90.638,37.565-90.638,37.565L250.6,637.174Z" transform="translate(-201.55 -531.869)" fill="#090814"></path><path d="M600.094,646.68s-8.736,10.483,0,26.209" transform="translate(-396.196 -539.19)" opacity="0.1"></path><rect width="41.309" height="0.437" transform="translate(207.012 120.39) rotate(-18.45)" opacity="0.1"></rect><rect width="50.333" height="0.437" transform="translate(207.003 123.905) rotate(-20.82)" opacity="0.1"></rect><rect width="58.34" height="0.437" transform="translate(207.26 128.044) rotate(-22.26)" opacity="0.1"></rect><rect width="67.155" height="0.437" transform="translate(207.895 131.7) rotate(-24.31)" opacity="0.1"></rect><rect width="73.449" height="0.437" transform="matrix(0.916, -0.401, 0.401, 0.916, 208.374, 133.473)" opacity="0.1"></rect><rect width="87.895" height="0.437" transform="translate(209.393 136.461) rotate(-23.36)" opacity="0.1"></rect><path d="M713.391,563.51s3.971,1.6,1.642,4.076-91.7,28.344-91.7,28.344Z" transform="translate(-411.469 -492.349)" fill="#3a3768"></path><path d="M709.167,464.15s-9.9,21.7-2.04,39.968L628.064,528.8l-7.57,1.6L617,515.112l2.337-19.294V485.261Z" transform="translate(-407.904 -436.391)" fill="#d5d6db"></path><path d="M167.89,377.129,277.319,357.18l145,23.1L332.257,412.7Z" transform="translate(-116.276 -357.18)" fill="#576FF8"></path><path d="M251.143,446.26s-10.252,19.39,1.542,37.3l162.274,35.163s-10.073-15.459.533-36.884Z" transform="translate(-199.529 -426.315)" fill="#576FF8"></path><path d="M251.143,446.26s-10.252,19.39,1.542,37.3l162.274,35.163s-10.073-15.459.533-36.884Z" transform="translate(-199.529 -426.315)" opacity="0.1"></path><path d="M422.314,566.813l90.594-29.048s5.067,1.092,1.791,4.8-90.638,27.956-90.638,27.956L260.04,531.65Z" transform="translate(-206.867 -474.406)" fill="#576FF8"></path><path d="M422.314,566.813l90.594-29.048s5.067,1.092,1.791,4.8-90.638,27.956-90.638,27.956L260.04,531.65Z" transform="translate(-206.867 -474.406)" opacity="0.1"></path><rect width="41.309" height="0.437" transform="translate(211.136 72.327) rotate(-18.45)" opacity="0.1"></rect><rect width="50.333" height="0.437" transform="translate(211.125 75.844) rotate(-20.82)" opacity="0.1"></rect><rect width="58.34" height="0.437" transform="translate(211.377 79.986) rotate(-22.26)" opacity="0.1"></rect><rect width="67.155" height="0.437" transform="translate(212.018 83.638) rotate(-24.31)" opacity="0.1"></rect><rect width="73.449" height="0.437" transform="matrix(0.916, -0.401, 0.401, 0.916, 212.499, 85.415)" opacity="0.1"></rect><rect width="87.895" height="0.437" transform="translate(213.517 88.405) rotate(-23.36)" opacity="0.1"></rect><path d="M722.821,453.48s3.975,1.6,1.642,4.08-91.7,28.344-91.7,28.344Z" transform="translate(-416.78 -430.382)" fill="#576FF8"></path><path d="M712.45,427s-15.581,2.359-18.49,5.561" transform="translate(-451.247 -415.468)" opacity="0.1"></path><path d="M650.52,452.263a33.44,33.44,0,0,1,5.015-3.114,81.812,81.812,0,0,0,7.426-4.538" transform="translate(-426.781 -425.386)" opacity="0.1"></path></g><path d="M686.65,394.693s18.984,49.63,29.778,44.667,7.867-26.056,9.926-31.838,4.343-49.63,4.343-49.63,1.042-31.019,3.1-37.3c1.911-5.77,3.462-34.865,3.722-39.444v-.608l-2.047-35.982-11.589-2.891L697.01,251.6l-3.722,21.254-1.452,8.3-.62,3.536Z" transform="translate(198.203 221.815)" fill="#ed9da0"></path><path d="M576.871,396.443s-18.984,49.63-29.778,44.667-7.866-26.056-9.926-31.838-4.343-49.63-4.343-49.63-1.042-31.019-3.1-37.3c-1.911-5.77-3.462-34.865-3.722-39.444v-.608l2.06-35.982,11.589-2.891,26.875,9.926,3.722,21.254,1.452,8.3.62,3.536Z" transform="translate(159.526 222.237)" fill="#ed9da0"></path><path d="M563,407.356s-14.48,15.919-9.107,18.81,40.126,57.075,40.126,57.075S708.168,497.3,729.7,476.206s21.093-58.775,21.093-58.775-17.3,3.722-19.182,1.7-12.246-11.775-12.246-11.775S572.925,398.472,563,407.356Z" transform="translate(165.953 260.755)" fill="#090814"></path><path d="M774.522,266.579,737.3,296.357l-11.254.819-4.132.3-69.4,5.087L580.554,297.3l-10.708-.782-13.648-.993-28.537-27.3s20.2-21.639,37.893-36.243c6.973-5.77,13.561-10.435,18.363-12.271l.819-.285c3.02-1.178,32.6-4.261,34.754-6.688,13.971-14.405,0-48.749,0-48.749s61.629-31.838,54.184,9.926,13.34,35.583,14.2,35.978l25.09.749,4.578,2.1,11.675,5.348,26.341,12.085C776.234,239.692,774.522,266.579,774.522,266.579Z" transform="translate(159.926 200.319)" fill="#ed9da0"></path><path d="M775.008,293.064H526v-.608l2.06-35.982s20.2-21.639,37.893-36.243l156.336-6.2,7.271-7.668L755.9,218.445c20.683,9.5,19.021,36.391,19.021,36.391S777.75,285.992,775.008,293.064Z" transform="translate(159.526 213.314)" opacity="0.1"></path><path d="M775.008,292.064H526v-.608l2.06-35.982s20.2-21.639,37.893-36.243l156.336-6.2,7.271-7.668L755.9,217.445c20.683,9.5,19.021,36.391,19.021,36.391S777.75,284.992,775.008,292.064Z" transform="translate(159.526 213.073)" fill="#d6d6e3"></path><path d="M711.735,201.4l4.157,63.39,4.454,21.093,3.4,16.13s8.685,124.076,6.2,130.28,1.241,11.167,1.762,14.467-.521,11.589-.112,15.311,0,5.372-9.5,4.045-22.756-3.635-22.756-3.635-33.5,2.482-45.077-1.65-33.5-4.144-33.5-4.144-33.091.831-43.836-.409-16.552,13.239-23.574,9.095,8.263-44.245,13.227-55.834-6.613-40.945-6.613-40.945l14.889-82.6,3.313-18.723V208.408l.819-.285a20.422,20.422,0,0,0,7.866-5.484l3.722,59.234,116.631,4.144V199.35" transform="translate(165.674 211.627)" fill="#d6d6e3"></path><path d="M581.79,499.507l49.221,1.576-7.06-36.5-37.707,3.586Z" transform="translate(282.865 329.357)" fill="#ed9da0"></path><path d="M837.669,481.344c-3.313,4.132-16.13,11.576-17.371,14.058s-16.539,9.926-24.406,11.167-32.669,6.626-37.223,9.517c-3.263,2.084-29.456,8.685-46.665,12.346a132.411,132.411,0,0,1-14.132,2.544c-7.445.409-88.913-27.3-88.913-27.3l15.708-16.13.869-.3c4.442-1.5,24.964-8.437,36.354-11.738,12.83-3.722,27.719-19.021,27.719-19.021s21.912-7.445,24.815-8.276-7.445-28.947-7.445-28.947,47.558-6.6,66.17-12.2,61.629-3.524,69.483,18.4S841.032,477.212,837.669,481.344Z" transform="translate(179.499 261.003)" fill="#090814"></path><path d="M639,531.256s-9.5,9.926-19.021,9.107-42.794,2.482-42.794,2.482a66.713,66.713,0,0,0-16.763,9.715c-7.78,6.129-26.465,3.1-26.465,3.1s4.132-39.7,2.866-44.667S545,497.507,545,497.507l11.167-2.841,28.289-7.246,40.536,14.058Z" transform="translate(161.442 280.982)" fill="#090814"></path><path d="M712,512.361a132.46,132.46,0,0,1-14.132,2.544c-7.445.409-88.913-27.3-88.913-27.3l15.708-16.13.869-.3c2.482,1.749,4.516,3.251,5.968,4.392,6.837,5.385,13.437-1.65,15.919-1.65S671.4,491.7,671.4,491.7s19.852,4.554,23.165,8.685,14.889,3.313,16.949,6.2C712.132,507.485,712.206,509.681,712,512.361Z" transform="translate(179.497 277.072)" opacity="0.1"></path><path d="M592.416,420.6s-20.075,1.154-31.652-3.722-50.04-16.13-61.207-8.226-38.054,14.889-25.647,46.33,18.2,32.26,18.2,32.26a44.793,44.793,0,0,1,9.926,10.3c3.722,5.794,38.464,19.021,47.149,19.021s23.984,0,45.486,14.889S635.619,548,635.619,548s27.3,11.167,35.8,13.648,47.335,13.226,56.442,9.926,14.889-24,14.889-24,4.132-18.611,2.06-21.5-13.648-2.072-16.949-6.2-23.165-8.685-23.165-8.685-21.453-17.792-23.934-17.792-9.082,7.023-15.919,1.65a363.155,363.155,0,0,0-42.819-27.3C606.313,459.472,592.416,420.6,592.416,420.6Z" transform="translate(146.215 261.359)" fill="#090814"></path><path d="M536.27,427.513a23.7,23.7,0,0,1,20.336,5.372c9.926,8.276,43.327,24.89,43.327,24.89" transform="translate(161.999 266.444)" opacity="0.1"></path><path d="M746.481,427s-44.258,6.7-52.521,15.795" transform="translate(199.964 266.436)" opacity="0.1"></path><path d="M799.36,549.458h-1.948c-7-.248-30.709-.993-35.275,0-5.372,1.241-76.518,0-76.518,0l13.909-2.891s-5.162-18.09-1.886-19.592c0,0-18.611-12.259-4.578-20.535s29.158-4.789,29.158-4.789l35.225-11.936,6.762-2.3s39.7,2.072,50.449,29.369S799.36,549.458,799.36,549.458Z" transform="translate(197.955 280.982)" fill="#090814"></path><path d="M533.79,250.96l21.961-19.852s85.153-5.583,88.677,23.364c0,0,30.188-34.319,93.677-26.676l26.862,21.391-74.247,32.582-72.15,25.026-53.142-23.785Z" transform="translate(161.4 218.208)" fill="#f2f2f2"></path><path d="M437.38,202.83,447.1,319.052l102.983,5.174L545.612,208.5l-.087-1.948Z" transform="translate(248.096 266.338)" fill="#576FF8"></path><path d="M655.944,200.83,549.71,216.761V333.5l103.814-15Z" transform="translate(275.141 265.857)" fill="#576FF8"></path><path d="M626.275,223.79l-57.385,6.378,1.253,19.554,56.095-6.129Z" transform="translate(279.758 271.385)" fill="#fff" opacity="0.3"></path><path d="M538.774,410.164l5.844,15.72s8.685,7.445,18.19,3.722,17.793-5.571,21.924-9.194,9.926-21.825,9.926-21.825,5.794-19.852,11.576-24.815,21.093-73.341,0-66.654-37.223,68.726-37.223,68.726-3.722,4.541-9.095,4.963-16.13-.831-18.2,3.722S532.57,401.07,538.774,410.164Z" transform="translate(162.001 237.462)" fill="#ed9da0"></path><path d="M644.335,258.587a35.734,35.734,0,0,1-31.155-7.767l4.479,115.713s10.546,11.415,26.676,8.809Z" transform="translate(180.515 224.019)" fill="#576FF8"></path><path d="M644.335,258.587a35.734,35.734,0,0,1-31.155-7.767l4.479,115.713s10.546,11.415,26.676,8.809Z" transform="translate(180.515 224.019)" opacity="0.1"></path><path d="M640.29,248.808s43.216-13.214,54.482-11.353" transform="translate(187.041 220.758)" opacity="0.1"></path><path d="M610.816,243.4s-41.888-9.926-48.886-7.11" transform="translate(168.177 220.398)" opacity="0.1"></path><path d="M662.25,249.242s28.9-10.6,39.345-5.559" transform="translate(192.328 221.973)" opacity="0.1"></path><path d="M650.52,466.348a95,95,0,0,1,14.244-8.847c7.444-3.586,21.093-12.891,21.093-12.891" transform="translate(189.505 270.675)" opacity="0.1"></path><path d="M568.214,360.08s-18.128,14.827-23.574,16.13-8.809,12.867-8.809,12.867" transform="translate(161.891 250.324)" opacity="0.1"></path><path d="M730.5,408.377l-5.782,15.758s-8.685,7.445-18.2,3.722-17.78-5.571-21.924-9.194-9.926-21.825-9.926-21.825-5.782-19.852-11.576-24.815-21.093-73.341,0-66.654,37.223,68.726,37.223,68.726,3.722,4.541,9.095,4.963,16.13-.831,18.2,3.722S736.7,399.32,730.5,408.377Z" transform="translate(189.93 237.041)" fill="#ed9da0"></path><path d="M691.69,358.3s15.97,13,20.783,14.144,7.766,11.282,7.766,11.282" transform="translate(203.25 253.466)" opacity="0.1"></path></g></svg>

                            </div>
                        </div>
                    </div>

                </section>



                <section className='featured-Illus'>
                    <div className='container'>
                        <h2 className='mt-5 mb-4'>Featured Illustrations</h2>

                        <div className="row">
                            <div className="col-lg-3 text-center">
                                <div className="card card-bg">
                                    <svg width="120" height="120" viewBox="0 0 800.64 533.072" role="img" artist="Katerina Limpitsouni" source="https://undraw.co/"><g transform="translate(-454.467 -212.002)"><path d="M482.342,713.12a13.987,13.987,0,0,1-17.617-4.2c-.395-.543.43-1.182.826-.638a12.952,12.952,0,0,0,16.4,3.877c.6-.307.99.66.4.965Z" transform="translate(753.091 20.702)" fill="#fff" /><path d="M473.349,676.436a7.917,7.917,0,0,0,5.451-5.169c.208-.639,1.169-.233.963.4a8.872,8.872,0,0,1-6.018,5.732.539.539,0,0,1-.681-.285A.524.524,0,0,1,473.349,676.436Z" transform="translate(751.211 29.008)" fill="#fff" /><path d="M977.768,398.345c0,110.6-70.1,204.826-168.279,240.682a253.338,253.338,0,0,1-46.048,12.087A257.9,257.9,0,0,1,634.8,639.431c-98.8-35.561-169.413-130.11-169.367-241.14,0-141.421,114.694-256.114,256.169-256.114A256.149,256.149,0,0,1,977.768,398.345Z" transform="translate(277.338 90.56)" fill="#f2f2f2" /><path d="M858.3,767.84a253.333,253.333,0,0,1-46.048,12.087,257.9,257.9,0,0,1-128.643-11.683l11.83-47.469.714-2.849,24.142.093,121.284.435,1.553,4.588Z" transform="translate(228.525 -38.253)" fill="#2f2e41" /><rect width="222.518" height="251.787" rx="8" transform="translate(454.467 212.002)" fill="#e6e6e6" /><rect width="214.194" height="241.134" rx="5" transform="translate(458.435 217.329)" fill="#fff" /><circle cx="12.007" cy="12.007" r="12.007" transform="translate(553.72 425.875)" fill="#e6e6e6" /><rect width="68.961" height="7.055" transform="translate(494.737 302.685)" fill="#e6e6e6" /><rect width="104.081" height="7.055" transform="translate(494.737 323.825)" fill="#6c63ff" /><rect width="93.865" height="7.055" transform="translate(494.737 345.098)" fill="#e6e6e6" /><rect width="144.947" height="7.055" transform="translate(494.737 365.809)" fill="#6c63ff" /><rect width="118.129" height="7.055" transform="translate(496.244 385.533)" fill="#e6e6e6" /><path d="M470.813,618.97a23.1,23.1,0,0,1,2.322,2.795L581.9,619.1l12.688-23.186,37.494,14.575L613.6,653.722a17.551,17.551,0,0,1-18.242,10.527L472.478,649.4a23.028,23.028,0,1,1-1.669-30.438Z" transform="translate(284.957 -10.956)" fill="#ed9da0" /><path d="M669.854,605.049l-51.772-20.714.22-.921c.222-.932,22.257-93.01,25.183-107.807,3.048-15.416,14.183-19.678,14.656-19.852l.345-.127,20.489,6.237,9,70.7Z" transform="translate(243.186 20.431)" fill="#6c63ff" /><path d="M718.072,337.454v-53.26a71.369,71.369,0,1,1,142.736-.473q0,.236,0,.473v53.26a9.6,9.6,0,0,1-9.587,9.587H727.659A9.6,9.6,0,0,1,718.072,337.454Z" transform="translate(220.815 74.807)" fill="#2f2e41" /><path d="M2.833,0,47.947.787l8.7,51.234H0Z" transform="matrix(1, -0.017, 0.017, 1, 977.099, 410.416)" fill="#ed9da0" /><circle cx="52.324" cy="52.324" r="52.324" transform="translate(943.265 315.958)" fill="#ed9da0" /><path d="M670.758,444.348l50.9-16.681,14.949-20.5,72.749,4.305,10.681,23.925,38.792,18.33-5.962,110.715-10.2,103.614c-52.443-27.156-150.316-6.453-151.173-6.116Z" transform="translate(231.4 31.274)" fill="#6c63ff" /><path d="M696.322,294.05a56.519,56.519,0,0,1,56.456-56.456H763.43a56.519,56.519,0,0,1,56.455,56.456v1.065H797.374l-7.678-21.5-1.536,21.5H776.527l-3.874-10.848-.776,10.848H696.322Z" transform="translate(230.49 68.619)" fill="#2f2e41" /><path d="M783.952,365.438a9.445,9.445,0,0,1-.751-10.028c11.288-21.47,27.092-61.143,6.115-85.609l-1.5-1.756h60.9v91.437l-55.325,9.762a9.786,9.786,0,0,1-1.7.15,9.548,9.548,0,0,1-7.737-3.953Z" transform="translate(206.489 62.399)" fill="#2f2e41" /><path d="M822.345,701.636a23.065,23.065,0,0,1,3.631.2l72-81.564L889.6,595.209l36.18-17.584,19.139,42.938a17.55,17.55,0,0,1-4.684,20.535L845.8,721.11a23.028,23.028,0,1,1-23.455-19.474Z" transform="translate(202.481 -6.863)" fill="#ed9da0" /><path d="M910.145,603.483l-30.033-70.645,11.714-49.208,12.621-15.945a7.271,7.271,0,0,1,5.841.054c4.658,1.873,8.617,7.615,11.781,17.065l28.147,80.172Z" transform="translate(184.561 17.865)" fill="#6c63ff" /><g transform="translate(540 231.612)"><path d="M210.287,123.086a25.532,25.532,0,1,0,25.531,25.532h0a25.532,25.532,0,0,0-25.532-25.532Zm0,7.659a7.659,7.659,0,1,1-7.659,7.659h0A7.659,7.659,0,0,1,210.287,130.745Zm0,36.874a18.6,18.6,0,0,1-15.319-8.175c.123-5.106,10.213-7.917,15.319-7.917s15.2,2.811,15.319,7.917A18.63,18.63,0,0,1,210.287,167.618Z" transform="translate(-184.753 -123.086)" fill="#6c63ff" /></g><path d="M216.534,384.632c9.925-18.188,33.7-29.707,53.151-19.324,8.755,4.673,15.714,12.938,17.923,22.707,2.564,11.348-2.838,22.169-8.415,31.7-3.027,5.175-6.343,10.245-8.848,15.7-2.594,5.653-4.448,12.186-2.495,18.335,1.758,5.54,6.166,9.569,10.993,12.531a81.912,81.912,0,0,0,16.892,7.545,99.428,99.428,0,0,0,37.712,4.879,103.137,103.137,0,0,0,18.8-3.038c6.551-1.67,12.979-3.787,19.54-5.42,10.955-2.721,23.446-4.074,33.834,1.392,10.092,5.312,14.609,16.422,16.005,27.229,2.58,19.957-5.333,40.668-19.62,54.643-6.855,6.705-15.48,12.245-24.875,14.511-8.2,1.978,8.219,2.778,16.78-2.572,17.809-11.129,29.65-30.7,32.128-51.451,1.291-10.812-.023-22.459-4.926-32.273A31.594,31.594,0,0,0,409.5,468.795a38.179,38.179,0,0,0-16.537-5.1c-13.147-1.211-25.778,3.3-38.249,6.756a106.064,106.064,0,0,1-19.5,3.723,97.406,97.406,0,0,1-19.244-.313,94.761,94.761,0,0,1-18.647-4.138,74.637,74.637,0,0,1-16.926-7.652c-4.677-2.991-8.722-7.274-8.952-13.111-.25-6.329,2.942-12.25,5.977-17.586,6-10.541,13.4-20.852,14.968-33.192,1.37-10.795-2.974-21.434-10.475-29.133a39.387,39.387,0,0,0-29.107-12.075c-11.129.319-21.784,5.158-29.97,12.591a49.339,49.339,0,0,0-10.108,12.84c-1.356,2.484,2.438,4.7,3.795,2.218Z" transform="translate(350.18 55.21)" fill="#3f3d56" /></g></svg>
                                    
                                </div>

                                <h4 className='mt-3'>Business</h4>
                            </div>
                        </div>

                    </div>
                </section>

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
            </main>
        </>
    )
}

export default page




