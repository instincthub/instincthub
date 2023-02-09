import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled from 'styled-components';
import Images from '../../assets/images/Images';
import { Link } from 'react-router-dom';
import ShareCertificate from './ShareCertificate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

// import Share

const CertificateGenerator = () => {
  const certMeta = useState({
    badge: Images.techBadge,
    signature: Images.certSignature
  });
  const certSignature = useState(Images.certSignature.default);
  // const certSignature = useState(cert_signature);
  const [certificateData, setCertificateData] = useState({
    recipient: 'Noah Olatoye',
    title: 'Introduction to Figma',
    overview: 'The Front End Web Development Techdegree provides a comprehensive education in the basics of Front End Web Development, including HTML, CSS, and Javascript.',
    subject: '**HTML**, **CSS** and **Javascript**.',
    date: '2022-12-10',
    id: '2022-12-10',
    thumbnail: 'https://instincthub.com/static/media/instincthub.87d965bf287cdcdc5874.png',
    partner: Images.sterling.default,
    org_title: "instinctHub",
    org_logo: Images.thumbnail,
    org_username: "instinctHub",
  });
  console.log(certMeta);
  useEffect(()=>{
    

  },[certMeta])

  const handleChange = (event) => {
    setCertificateData({
      ...certificateData,
      [event.target.name]: event.target.value
    });
  };

  const downloadPDF = () => {
    const input = document.getElementById('certificate');
    input.classList.add('scaled');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF("landscape");
        pdf.addImage(imgData, 'JPEG', 5, -3, 0, 220);
        pdf.save(`${certificateData.recipient}_certificate.pdf`);
      });
      input.classList.remove('scaled');
  };

  const downloadJPEG = () => {
    const input = document.getElementById('certificate');
    input.classList.add('scaled');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // document.body.appendChild(convertBase64ToImageObject(imgData))

      const link = document.createElement('a');
      link.download = `${certificateData.recipient}_certificate.jpeg`;
      link.href = imgData;
      console.log(link.href);
      link.click();
    });

    input.classList.remove('scaled');
  };

  function convertBase64ToImageObject(base64Image) {
    const binaryData = atob(base64Image.split(',')[1]);
    const binaryDataArray = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      binaryDataArray[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([binaryDataArray], { type: 'image/jpeg' });
    const image = new Image();
    image.src = URL.createObjectURL(blob);
    return image;
  }

  return (
    <div>
      <ReactCertificate id='wrapCertificate' className='container'>
        {/* <form>
          <input
            type="text"
            name="recipient"
            placeholder="Recipient Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Course Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            onChange={handleChange}
          />
        </form> */}
        <div id="certificate">
          <div className='container'>
            <div className='bold_line'>
              <section>
                <div className='cert_header'>
                  <p>{certificateData.id}</p>
                  
                  <p>{certificateData.date}</p>
                </div>

                <main>
                  <img src={certMeta[0].badge} className="badge" />
                  <p className='cert_rider1'>This is to certify that {certificateData.recipient} successfully achieved a Techsavvy in</p>
                  <h2 className='course_title'>{certificateData.title}</h2>
                  <p className='cert_rider2'>This certifies proeficiency in the fundamental of <ReactMarkdown>{certificateData.subject}</ReactMarkdown></p>
                </main>

                <div className='cert_bottom'>
                  <img src={Images.logo} className="logo1"/>
                  {certificateData.partner && <img src={certificateData.partner} className="logo2"/>}
                  <div className='cert_signature'>
                    <img src={certMeta[0].signature} className="signature"/>
                    <p className='title_signature'>CEO of instinctHub</p>
                  </div>
                </div>
              </section>

              
            </div>
          </div>
        </div>
      </ReactCertificate>
      <ReactCertFooter className='cert_footer'>
        <div className='container'>
          <div className='company_meta'>
            <div className="company_logo">
              <img src={certificateData.org_logo}  />
            </div>
            <Link to={"/org/"+certificateData.org_username}><h2 className='company_title'>{certificateData.org_title}</h2></Link>
          </div>
          <div className='download_meta'>
            <h2>{certificateData.title}</h2>
            <p>{certificateData.overview}</p>
          </div>

          <div className='downloads'>
            <div className='download_icons'>
              <p>Download: </p> 
              <img onClick={downloadJPEG} src={Images.jpeg.default} />
              <img onClick={downloadPDF} src={Images.pdf.default} />
            </div>
            
            <ShareCertificate certificateUrl={certificateData.thumbnail}/>
          </div>
        </div>
      </ReactCertFooter>
   </div>
  );
};

export default CertificateGenerator;

const ReactCertificate = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 0px;
  p{
    line-height: 130%;
    text-align: center;
    font-size: .5em;
    color:  var(--Gunmetal);
    padding:0px ;
  }
  p.cert_rider2{
    p{
      display: inline-block;
      font-size: .8em;
      line-height: 0px;
      margin: 0px;
    }
  }

  h1{
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 11px;
    line-height: 86%;
    color:  var(--Gunmetal);
  }
  h2.course_title{
    margin-bottom: 0px;
    line-height: 100%;
    font-size: 10px;
    font-weight: 700;
    margin-top: 14px;
    margin-bottom: 20px;
    line-height: 86%;
    color:  var(--Gunmetal);

  }
  

  #certificate{
    background: repeating-linear-gradient( 45deg, #f4f4f4, #f4f4f4 10px, #fff 10px, #fff 20px );
    background-size: 10px 10px;
    overflow: hidden;
    width: 100%;
    height: 280px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    color: var(--Gunmetal);
    /* background: grey; */
    .container{
      padding: 0px;
      width: 92%;
      height: 92%;
      /* border: 2px solid var(--ChineseSilver); */
      border: 2px solid #f4f4f4;
      margin: auto;
      display: flex;
      align-items: center;
      background: #ffffff90;
      div.bold_line{
        display: flex;
        align-items: center;
        margin: auto;
        border: 5px solid var(--ViridianGreen);
        width: 98%;
        height: 98%;
        background: repeating-linear-gradient(
          45deg,
          #f4f4f4,
          #f4f4f4 10px,
          #fff 10px,
          #fff 20px
        );
        section{
          margin: auto;
          /* padding: 10px; */
          width: 96%;
          height: 96%;
          main{
            margin-top: 10px;
            /* margin-bottom: 5%; */
            width: 70%;
            margin: 15px auto;

            .badge{
              width: 40px;
              height: 40px;
            }
          }
        }
        .cert_header{
          display: flex;
          justify-content: space-between;
          
          p{
            font-size: 7px;
            line-height: 100%;
          }
        }
      }
      div.cert_bottom{
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: -8px;
        .logo1, .logo2{
          object-fit: contain;
        }
        .logo1, .logo2,
        .cert_signature{
          width: 30%;
          max-width: 70px;
          /* align-item: */
        }
        .logo2{
          max-width: 40px;
          top: -7px;
          position: relative;
        }
        .cert_signature{
          position: relative;
          height: 30px;

          p.title_signature{
            font-size: 8px;
            position: relative;
            text-align: center;
            margin: 0px;
            top: 17px;
            /* margin-top: 25px; */
            &::before{
              content: '';
              width: 100%;
              height: 1px;
              background-color: #e0dcdcf4;
              position: absolute;
              left: 0px;
              bottom: 15px;
              max-width: 83px;
            }
          }
          .signature{
            width: 60px;
            height: 50px;
            position: absolute;
            right: 5px;
            bottom: 1px;
            object-fit: contain;
          }
        }
        
      }
    }

    /* Scaled */
    &.scaled{
      width: 634px;
      height: 489.909px;
    

      p{
        font-size: .7em;
      }
      main{
        width: 60% !important;
        margin: 37px auto 62px auto !important;
        .badge{
          width: 80px !important;
          height: 80px !important;
        }
        h2.course_title{
          font-size: 1.3em;
          margin-top: 10px;
          margin-bottom: 40px;
        }
        p.cert_rider2{
          font-size: .9em;
        }
      }
      div.cert_bottom{
        img.logo1{
          width: 100px !important;
          max-width: 150px !important;
          height: 16px;
        }
        img.logo2{
          width: 50px !important;
          height: 50px;
          max-width: 150px !important;
        }
        .cert_signature {
          .signature{
            width: 107px !important;
            height: 20px !important;
            top: -12px;
          }
        }
      }
    }
    /* Scaled */

    @media(min-width: 768px){
      width: 634px;
      height: 489.909px;
    

      p{
        font-size: .7em;
      }
      main{
        width: 60% !important;
        margin: 37px auto 62px auto !important;
        .badge{
          width: 80px !important;
          height: 80px !important;
        }
        h2.course_title{
          font-size: 1.3em;
          margin-top: 10px;
          margin-bottom: 40px;
        }
        p.cert_rider2{
          font-size: .9em;
        }
      }
      div.cert_bottom{
        img.logo1{
          width: 100px !important;
          max-width: 150px !important;
          height: 16px;
        }
        img.logo2{
          width: 50px !important;
          height: 50px;
          max-width: 150px !important;
        }
        .cert_signature {
          .signature{
            width: 107px !important;
            height: 20px !important;
            top: -12px;
          }
        }
      }

      /* Media 768px */
    }
  }
`;


const ReactCertFooter = styled.div`
  background: #f4f5fa;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 0px;

  .company_meta{
    max-height: 100px;
    display: flex;
    align-items: center;
    .company_logo{
      object-fit: contain;
      width: 40px;
      height: 40px;
      padding: 5px;
      border: var(--borderDefault);
      border-radius: 100px;
      margin-right: 10px;
      position: relative;
      img{
        border-radius: 100px;
      }
      &::after{
        content: '';
        background: url(${Images.badge.default});
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        right: -5px;
        top: -5px;
      }
    }
    h2{
      font-size: 1.3em;
      line-height: 100%;
      margin-bottom: 0px;
      display: inline-block;
      position: relative;
      color: var(--ViridianGreen);
      &::after{
        content: '';
        background: url(${Images.link.default});
        width: 20px;
        height: 20px;
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        right: -28px;
      }
    }
  }
  .download_meta{
    margin-top: 30px;
    h2{
      font-size: 1.3em;
      margin-bottom: 0px;
      line-height: 100%;
    }
  }
  .downloads{
    margin-top: 30px;
    .download_icons{
      display: flex;
      align-items: center;

      img{
        width: 40px;
        height: 40px;
        margin-left: 20px;
        padding: 5px;

        border: 2px solid rgba(44, 51, 58, 0.2);
        margin-right: 10px;
        transition: .2s ease-in;

          &:hover{
              border-radius: 5px;
              background: #fff;
              filter: brightness(150%);
          }
      }
    }
  }
  @media(min-width: 768px){

      .downloads{
        display: flex;
        align-items: center;

        .download_icons{
          margin-right: 30px
        }
      }
  }
`;


