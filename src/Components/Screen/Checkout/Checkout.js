
import {Price} from '../../Price/Price'
import { Carousel } from '../../Carousel/Carousel';
import { PayForm } from '../../PayForm/PayForm';
import { DivBack } from '../../Background/Div';
import { CloseButton } from '../../Buttons/CloseButton/CloseButton';

export const Checkout =()=> {
  return (
    <div className="container">
      <CloseButton/>
       <DivBack/>
      <Carousel/>
      <Price itemName={"Sneekers for Men"} itemDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"} price={69}/>
      <PayForm/>
    
    </div>
  );
}
 
