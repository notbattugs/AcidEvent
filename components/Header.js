import React from 'react';

export default function Header() {
  return (
    <div className="h-[80px] w-[100vw] bg-[#5563e6] flex justify-between items-center gap-10 fixed top-0">
      <div className="text-white text-xs gap-8 w-[40%] justify-center items-center	hidden lg:flex">
        <div className="w-5 h-5"></div>
        <div>OVERVIEW</div>
        <div>SPONSORS</div>
        <div>PROGRAM</div>
        <div className="w-">CAREER FAIR</div>
      </div>
      <div className="w-2/3 h-full flex justify-center items-center p-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="50"
          viewBox="0 0 91 90"
          fill="none"
          className="hidden lg:flex"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.13996 28.2798C8.15232 27.1318 6.33245 26.494 5.86327 27.5418C3.47557 32.8743 2.1481 38.7825 2.1481 45C2.1481 51.2325 3.48198 57.1542 5.88054 62.4967C6.34955 63.5414 8.15082 62.9138 8.13969 61.7687C8.11303 59.0251 8.47285 56.1394 9.18918 53.1934C9.80619 50.6559 10.6899 48.059 11.8282 45.4476C11.9415 45.1877 11.9415 44.8922 11.8282 44.6322C10.759 42.1794 9.91344 39.7372 9.3029 37.3432C8.50819 34.2272 8.10881 31.1741 8.13996 28.2798ZM15.0143 17.0439C14.5974 16.6247 13.9071 16.656 13.5651 17.1383C10.0984 22.0268 9.39849 28.9868 11.3724 36.7665L12.5636 40.0916C12.8585 40.9149 14.0037 40.994 14.4331 40.2322C16.9134 35.8315 20.094 31.4747 23.9165 27.3769C24.2866 26.9802 24.2815 26.3608 23.8989 25.9762L15.0143 17.0439ZM25.3972 28.935C25.7795 28.5236 26.4266 28.5175 26.8227 28.9157L38.6907 40.8474C39.0792 41.238 39.7104 41.2405 40.102 40.8531L40.2063 40.7499C40.5993 40.361 40.6019 39.7269 40.212 39.3348L28.3146 27.3736C27.924 26.9809 27.9271 26.3446 28.3272 25.9616C33.5204 20.9903 39.1461 17.1101 44.7176 14.4254C44.9841 14.2969 45.2938 14.2959 45.5612 14.4226C50.9759 16.9877 56.4506 20.6848 61.5383 25.4179C61.9501 25.8011 61.9552 26.4493 61.5553 26.8449L49.4733 38.7989C49.0803 39.1878 49.0777 39.822 49.4677 40.214L49.5711 40.318C49.9596 40.7085 50.5908 40.711 50.9824 40.3236L63.0997 28.3347C63.4929 27.9457 64.128 27.9498 64.5102 28.3495C69.444 33.5089 73.2949 39.0898 75.9601 44.6149C76.0897 44.8837 76.0897 45.1963 75.9601 45.4651C73.2958 50.9882 69.4467 56.5671 64.5153 61.7251C64.1309 62.1271 63.4914 62.1286 63.0992 61.7343L50.9829 49.5529C50.5945 49.1624 49.9632 49.1599 49.5716 49.5473L49.4673 49.6505C49.0743 50.0394 49.0717 50.6735 49.4617 51.0656L61.5665 63.2354C61.9609 63.6319 61.9533 64.2757 61.5438 64.6568C56.4546 69.3924 50.9778 73.0911 45.5612 75.6572C45.2938 75.7839 44.9841 75.7829 44.7175 75.6544C39.2674 73.0282 33.7655 69.258 28.6672 64.4416C28.2605 64.0574 28.2579 63.4132 28.6556 63.0197L40.7372 51.0661C41.1303 50.6772 41.1328 50.043 40.7429 49.651L40.6395 49.547C40.251 49.1565 39.6197 49.1539 39.2282 49.5414L27.1335 61.5079C26.7383 61.8989 26.0991 61.8924 25.7179 61.4877C20.9214 56.3943 17.1705 50.9011 14.5682 45.4623C14.4403 45.1951 14.4403 44.885 14.5682 44.6178C17.1104 39.3043 20.7506 33.9352 25.3972 28.935ZM14.2762 49.5676C13.8589 48.8179 12.752 48.8752 12.4688 49.6851C11.9956 51.0381 11.5977 52.3783 11.2768 53.6983C9.38551 61.4764 10.1862 68.4057 13.7725 73.2269C14.1185 73.6921 14.7926 73.718 15.2048 73.3102L24.1873 64.4229C24.5768 64.0375 24.5826 63.4106 24.2065 63.0121C20.1705 58.7355 16.839 54.1718 14.2762 49.5676ZM27.1136 65.9247C26.7183 65.5502 26.0962 65.552 25.7091 65.935L16.711 74.8378C16.2993 75.2451 16.3175 75.9185 16.7778 76.2699C21.6186 79.9652 28.6447 80.8091 36.5438 78.8985C37.8405 78.5849 39.1565 78.1976 40.4851 77.7383C41.2965 77.4577 41.3572 76.3501 40.6079 75.931C35.9793 73.3418 31.3982 69.984 27.1136 65.9247ZM45.5374 78.3918C45.2781 78.2778 44.9828 78.2768 44.7228 78.389C42.136 79.5048 39.564 80.3725 37.05 80.9806C34.1606 81.6794 31.3291 82.0381 28.6322 82.0285C27.4858 82.0244 26.8748 83.8311 27.9257 84.2892C33.1907 86.5843 39.0059 87.8576 45.1193 87.8576C51.1739 87.8576 56.9361 86.6087 62.1609 84.3551C63.1982 83.9078 62.6545 82.1915 61.5249 82.1787C58.9623 82.1496 56.2833 81.793 53.5526 81.1325C50.9277 80.4976 48.2395 79.5796 45.5374 78.3918ZM82.4614 61.2248C82.477 62.354 84.1935 62.8946 84.6391 61.8569C86.8606 56.6829 88.0905 50.9847 88.0905 45C88.0905 39.0258 86.8649 33.3372 84.6508 28.1704C84.205 27.1301 82.476 27.6779 82.4621 28.8097C82.4308 31.3575 82.0734 34.0204 81.4135 36.7344C80.7847 39.3203 79.879 41.9678 78.7092 44.6295C78.5942 44.891 78.5942 45.189 78.7092 45.4505C79.8789 48.1121 80.7847 50.7595 81.4134 53.3454C82.0694 56.0433 82.4265 58.6908 82.4614 61.2248ZM78.067 49.6474C77.7812 48.8415 76.6793 48.7852 76.2619 49.5313C73.6253 54.2435 70.1854 58.9085 66.0137 63.2622C65.6348 63.6577 65.6357 64.2844 66.022 64.6727L75.1165 73.8161C75.5193 74.221 76.1816 74.2083 76.5365 73.7609C80.3716 68.9275 81.2676 61.8363 79.3258 53.8503C78.9899 52.4686 78.5696 51.0648 78.067 49.6474ZM73.4365 76.7088C73.9146 76.3668 73.9462 75.6816 73.5317 75.2649L64.4895 66.1741C64.1054 65.7879 63.483 65.7812 63.0848 66.1528C58.8148 70.1373 54.2605 73.4289 49.6653 75.9619C48.9138 76.3762 48.9668 77.4838 49.7757 77.7705C51.2204 78.2827 52.651 78.7099 54.0588 79.0504C61.7492 80.9105 68.6121 80.1598 73.4365 76.7088ZM76.2619 40.5486C76.6794 41.2948 77.7813 41.2385 78.067 40.4326C78.5697 39.0151 78.9899 37.6113 79.3259 36.2295C81.2532 28.3033 80.385 21.2585 76.6223 16.4278C76.2711 15.9769 75.6084 15.9585 75.2022 16.3605L66.0456 25.42C65.654 25.8074 65.6505 26.4383 66.0314 26.8361C70.1952 31.1846 73.6291 35.8431 76.2619 40.5486ZM63.1034 23.9444C63.4993 24.314 64.1174 24.31 64.5025 23.929L73.632 14.8962C74.0495 14.4831 74.0237 13.7982 73.549 13.4522C68.7191 9.93185 61.8092 9.15476 54.0589 11.0293C52.6511 11.3698 51.2204 11.7971 49.7757 12.3093C48.9668 12.596 48.9137 13.7036 49.6653 14.1179C54.2672 16.6546 58.828 19.9521 63.1034 23.9444ZM44.7228 11.6908C44.9828 11.803 45.2781 11.802 45.5374 11.688C48.2395 10.5002 50.9278 9.58213 53.5527 8.94725C56.3338 8.27459 59.0613 7.91713 61.6668 7.89982C62.7985 7.89231 63.3565 6.16589 62.3191 5.71347C57.0525 3.41666 51.2351 2.14242 45.1193 2.14242C38.9492 2.14242 33.0828 3.43942 27.7792 5.77497C26.7277 6.23803 27.3562 8.06104 28.5051 8.05201C31.2401 8.03053 34.1152 8.38936 37.0499 9.09919C39.5639 9.70724 42.136 10.575 44.7228 11.6908ZM16.5014 14.0258C16.0581 14.3804 16.0448 15.0379 16.4452 15.4404L25.3923 24.4356C25.7801 24.8255 26.4098 24.828 26.8068 24.4475C31.1792 20.2568 35.8687 16.7999 40.608 14.1488C41.3573 13.7297 41.2965 12.6221 40.4851 12.3415C39.1565 11.8821 37.8404 11.4949 36.5437 11.1813C28.493 9.23404 21.3491 10.148 16.5014 14.0258ZM0 45C0 20.1472 20.2006 0 45.1193 0C70.038 0 90.2386 20.1472 90.2386 45C90.2386 69.8528 70.038 90 45.1193 90C20.2006 90 0 69.8528 0 45Z"
            fill="white"
          ></path>
        </svg>

        <img
          src="https://assets-global.website-files.com/65adbc76df6108aab934a79a/65adc1b7d3d626551bd1f26c_Logotype.svg"
          className="w-[400px] h-[200px] block lg:hidden"
        ></img>
      </div>
      <div className="flex w-[40%] justify-end items-center	 ">
        <button className="h-12 w-28 text-black justify-center items-center bg-white text-sm hidden lg:flex">
          {' '}
          REGISTER
        </button>
        <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>

        <div className="w-5 h-5"></div>
      </div>
    </div>
  );
}
