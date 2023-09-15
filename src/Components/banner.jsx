import bannerImage from '../assets/images/baner.jpg'
 const Banner = () => {
    return (
        <div className='banner'>
             
            <img src={bannerImage}/>
            <h1>Product Catagories</h1>
     
        </div>
    );
};

export default Banner;