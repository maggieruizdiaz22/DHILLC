
import QRCode from "qrcode.react";
import { mobilQR } from "../assets"


const QrCodeBar = () => {

return (
  <div className="w-full h-full lg:h-screen mobile:block bg-[#4989e8] flex flex-col justify-center items-center">
    <div className="flex items-center">
      <img src={mobilQR} alt="QR Code" className="w-12 lg:w-auto pt-2 " />
      <div className="ml-4">
        <h1 className="lg:text-4xl font-bold text-2xl pb-1 pl-2 text-black radient-to-r bg-clip-text text-transparent font-Nunito px-10 md:px-3">
          SCAN ME
        </h1>
        <h2 className="text-white pl-3">
          Hold the camera <br />
          to the image
        </h2>
      </div>
    </div>
    <div className="justify-center bg-white mt-8 border rounded-md border-white p-4">
      <QRCode
        value={"https://www.distinctivehillc.com"}
        size={200}
        bgColor="#fff"
      />
    </div>
  </div>
);
}



export default QrCodeBar