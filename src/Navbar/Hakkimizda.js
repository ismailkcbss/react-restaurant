import SikcaSorulanSorular from "./SikcaSorulanSorular";
import Navbar from './Navbar';
import Footer from '../Footer/Footer';
import HakkimizdaCarousel from './HakkimizdaCarousel';


function Hakkimizda() {
    return (
        <div className="HakkimizdaDiv">
            <Navbar />
            <div className="HakkimizdaBody">
                <div className="HakkimizdaUst">
                    <h3>MyRestoran</h3>
                    <p>
                        &emsp;&emsp;&emsp; 01.01.2019 Tarihinde kurucu liderimiz İSMAİL CAN KOCABAŞ tarafından kurulmuştur ve
                        kurulduğumuz tarihten beri sizler için çalışıyoruz. Her geçen gün sizlerle birlikte
                        büyümeye devam ediyoruz. Hedefimiz Memleketimizin her ilinde sizlere hizmet etmektir
                        bu başarıya da sizinle birlikte en kısa zamanda ulaşacağımıza eminiz. Kuruluşumuz hakkında
                        daha detaylı bilgileri sıkça sorulan sorular kısmında bulabilirsiniz.
                    </p>
                    <br /><br /><br />
                    <HakkimizdaCarousel />
                </div>
                <div className="HakkimizdaOrta">
                    <div className="HakkimizdaOrtaText">
                        <h5>MyRestaurant Şubeler</h5>
                    &emsp;&emsp;&emsp;4 yıldır yaklaşık 7 şubemiz bulunmaktadır. Önümüzdeki yıllarda daha
                    fazla şubeyi açma yolunda ilerliyoruz. Şuanda İstanbul-Ankara-Adana-Antalya-Muğla-İzmir-Mersin
                    illerinde şubelerimiz bulunmaktadır.
                    </div>
                    <div className="HakkimizdaListe">
                        <ul className="">
                            <h3>Şubelerimiz</h3>
                            <li>
                                <p>
                                    İSTANBUL 2019
                                </p>
                            </li>
                            <li>
                                <p>
                                    ANKARA 2019
                                </p>
                            </li>
                            <li>
                                <p>
                                    ADANA 2020
                                </p>
                            </li>
                            <li>
                                <p>
                                    ANTALYA 2020
                                </p>
                            </li>
                            <li>
                                <p>
                                    MUĞLA 2022
                                </p>
                            </li>
                            <li>
                                <p>
                                    MERSİN 2022
                                </p>
                            </li>
                            <li>
                                <p>
                                    İZMİR 2023
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="HakkimizdaAlt">
                    <h5>SIKÇA SORULAN SORULAR</h5>
                    <SikcaSorulanSorular />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hakkimizda;