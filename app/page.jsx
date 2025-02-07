import {FiDownload} from 'react-icons/fi';
import {Button} from '@/components/ui/button';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Link from 'next/link';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <h1 className='h1 mb-6 '>
              Hello I&apos;m <br/> <span className='text-accent'>Jung Hwang</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-gray-700'>
                I am an upcoming senior pursuing a Bachelor of Science in Data Science and Applied Statistics at Purdue University, with an anticipated graduation in May 2025.
                {/* <br/>I am anticipated to pursue a master's program in the fall of 2025. */}
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link href="Jungeun_Hwang_Resume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </Link>
              <div className='mb-8 xl:mb-0'> 
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home
