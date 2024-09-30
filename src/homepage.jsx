import React from 'react';
import CombinedNavbar from './componets/topnavbar';
import BasicExample from './componets/cards';
import { Container, Row, Col } from 'react-bootstrap';
import FluidExample from './componets/Category';
import Footer1 from './componets/footor';
export default function Homepage() {
  const data = [
    {
      title: "Round Mini Portable Bluetooth Speaker",
      text: "$85.00",
      imageUrl: "https://static.wixstatic.com/media/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png/v1/fill/w_428,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png",
    },
    {
      title: "OVE Light Space 5G, 128GB",
      text: "$70.00",
      imageUrl: "https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_428,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg",
    },
    {
      title: "Card 3 Title",
      text: "This is the second card's content.",
      imageUrl: "",
    }
  ];
  const data2 = [
    {
      Imageurl2: "https://static.wixstatic.com/media/c837a6_5b37c6d9828241aa804f2e0af2334a7c~mv2.jpeg/v1/fill/w_901,h_431,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_smartphone_--ar_169_--style_raw_--sref_httpss_mj_fae1610e-8d4e-469f-ba15-d7.jpeg",
      Text:"Mobile and Wearable Tech"
    },{
    Imageurl2:"https://static.wixstatic.com/media/c837a6_85bb5adcb80b4125b8a0f5214ef04365~mv2.jpeg/v1/fill/w_901,h_431,fp_0.64_0.67,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_still_camera_yellow_toned_background_--ar_169_--_428ffea2-e625-405e-a844-20.jpeg",
     Text:"Drones and Cameras"  
  }
    ,{
      Imageurl2: "https://static.wixstatic.com/media/c837a6_386fa17e5e6d4012bcef90f32b15624d~mv2.jpeg/v1/fill/w_901,h_431,fp_0.60_0.61,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_headphoes_green_toned_background_--ar_169_--styl_3f2a235f-221a-40d3-a420-96.jpeg",
      Text:"Drones and Cameras"    
    }
      ,{
        Imageurl2: "https://static.wixstatic.com/media/c837a6_08bb311bff82496da18ec5b8e6e0f864~mv2.jpeg/v1/fill/w_901,h_431,fp_0.50_0.59,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_laptop_--ar_169_--style_raw_--sref_httpss_mj_run_3eb1f332-e4c9-4c29-8986-92.jpeg",
        Text:"Drones and Cameras"    
      }

  ]
  const data3 = [
    {
      title: "Round Mini Portable Bluetooth Speaker",
      text: "$85.00",
      imageUrl: "https://static.wixstatic.com/media/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg/v1/fill/w_438,h_583,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg",
    },
    {
      title: "OVE Light Space 5G, 128GB",
      text: "$70.00",
      imageUrl: "https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_428,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg",
    },
    {
      title: "Card 3 Title",
      text: "This is the second card's content.",
      imageUrl: "",
    }
  ];
  const data4 = [
    {
      Imageurl2: "https://static.wixstatic.com/media/c837a6_5b37c6d9828241aa804f2e0af2334a7c~mv2.jpeg/v1/fill/w_901,h_431,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_smartphone_--ar_169_--style_raw_--sref_httpss_mj_fae1610e-8d4e-469f-ba15-d7.jpeg",
      Text:"Mobile and Wearable Tech"
    },{
    Imageurl2:"https://static.wixstatic.com/media/c837a6_85bb5adcb80b4125b8a0f5214ef04365~mv2.jpeg/v1/fill/w_901,h_431,fp_0.64_0.67,q_85,usm_0.66_1.00_0.01,enc_auto/templatesdrive_still_camera_yellow_toned_background_--ar_169_--_428ffea2-e625-405e-a844-20.jpeg",
     Text:"Drones and Cameras"  
  }];

  return (
    <>
      <CombinedNavbar />
      <Container>
        <Row>
          {data.map((card, index) => (
            <Col key={index}>
              <BasicExample {...card} />
            </Col>
          ))}
        </Row>
      </Container><br /><br />
      <h2 style={{position:"absolute", left:'8%'}}>Shop By Category
      </h2><br /><br /><br /><br /><br /><br />
      <Container>
        <Row>
          {data2.map((card2, index2) => (
            <Col xs={12} md={6} key={index2}>
              <FluidExample {...card2} />
            </Col>
          ))}
        </Row>
      </Container><br /><br />
      <h2 style={{position:"absolute", left:'8%'}}>Top Sellers
      </h2><br /><br /><br /><br />
      <Container>
        <Row>
          {data3.map((card3, index3) => (
            <Col key={index3}>
              <BasicExample {...card3} />
            </Col>
          ))}
        </Row>
      </Container><br /><br /><br />
      <Footer1></Footer1>
      


     


    </>
  );
}
