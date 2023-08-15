import localStorageKullan from "./localStorageKullan";
function useDarkMode() {
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);
  // const [geceModu, setGeceModu]=useState(false); localStorage kullanmadan önce bu şekilde kullanıyorduk.
  // localStorageKullan hook'u kullanılarak, geceModu ve setGeceModu değişkenleri tanımlanır.
  //Burada, localStorageKullan("geceModu", false) ile geceModu değerini localStorage'da saklamış oluyoruz. Eğer daha önce bir değer kaydedilmişse bu değer alınacak, aksi halde varsayılan değer false olacak.

  const toggleDarkMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleDarkMode];
}

export default useDarkMode;