import DescComponent from "./components/DescComponent";
import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";

function App() {

  
  // const images1 = [{
  //   img1: process.env.PUBLIC_URL + '/img/img1.jpg', 
  //   img2: process.env.PUBLIC_URL + '/img/img2.jpg', 
  //   img3: process.env.PUBLIC_URL + '/img/img3.jpg'
  // }]

  return (
    <div className="container-fluid p-0">
      <Navbar />

      <div className="row m-1 d-flex justify-content-center">

        <div className="col-md-5 p-3 m-3"> <ImageComponent img1_link={process.env.PUBLIC_URL + '/img/img1.jpg'} img2_link={process.env.PUBLIC_URL + '/img/img2.jpg'} img3_link={process.env.PUBLIC_URL + '/img/img3.jpg'}/> </div>
        <div className="col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(107 175 172)'}} disc={'30'} price2={'250.00'}/> </div>
      
      </div>

      <div className="row m-1 d-flex justify-content-center">

        <div className="d-none d-md-block col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(213 199 8)'}} disc={'25'} price2={'270.00'}/> </div>
        <div className="col-md-5 p-3 m-3"> <ImageComponent img1_link={process.env.PUBLIC_URL + '/img/img5.jpg'} img2_link={process.env.PUBLIC_URL + '/img/img6.jpg'} img3_link={process.env.PUBLIC_URL + '/img/img7.jpg'}/> </div>
        <div className="d-block d-md-none col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(213 199 8)'}} disc={'25'} price2={'270.00'}/> </div>
      
      </div>

      <div className="row m-1 d-flex justify-content-center">

        <div className="col-md-5 p-3 m-3"> <ImageComponent img1_link={process.env.PUBLIC_URL + '/img/img8.jpg'} img2_link={process.env.PUBLIC_URL + '/img/img9.jpg'} img3_link={process.env.PUBLIC_URL + '/img/img10.jpg'}/> </div>
        <div className="col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(204 25 25)'}} disc={'40'} price2={'300.00'}/> </div>
      
      </div>

      <div className="row m-1 d-flex justify-content-center">

        <div className="d-none d-md-block col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(144 244 239)'}} disc={'14'} price2={'165.00'}/> </div>
        <div className="col-md-5 p-3 m-3"> <ImageComponent img1_link={process.env.PUBLIC_URL + '/img/img11.jpg'} img2_link={process.env.PUBLIC_URL + '/img/img12.jpg'} img3_link={process.env.PUBLIC_URL + '/img/img13.jpg'}/> </div>
        <div className="d-block d-md-none col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'rgb(144 244 239)'}} disc={'14'} price2={'165.00'}/> </div>
      
      </div>

      <div className="row m-1 d-flex justify-content-center">

        <div className="col-md-5 p-3 m-3"> <ImageComponent img1_link={process.env.PUBLIC_URL + '/img/img14.jpg'} img2_link={process.env.PUBLIC_URL + '/img/img15.jpg'} img3_link={process.env.PUBLIC_URL + '/img/img16.jpg'}/> </div>
        <div className="col-md-5 p-3 m-3"> <DescComponent color={{fontWeight: "bold", color:'black'}} disc={'35'} price2={'330.00'}/> </div>
      
      </div>
      
    </div>
  );
}

export default App;
