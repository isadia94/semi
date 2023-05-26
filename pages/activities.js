import ClientLayout from '@/components/ClientLayout'
import Image from 'next/image'

import { Cormorant } from "next/font/google";
import localFont from 'next/font/local'


const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "600", "700"],
});

const Activities = () => {
  return (
    <ClientLayout>
        <div className='px-4 mb-32 h-full w-full'>
        <div  className={`${cormorant.className} text-[30px] md:text-[50px] md:text-center mt-3 font-bold text-green-800 my-12`}>
          <h1>ACTIVITIES</h1>
     
        </div>

            <div className='md:h-[80vh] h-[700px] w-full flex mt-3 flex-col md:flex-row md:items-center mb-12'>
                <div className='relative h-[400px] w-full md:h-full md:w-1/2 md:aspect-square'>
                    <Image src="/images/beach.jpg" alt fill/>
                </div>
                <p className='md:w-[500px] mt-4 mx-auto font-semibold flex  justify-center items-center'>From the moment you arrive, the soothing sound of crashing waves and the salty breeze envelop you, transporting you to a world of relaxation and rejuvenation. Sink your toes into the warm sand as you stroll along the shore, feeling the gentle caress of the ocean against your skin. Engage in exciting water activities like swimming, surfing, or snorkeling, immersing yourself in the thrill of the sea. </p>
            </div>
            <div className='md:h-[80vh] w-full flex flex-col md:flex-row items-center mb-12'>
            <p className='md:w-[500px] mx-auto font-semibold flex  justify-center items-center'>Discover the Hidden Depths: Snorkelling Adventure Awaits." Immerse yourself in a world teeming with vibrant marine life and fascinating underwater landscapes. Equipped with a snorkel and mask, plunge into crystal-clear waters, where a kaleidoscope of colors awaits your gaze. Float effortlessly above coral reefs, observing their intricate formations and the myriad of fish darting among them.  </p>
                <div className='relative h-[400px] mt-4 md:w-1/2 w-full aspect-square'>
                    <Image src="/images/snorka.jpg" alt fill/>
                </div>
               
            </div>
            <div className='md:h-[80vh] w-full flex items-center flex-col-reverse md:flex-row  mb-12'>
                <div className='relative mt-4 md:mt-0 h-[400px] w-full md:h-full md:w-1/2 md:aspect-square'>
                    <Image src="/images/raft.jpg" alt fill/>
                </div>
                <p className='md:w-[500px] mx-auto font-semibold flex  justify-center items-center'>Kayaking offers an exhilarating escape into the realm of water and nature. As you settle into your kayak, you become one with the gentle current, gliding along pristine waterways. With each paddle stroke, you propel yourself forward, feeling a sense of freedom and serenity wash over you. The rhythmic motion of your paddle becomes a symphony, harmonizing with the sounds of nature that surround you. </p>
            </div>
            <div className='md:h-[80vh] w-full flex flex-col md:flex-row items-center mb-12'>
            <p className='md:w-[500px] mx-auto font-semibold flex  justify-center items-center'>Engage in an extraordinary journey through the untamed wilderness of Tsavo, where an awe-inspiring animal kingdom awaits your exploration. Step into a realm where mighty elephants roam freely, their majestic presence leaving you in awe. Witness graceful giraffes as they elegantly stretch their long necks to reach the leaves of towering acacia trees. Marvel at the stealth and power of Tsavo's predators, from lions to cheetahs, as they navigate the vast savannah in search of their next meal. </p>
                <div className='relative mt-4 md:mt-0 h-[400px] w-full md:h-full md:w-1/2 md:aspect-square'>
                    <Image src="/images/wild.jpg" alt fill/>
                </div>
              
            </div>
         
            
            
           
        </div>
    </ClientLayout>
  )
}

export default Activities
