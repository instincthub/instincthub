import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styled from 'styled-components';
import Images from '../../assets/images/Images';
import { Link, useParams } from 'react-router-dom';
import ShareCertificate from './ShareCertificate';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import DateInWord from '../forms/DateInWord';
import { reqOptions, fetchAPI, HOST_URL, SK_KEY, SK_VALUE, PageHeroBanner } from "../../assets/js/help_func";
import { Helmet } from 'react-helmet';
import Error404 from '../Status/Error404';
import { PageLoading } from '../blog/PageLoading';

// import Share

const CertificateGenerator = () => {
  const [data, setData] = useState(false);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  let { user, id } = useParams();
  // data.results.thumbnail

  useEffect(()=>{
    if(!data){
      let requestOptions = reqOptions("GET", null);
      fetchAPI(setData, HOST_URL() + `/api/v1/certificates/${user}/${id}/`, requestOptions, true, setStatus, setError);
    }
   
    if (document.querySelector('#certificate') && data && !data.results.thumbnail) {
      downloadJPEG('send')
    }
  },[data])

  // const handleChange = (event) => {
  //   setCertificateData({
  //     ...data.results,
  //     [event.target.name]: event.target.value
  //   });
  // };

  const downloadPDF = () => {
    const input = document.getElementById('certificate');
    input.classList.add('scaled');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF("landscape");
        pdf.addImage(imgData, 'JPEG', 5, -3, 0, 220);
        pdf.save(`${data.results.recipient}_certificate.pdf`);
      });
      input.classList.remove('scaled');
  };

  const downloadJPEG = (action) => {
    const input = document.getElementById('certificate');
    input.classList.add('scaled');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 4);

      if(action === 'send'){ 
        // Save thumbnail in server for the purpose of social sharing
        convertBase64ToImageObject(imgData)
      }
      else{
        const link = document.createElement('a');
        link.download = `${data.results.recipient}_certificate.jpeg`;
        link.href = imgData;
        console.log(link.href);
        link.click();
      }

      
    });

    input.classList.remove('scaled');
  };

  function convertBase64ToImageObject(base64Image) {
    // Send base64Image to the server to save certificate thumbnail 
    // in server for the purpose of social sharing

    let context ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        thumbnail: base64Image
      })
    }
    context['headers'][SK_KEY] = SK_VALUE
    fetchAPI(setData, HOST_URL() + `/api/v1/certificates/${user}/${id}/`, context, true);
  }

  if(data && data.results){
    return (
      <div>
        <Helmet>
          <title>Certificate of Completion by instinctHub</title>
          <meta name="description" content="" />
          <meta name="description" content={data.results.description} />
          <meta property="og:title" content={ data.results.title } />
          <meta property="og:url" content={ window.location.href } />
          <meta property="og:image" content={ data.results.thumbnail } />
        </Helmet>
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
                    <p>Issued: <DateInWord date={data.results.issued}/></p>
                    
                    <p>Certificate: {data.results.id}</p>
                  </div>

                  <main>
                    <img src={Images.techBadge} className="badge" />
                    <p className='cert_rider1'>This is to certify that {data.results.recipient} successfully achieved a Techsavvy in</p>
                    <h2 className='course_title'>{data.results.title}</h2>
                    <p className='cert_rider2'>This certifies proeficiency in the fundamental of <ReactMarkdown>{data.results.subject}</ReactMarkdown></p>
                  </main>

                  <div className='cert_bottom'>
                    <img src={Images.logo} className="logo1"/>
                    {data.results.partner && <img src={data.results.partner} className="logo2"/>}
                    <div className='cert_signature'>
                      <img src={Images.certSignature} className="signature"/>
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
                {data.results.org_logo ? <img src={data.results.org_logo} /> : <span className='no_logo'>{data.results.org_full_name.substring(0, 2)}</span>}
              </div>
              <Link to={"/org/"+data.results.org_username}><h2 className='company_title'>{data.results.org_full_name}</h2></Link>
            </div>
            <div className='download_meta'>
              <h2>{data.results.title}</h2>
              <p>{data.results.description}</p>
            </div>

            {/* User Meta */}
            <div className='company_meta recipient'>
              <div className="company_logo">
                {data.results.recipient_thumbnail ? <img src={data.results.recipient_thumbnail} /> : <span className='no_logo'>{data.results.recipient.substring(0, 2)}</span>}
              </div>
              <a href={"https://skills.instincthub.com/"+data.results.recipient_username}><h2 className='company_title'>{data.results.recipient}</h2></a>
            </div>

            <div className='downloads'>
              <div className='download_icons'>
                <p>Download: </p> 
                <img onClick={downloadJPEG} src={Images.jpeg.default} />
                <img onClick={downloadPDF} src={Images.pdf.default} />
              </div>
              
              <ShareCertificate certificateUrl={window.location.href}/>
            </div>
          </div>
        </ReactCertFooter>
    </div>
    );
  }
  else if(error && error.detail === 'Certificate not found'){
    return <Error404/>
  }
  else{
    return <PageLoading labels="Certificate"/>
  }
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
    /* background: repeating-linear-gradient( 45deg, #f4f4f4, #f4f4f4 10px, var(--white) 10px, var(--white) 20px ); */
    background: var(--white);
    background: #f4f5fa;
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
      background: var(--white)fff90;
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
          var(--white) 10px,
          var(--white) 20px
        );
        background: #fff;
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
          width: 85px !important;
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
  margin-top: 15px;

  .container{
    margin-bottom: 0px;
  }

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
      display: flex;
      img{
        border-radius: 100px;
      }
      &.active::after{
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
      .no_logo{
        display: inline-block;
        text-align: center;
        margin: auto;
        font-weight: 700;
        background: var(--Gunmetal);
        color: var(--white);
        width: 30px;
        height: 28px;
        border-radius: 100px;
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
    max-width: 800px;
    h2{
      font-size: 1.3em;
      margin-bottom: 0px;
      line-height: 100%;
    }
  }
  .recipient{
    margin-top: 30px;
    h2{
      color: var(--Gunmetal);
      &::after{
        filter: brightness(10%);
      }
    }
  }
  .downloads{
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
              background: var(--white);
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


