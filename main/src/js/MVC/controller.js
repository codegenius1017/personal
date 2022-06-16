import { lightTheme } from "./model.js"; // state.save, state.load
import LightThemeView from "./views/header/LightThemeView.js";
import Header from "./views/header/Header.js";
import MenuView from "./views/header/MenuView.js";
import Typewriter from "./views/Typewriter.js";
import Slider from "./views/Slider.js";
import ModalView from "./views/ModalView";

const controlTheme = function () {
  lightTheme.isActive = !lightTheme.isActive;
  lightTheme.isActive ? lightTheme.save() : lightTheme.delete();
  LightThemeView.enableLightTheme(lightTheme.isActive);
};

const init = function () {
  if (lightTheme.load()) {
    lightTheme.isActive = !lightTheme.isActive;
    LightThemeView.enableLightTheme(lightTheme.isActive).toggleSwitch();
  }
  LightThemeView.addHandler(controlTheme);
  MenuView.addHandler();
  Header.addHandler();
  Typewriter.addHandler();
  Slider.addHandler();
  ModalView.addHandler();
};

init();
