import React from 'react'
import SliderIntro from './SliderIntro';
import ServiceList from './ServiceList';
import DownloadApp from './DownloadApp';

type Props = {}

const LoginIntro = (props: Props) => {
  return (
    <div className="login-intro">
        <SliderIntro />
        <ServiceList />
        <DownloadApp />
    </div>
  )
}

export default LoginIntro;
