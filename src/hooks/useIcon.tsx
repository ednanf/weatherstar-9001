import Clear from '../assets/WeatherIcons/Clear.gif';

type useIcon = {
  id: string;
};

function useIcon(id: string) {
  switch (id) {
    case 'sunny':
      return Clear;
    default:
      return Clear;
  }
}
export { useIcon };
