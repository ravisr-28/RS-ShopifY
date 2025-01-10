import React from 'react'
import InformationCard from './CardComponent.jsx/InformationCard'
import { FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md';

const InformationComponents = () => {
  return (
    <div className='md:flex md:px-12 px-4 space-y-4 md:space-y-0 gap-4 py-6 bg-neutral-900'>
      <InformationCard
        icons={<FaShippingFast  size={28}/>}
        title={"Free Shipping"}
        paragraph={"Get your orders delieverd no extra cost"}
      />
      <InformationCard
        icons={<MdSupportAgent  size={28}/>}
        title={"Support 24/7"}
        paragraph={"We are here to assist you anytime"}
      />
      <InformationCard
        icons={<FaMoneyBillWave  size={28}/>}
        title={"100% Money Back"}
        paragraph={"Full refund if you are not satisfied"}
      />
      <InformationCard
        icons={<FaLock  size={28}/>}
        title={"Payment Secure"}
        paragraph={"Your payment information is safe with us"}
      />
      <InformationCard
        icons={<FaTag size={28} />}
        title={"Discount"}
        paragraph={"Enjoy the best prices on our product"}
      />
    </div>
  );
}

export default InformationComponents
