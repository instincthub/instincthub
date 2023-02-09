import React from 'react';
import styled from 'styled-components';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, WhatsappShareButton } from 'react-share';
import Images from '../../assets/images/Images';


const ShareCertificate = ({ certificateUrl }) =>{
  return (
    <CertificateContainer>
      {/* <CertificateImage src={certificateUrl} alt="Certificate" /> */}
      <p>Share: </p> 
      <ShareButtonsContainer>

        <EmailShareButton url={certificateUrl}>
            <img src={Images.email.default} className="email"/>
        </EmailShareButton>

        <FacebookShareButton url={certificateUrl}>
            <img src={Images.facebook.default}/>
        </FacebookShareButton>

        <TwitterShareButton url={certificateUrl}>
            <img src={Images.twitter.default}/>
        </TwitterShareButton>

        <LinkedinShareButton url={certificateUrl}>
            <img src={Images.linkedin.default}/>
        </LinkedinShareButton>

        <WhatsappShareButton url={certificateUrl}>
            <img src={Images.whatsapp.default}/>
        </WhatsappShareButton>
        
      </ShareButtonsContainer>
    </CertificateContainer>
  );
}

export default ShareCertificate;


const CertificateContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const CertificateImage = styled.img`
  width: 500px;
  height: 350px;
  margin-bottom: 20px;
`;

const ShareButtonsContainer = styled.div`
    margin-left: 20px;  
    img{
        height: 40px;
        width: 40px;
        border: 2px solid rgba(44, 51, 58, 0.2);
        margin-right: 10px;
        transition: .2s ease-in;

        &:hover{
            border-radius: 5px;
            background: #fff;
            filter: brightness(150%);
        }
    }
    img.email{
        padding: 5px;
    }
`;
