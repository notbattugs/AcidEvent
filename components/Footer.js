import React from 'react';

const logos = {
  Open: 'https://assets-global.website-files.com/65ae608b74053afd2816d839/65b83796e6a579d762a4a639_okl.svg',
  CaffeInc:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65b83789cf2982d305d06fb1_caffe.svg',
  Spark:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65b83778dbe1ac998714acd8_spark.svg',
  Vu: 'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae70786d1cea5736244dc3_vu.svg',
  XUX: 'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6fb1e5c62959b862265f_university.svg',
  Sea: 'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6e92d6e8611d02685180_seaborough.svg',
  POA: 'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6e5a852f80447ea8fde0_port.svg',
  Matrix:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6e20d8bcc410b11c42d0_matrix.svg',
  ChemistryNL:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6d6a03d258e9f080e3df_chemistrynl.svg',
  ArgentEnergy:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6d3675dc752d2fc5cd02_argent_energy.svg',
  Amolf:
    'https://assets-global.website-files.com/65ae608b74053afd2816d839/65ae6d223ab2d231e5a9d702_amolf.svg',
};

export default function Footer() {
  return (
    <div className='w-screen h-screen flex justify-between items-center flex-col bg-[#5563e6] bg-[url("https://assets-global.website-files.com/65adbc76df6108aab934a79a/65afa3e9249fe86d7aa216ca_footer_gemstone.webp")] bg-auto bg-center bg-no-repeat'>
      <div className="w-screen h-[10%] flex justify-start items-center">
        <div className="w-10 h-auto"></div>
        <a href="/Privacy">
          <h1 className="text-white flex text-xs">PRIVACY POLICY</h1>
        </a>
      </div>
      <div className="w-screen h-auto flex justify-center items-center group">
        <div className="group-hover:-rotate-12 group-hover:mr-10 group-hover:mt-8 w-[400px] h-60 backdrop-blur-md bg-white/30 flex justify-center items-between transform transition-all duration-1000">
          <div className="w-[80%] h-full flex">
            <div className="w-[65%] flex justify-around items-start flex-col">
              <div>
                <h1 className="text-white">March 22,2024</h1>
                <h1 className="text-white">10:00 - 19:00</h1>
              </div>
              <div>
                <h1 className="text-white text-base">UvA Science Park 904</h1>
                <h1 className="text-white text-base">Amsterdam (NL)</h1>
              </div>
            </div>
            {/* <div className="w-[35%] h-full">
              <img
                src="https://i.ibb.co/BZMKLV6/image.png"
                className="w-full h-full"
              ></img>
            </div> */}
          </div>
        </div>
        <div className="group-hover:rotate-12 group-hover:ml-10 w-[200px] h-60 bg-white flex justify-center items-center transition-all duration-1000">
          <div>REGISTER</div>
        </div>
      </div>
      <div className="w-screen h-[10%] flex justify-around items-center ">
        {Object.entries(logos).map(([name, url]) => (
          <img key={name} src={url} alt={name} />
        ))}
      </div>
    </div>
  );
}
