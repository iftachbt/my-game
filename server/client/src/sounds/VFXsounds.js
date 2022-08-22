import sound from "../components/index/images/home-page-sound/impact-6291.mp3";

export function soundEffect(sound) {
  const audio = new Audio(sound);
  audio.play();
}
