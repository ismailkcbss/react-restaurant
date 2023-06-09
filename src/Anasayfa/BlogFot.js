import { useHistory } from "react-router-dom";


function BlogFot() {

    const history = useHistory();

    const handleClick = () => {
        history.push('Restaurantlar');
    }

    return (
        <div className="BlogFot">
            <div className="BlogFotSag">
                <div className="BlogFotTitle">
                    <h3> MyRestoran Nedir ?</h3>
                    <p>
                        &emsp;&emsp;MyRestaurant aklınızdaki restaurantı bulmanıza yardımcı olur. Gittiğin restaurant hakkında
                        merak edilen bilgiyi sana önceden verir. İstediğin restaurantı bulmaya hemen başlamak için&emsp;
                        <button onClick={handleClick}>hemen tıkla.</button>
                    </p>
                </div>
                <div className="BlogFotImg">
                    <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-271d8.appspot.com/o/MyRestraunt1.png?alt=media&token=15522df9-2186-436d-8efd-d91796c618b0" alt="blogImg" />
                </div>
            </div>

            <div className="BlogFotSolOrta">

                <div className="BlogFotTitle">
                    <h3> MyRestoran Ne Zamandan Kuruldu ?</h3>
                    <p>
                        &emsp;&emsp;01.01.2019 Tarihinde kurulmuştur.
                        Kurulduğumuz tarihten bu yana sizler için çalışıyoruz. Her geçen gün sizlerle birlikte
                        büyümeye devam ediyoruz. Hedefimiz Türkiyenin her ilinde sizlere hizmet etmektir
                        bu başarıya da sizinle birlikte en kısa zamanda ulaşacağımıza eminiz. Kuruluşumuz hakkında
                        daha detaylı bilgileri sıkça sorulan sorular kısmında bulabilirsiniz.
                    </p>
                </div>
            </div>

            <div className="BlogFotSag">
                <div className="BlogFotTitle">
                    <h3> MyRestoran Hangi Şehirlerde Hizmet Veriyor ?</h3>
                    <p>
                        &emsp;&emsp;MyRestaurant her yıl birden fazla şehirde hizmet vermeye başlıyor. Yakında tüm şehirlerimizde
                        hizmetlerimiz başlayacaktır. Şuanda hizmet verdiğimiz iller İstanbul(2019) Ankara(2019) 
                        Adana(2020) Antalya(2020) Muğla(2022) Mersin(2022) İzmir(2023) Kocaeli(2023) olmak üzere 8
                        şehirdir.
                    </p>
                </div>
                <div className="BlogFotImg">
                    <img src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=" alt="blogImg" />
                </div>
            </div>

        </div>
    );
}

export default BlogFot;