import React from "react";
import texts from '../../../data/texts'
import "./Settings.scss";

const Settings = () => {
  return <div className="settings__container">
    <img src={process.env.PUBLIC_URL + '/images/subtitle.svg'} alt=""/>
    <h1>{texts.setSubtitle.title}</h1>
    <h3>{texts.setSubtitle.copy}</h3>
    <a target='_blank' href="https://support.microsoft.com/pl-pl/topic/jak-u%C5%BCywa%C4%87-plik%C3%B3w-srt-do-wy%C5%9Bwietlania-napis%C3%B3w-podczas-odtwarzania-wideo-ea2ae7f6-e49d-bd06-446a-77d2daa00615">Windows</a>
    <a target='_blank' href="https://support.apple.com/pl-pl/guide/quicktime-player/qtped9fbc349/mac">macOS</a>
  </div>;
};

export default Settings;
