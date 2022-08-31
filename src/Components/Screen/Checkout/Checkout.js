import './Checkout.css';
import {Price} from '../../Price/Price'
import { Carousel } from '../../Carousel/Carousel';
import { PayForm } from '../../PayForm/PayForm';

export const Checkout =()=> {
  return (
    <div className="checkout">
        <div className='background'>
      <Carousel/>
      <Price itemName={"Sneekers for Men"} itemDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"} price={69}/>
      <PayForm/>
      </div>
    </div>
  );
}
 
