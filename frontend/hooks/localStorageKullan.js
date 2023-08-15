import { useState, useEffect } from "react";

function localStorageKullan(key, baslangicDegeri) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : baslangicDegeri;
    } catch (error) {
      console.log(error);
      return baslangicDegeri;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default localStorageKullan;

/*KENDİME NOTLAR

Bu hook, bir key ve bir baslangicDegeri alıyor ve localStorage'da belirtilen key ile bir değer yoksa varsayılan değer olarak kullanılıyor.

Daha sonra, useState hook'u kullanılarak, storedValue ve setStoredValue adında iki değişken tanımlanır. storedValue, localStorage'da depolanan değeri tutar, setStoredValue ise, storedValue'yu değiştirmek için kullanılır.

useEffect hook'u kullanılarak, storedValue değiştiğinde, localStorage'a güncel değeri kaydetmek için bir etkileşim tanımlanır. Etkileşim, sadece key ve storedValue değiştiğinde çalışır.

Son olarak, hook storedValue ve setStoredValue'yu döndürür. Bu şekilde, bileşenler, storedValue değerini okuyabilir ve setStoredValue'yi kullanarak değeri güncelleyebilir.


*/