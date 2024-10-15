import { download1Image, download2Image } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const DownloadApp = (props: Props) => {
  return (
    <div className="download-app">
      <div className="download-app__content">
        <h3 className="download-app__title">
          Tải ứng dụng đặt khám ngay hôm nay
        </h3>
        <p className="download-app__desc">Trên nền tảng IOS và Android</p>
      </div>

      <div className="download-app__buttons">
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src={download1Image}
            className="download-app__buttons__img"
            alt="download app store"
          />
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src={download2Image}
            className="download-app__buttons__img"
            alt="download google play"
          />
        </Link>
      </div>
    </div>
  );
};

export default DownloadApp;
