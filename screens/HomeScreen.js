import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { StyleSheet } from "react-native";
import Tus from './Tus';

const HomeScreen = () => {
  // Değişkenleri oluşturuyoruz.
  // ilk sayi değişken , setIlkSayi ise
  // değişkeni değiştirmek için kullandığımız fonksyion
  const [ilkSayi, setIlkSayi] = useState("");
  const [sonSayi, setSonSayi] = useState("");
  const [isaret, setIsaret] = useState("");
  const [sonuc, setSonuc] = useState("");


  console.log("ilkSayi", ilkSayi)
  console.log("sonSayi", sonSayi)
  console.log("isaret", isaret)

  const FaktoriyelHesapla = (sayi) => {
    if (sayi < 0) {
      return -1;
    }
    else if (sayi == 0) {
      return 1;
    }
    else {
      // recursive fonksiyon
      return (sayi * FaktoriyelHesapla(sayi - 1));
    }
  }

  const BilimselHesapla = (islem) => {
    // ilk sayi boştan farklıysa hesaplama yapıyor
    // .toFixed noktadan sonra max 10 tane göster
    if (ilkSayi != "") {
      if (islem == "sin") {
        Temizle();
        setSonuc(Math.sin(ilkSayi).toFixed(10));
      }
      else if (islem == "cos") {
        Temizle();
        setSonuc(Math.cos(ilkSayi).toFixed(10));
      }
      else if (islem == "tan") {
        Temizle();
        setSonuc(Math.tan(ilkSayi).toFixed(10));
      }
      else if (islem == "cot") {
        Temizle();
        setSonuc((1 / Math.tan(ilkSayi)).toFixed(10));
      }
      else if (islem == "x!") {
        Temizle();
        setSonuc(FaktoriyelHesapla(ilkSayi));
      }
      else if (islem == "x²") {
        Temizle();
        setSonuc((ilkSayi) * (ilkSayi));
      }
      else if (islem == "√") {
        Temizle();
        setSonuc(Math.sqrt(ilkSayi).toFixed(10));
      }
      else if (islem == "π") {
        Temizle();
        setSonuc((Math.PI * ilkSayi).toFixed(10));
      }

    }
  }

  const IsaretTikla = (isaret) => {
    // son sayi boş olduğunda ve ilk sayi boş olmadığında sadece işartei değiştiriyor.
    if (sonSayi == "" && ilkSayi != "") {
      setIsaret(isaret);
    }
  };
  const Temizle = () => {
    setIlkSayi("");
    setSonSayi("");
    setIsaret("");
    setSonuc("");
  };
  const SayiTikla = (sayi) => {
    setSonuc("")
    // işaret var mı yok mu kontrol ediyor.
    if (isaret) { // işaret varsa
      if (sayi == ".") { // tıkladığımız . ise 
        if (sonSayi.length == 0) { // son sayı uzunluğu 0 sa hiç girilmediyse
          setSonSayi("0.")
        }
        else if (sonSayi.indexOf(".") == -1) {
          // index of elemanın indexini bul 
          // -1 dönerse bulamadım demektir.
          // . yoksa ekleme yap yani noktayi koy
          setSonSayi(sonSayi + sayi)
        }
      }
      else if (sonSayi.length < 6) { // nokta değilse
        setSonSayi(sonSayi + sayi)
      }
    }



    else { // işaret yoksa
      if (sayi == ".") {
        if (ilkSayi.length == 0) {
          setIlkSayi("0.")
        }
        else if (ilkSayi.indexOf(".") == -1) {
          setIlkSayi(ilkSayi + sayi)
        }
      }
      else if (ilkSayi.length < 6) {
        setIlkSayi(ilkSayi + sayi)
      }
    }
  }
  const BirBasamakSil = () => {
    if (isaret == "") {
      setIlkSayi(ilkSayi.slice(0, -1));
    }
    else {
      setSonSayi(sonSayi.slice(0, -1));
    }
  }
  const Hesapla = () => {
    if (isaret == "+") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) + parseFloat(sonSayi));
    }
    else if (isaret == "-") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) - parseFloat(sonSayi));

    }
    else if (isaret == "*") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) * parseFloat(sonSayi));

    }
    else if (isaret == "/") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) / parseFloat(sonSayi));

    }
    else if (isaret == "％") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) / 100 * parseFloat(sonSayi));
    }
    else if (isaret == "mod") {
      Temizle();
      setSonuc(parseFloat(ilkSayi) % parseFloat(sonSayi));
    }
    else {
      setSonuc("")
    }
  };

  // Return kısmı da tasarım kısmı
  return (
    <View
      style={{
        flex: 1, // ekranı kapla demek
      }}>


      <TouchableOpacity
        // hakkımda butonu
        // TouchableOpacity buton demektir.
        // butondan farkı
        // butona çok stil verilmediği bunu kullandık.
        style={{
          borderRadius: 15, // etrafındaki kalınlığın dairesi açısı
          marginTop: 15, //yukarıdan 25 boşluk
          marginLeft: "63%", // soldan 63% boşluk 
          borderWidth: 2, // çerçevenin kalınlığı
          width: "33%", // genişlik
          alignItems: "center", // içerisindekileri ortala
        }
        }
        onPress={() => { // tıklandığında
          // şu uyarıyı göstersin.
          Alert.alert("Trakya Üniversitesi", "Çağkan Altıntaş\n1181602086")
        }}>
        <Text
          style={{
            fontSize: 25, // yazının boyutu
            color: 'black', // rengi
          }}
        >Hakkımda</Text>
      </TouchableOpacity>


      <View
        style={{
          marginTop: 10,
          borderWidth: 3,
          height: 100,
          width: "90%",
          justifyContent: "center", // dikey ortala
          alignSelf: "center", // yatay ortala
        }
        }
      >
        {sonuc == "" ?
          <Text style={{
            fontSize: 40,
            color: '#000',
            alignSelf: "flex-end" // yatay sona daya
          }
          }>
            {ilkSayi}{isaret}{sonSayi}
          </Text>
          :
          <Text style={{
            fontSize: 40,
            color: '#000',
            alignSelf: "flex-end"
          }}>
            {sonuc}
          </Text>
        }
      </View >


      <View style={{ marginTop: 10, alignItems: "center", width: "100%" }}>
        <View style={{ flexDirection: "row", }}>
          <Tus yazi="x!" color="#1e4fff" onPress={() => { BilimselHesapla("x!") }} />
          <Tus yazi="x²" color="#1e4fff" onPress={() => { BilimselHesapla("x²") }} />
          <Tus yazi="√" color="#1e4fff" onPress={() => { BilimselHesapla("√") }} />
          <Tus yazi="π" color="#1e4fff" onPress={() => { BilimselHesapla("π") }} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="sin" color="#1e4fff" onPress={() => { BilimselHesapla("sin") }} />
          <Tus yazi="cos" color="#1e4fff" onPress={() => { BilimselHesapla("cos") }} />
          <Tus yazi="tan" color="#1e4fff" onPress={() => { BilimselHesapla("tan") }} />
          <Tus yazi="cot" color="#1e4fff" onPress={() => { BilimselHesapla("cot") }} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="C" color="#ff0000" onPress={() => Temizle()} />
          <Tus yazi="mod" color="#ff701e" onPress={() => IsaretTikla("mod")} />
          <Tus yazi="％" color="#ff701e" onPress={() => IsaretTikla("％")} />
          <Tus yazi="÷" color="#ff701e" onPress={() => IsaretTikla("/")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="7" color="#09bff7" onPress={() => SayiTikla("7")} />
          <Tus yazi="8" color="#09bff7" onPress={() => SayiTikla("8")} />
          <Tus yazi="9" color="#09bff7" onPress={() => SayiTikla("9")} />
          <Tus yazi="×" color="#ff701e" onPress={() => IsaretTikla("*")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="4" color="#09bff7" onPress={() => SayiTikla("4")} />
          <Tus yazi="5" color="#09bff7" onPress={() => SayiTikla("5")} />
          <Tus yazi="6" color="#09bff7" onPress={() => SayiTikla("6")} />
          <Tus yazi="-" color="#ff701e" onPress={() => IsaretTikla("-")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="1" color="#09bff7" onPress={() => SayiTikla("1")} />
          <Tus yazi="2" color="#09bff7" onPress={() => SayiTikla("2")} />
          <Tus yazi="3" color="#09bff7" onPress={() => SayiTikla("3")} />
          <Tus yazi="+" color="#ff701e" onPress={() => IsaretTikla("+")} />
        </View>

        <View style={{ flexDirection: "row", }}>
          <Tus yazi="." color="gray" onPress={() => SayiTikla(".")} />
          <Tus yazi="0" color="#09bff7" onPress={() => SayiTikla("0")} />
          <Tus yazi="⌫" color="red" onPress={() => BirBasamakSil()} />
          <Tus yazi="=" color="green" onPress={() => Hesapla()} />
        </View>

      </View>

    </View >
  );
}
export default HomeScreen;
const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#4B5EFC',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#2E2F38',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#4E505F',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: '#FFFFFF',
  },
  smallTextDark: {
    fontSize: 32,
    color: '#000',
  },
  row: {
    maxWidth: '100%',
  },
  screenFirstNumber: {
    fontSize: 96,
    color: '#747477',
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 50,
    color: '#000',
    fontWeight: '200',
    alignSelf: "flex-end",
  },
})
