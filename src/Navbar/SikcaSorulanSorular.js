import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SikcaSorulanSorular() {

    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='HakkimizdaSikcaSorularDiv'>
            <div className='HakkimizdaSikcaSorular'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary className="HakkimizdaSikcaSorular" aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>MY RESTAURANT NEDİR ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='HakkimizdaSikcaSorularText'>
                    <Typography >
                        MyRestoran sizin için en iyi restoran seçimleri sunar ve rahatlıkla seçim yapmanızı sağlar.
                        Gündelik hayatta sizi zora düşürebilcek maddi manevi her türlü durumu sizin
                        için önceden bilgi edinir ve size bunu rahatlıkla açıklar. Bu sayede siz de gitmek
                        istediğiniz kişilerle dilediğiniz vakitte ve durumda restoranlara gidebilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary className="HakkimizdaSikcaSorular" aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>RESTAURANT SAHİPLERİ İÇİN MY RESTAURANT NEDİR ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='HakkimizdaSikcaSorularText'>
                    <Typography >
                        MyRestoran sizin için düşük/büyük bütçeli diye ayırt etmeksizin sizin isteğiniz doğrultusunda
                        sizi her kesimden insanlar için tanıtımını yapar. Bu sayede sizler hem daha çok müşteriye
                        ulaşmış olacaksınız hem de gelirlerinizi arttırıcaksınız. MyRestoran tamamen müşteri ve işletmeci
                        arasındaki köprü görevi görmek için kurulmuş bir platformdur ve sizlere en iyi şekilde hizmet verebilmek için
                        her duruma hazırlıklı olmaya çalışıyoruz. Bizleri tercih etmek isterseniz kayıt olup işletmenizi
                        hemen tanıtmaya başlayabilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary className="HakkimizdaSikcaSorular" aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>KAYIT OLMAK İÇİN HERHANGİ BİR ÜCRET ÖDEMEMİZ GEREKİYOR MU ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='HakkimizdaSikcaSorularText'>
                    <Typography >
                        MyRestoran kuruluş amacı olarak herhangi bir ücret alma durumu yoktur. Tamamen hizmet
                        amaçlı kurulan bir kuruluştur. Restoranınız daha fazla ilgi görmesini isterseniz ise
                        ön sayfalarda görünebilmesi için premium hesap oluşturabilirsiz. Detayları premium hesap
                        oluştur kısmında görebilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary className="HakkimizdaSikcaSorular" aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>KAYIDIMI SİLEBİLİR MİYİM ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='HakkimizdaSikcaSorularText'>
                    <Typography >
                        Kayıt oluşturulduktan sonra silme işlemimiz yoktur fakat sizinle istemediğiniz taktirde 
                        iletişime geçmeyeceğimiz için kayıt silme işlemine gerek yoktur dilediğiniz zaman sitemizi 
                        kullanmayı bırakabilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary className="HakkimizdaSikcaSorular" aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>MYRESTAURANT İLE İLETİŞİME NASIL GEÇERİM ?</Typography>
                </AccordionSummary>
                <AccordionDetails className='HakkimizdaSikcaSorularText'>
                    <Typography >
                        Bizimle iletişimler kısmında bulunan formu doğru ve eksiksiz bir şekilde sorununuzu da belirterek
                         doldurduktan sonra formu gönderin teknik ekibimiz sizinle en kısa zaman içerisinde
                         sorununuz için iletişime geçecektir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    );
}