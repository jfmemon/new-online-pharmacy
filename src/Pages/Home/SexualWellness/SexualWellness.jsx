import useSexualWellness from '../../../Hooks/useSexualWellness';
import SexualWellnessProducts from './SexualWellnessProducts';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

const SexualWellness = () => {
    const [sexualWellness] = useSexualWellness();

    return (
        <div className='my-16'>
            {
                sexualWellness.map(item => <SexualWellnessProducts
                key={item._id}
                item={item}
                ></SexualWellnessProducts>)
            }
        </div>
    );
};

export default SexualWellness;



{/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}