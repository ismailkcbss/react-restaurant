import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    const year = new Date().getFullYear();

    return (

        <div className="FooterDiv">

            <div className="SocialMedia">
                <div>
                    <h5> Social Media</h5>
                </div>
                <div>
                    <a target="_blank" href="https://github.com/"><GitHubIcon className='icon' style={{ color: "#171515" }} /></a>
                    <a target="_blank" href="https://www.linkedin.com/"><LinkedInIcon className='icon' style={{ color: "#0274B3" }} /></a>
                    <a target="_blank" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidHIifQ%3D%3D%22%7D"><TwitterIcon className='icon' style={{ color: "#1D9BF0" }} /></a>
                    <a target="_blank" href="https://z-p15.www.instagram.com/accounts/login/?next=/ali_0rg/followers/&source=followed_by_list&hl=tr"><InstagramIcon className='icon' style={{ color: "#F7016D" }} /></a>
                </div>
            </div>

            <div className=''>
                
            </div>

            <div className="Copyright">
                {`Copyright © MyRestaurant ${year}`}
            </div>
        </div>


    )
};

export default Footer;

