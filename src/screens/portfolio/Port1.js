import React, { useEffect } from 'react'

const Port1 = () => {


  return (
    <div className='w-full h-full'>
        <header className='bg-[#3D55CC] w-full h-14 flex justify-center items-center text-white'>
            <p>This is header. put your main comment hear. </p>
            <div className='headerHidden'>
            Since you're located in<strong> South Korea,</strong> you can get a <strong>10% discount.</strong>
            </div>
           
        </header>
        <section className='px-24 section'>

                <h1 className='py-6 font-semibold text-xl tracking-tighter text-right'>Gallimgil Consultant</h1>

            <div className='pt-24 contentLayout flex gap-x-8 '>
                <div className='content w-1/2'>
                    <span className='text-gray-500 font-semibold text-sm tracking-[.4rem]'>FIRST SUBJECT</span>
                    <div className='text-5xl pt-4 font-bold'>
                        <div className='block tracking-tighter'>UI design is hard</div>
                        <div className='block tracking-tighter'>just got easier</div>
                    </div>
                    <p className='pt-8 text-gray-500 font-semibold leading-6 text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</p>
                    <a 
                    href='tel:01029693106'
                    className=' mt-4 mb-8 inline-block bg-[#3D55CC] p-4 rounded-lg text-white font-bold'>make a call</a>
                </div>
                <img className ="content w-1/2" src="https://post-phinf.pstatic.net/MjAyMTEwMjVfODUg/MDAxNjM1MTQ0Mzk5NDE5.jE6nqw7xzx572mnnE5Dek8c7ZzcBMUj-fF4tyLXTcf8g.4QRnAlqdIFsePgBMUAvnORH8fgqwmWavfMtNWixyZ_Qg.JPEG/%ED%94%84%EB%A1%9C%ED%95%84.jpeg?type=w1200"/>
            </div>
        </section>
        <section className='section sectionCheckpointLayout py-24 rounded-full h-40 shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.6)] shadow-gray-200'>
            <div className='sectionCheckpoint px-24 pb-16 flex gap-x-6'>
                <div className='flex flex-col gap-y-6'>
                    <strong>✔️ checkpoint</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</p>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <strong>✔️ checkpoint</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</p>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <strong>✔️ checkpoint</strong>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</p>
                </div>
            </div>
            <div className='bottomsect px-24 py-24 border-t'>
                <div className='block text-4xl'>📖</div>
                <p className='font-semibold text-3xl'>Don't hesitate to click ! </p>
                <div className='flex-col gap-y-6'>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                </div>
            </div>
            <div className='bottomsect px-24 py-24 border-t'>
                <div className='text-sm text-gray-600 font-semibold pb-4'>TARGET AUDIENCE</div>
                <p className='font-bold text-3xl'>Who's this consult for? </p>
                <p className='pt-6 text-gray-500 tracking-tighter text-xl leading-8 font-semibold w-2/3'>Beginners for orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe</p>
                <div className='cards flex gap-x-6 pt-12'>
                    <div className='flex flex-col gap-y-6 border rounded-2xl p-6'>
                        <div className='flex items-center gap-x-6'>
                            <div className='bg-gray-100 w-24 h-24 rounded-full'></div>
                            <div>
                                <strong>박**</strong>
                                <p>너무 좋았어요</p>
                            </div>
                        </div>
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp"</p>
                        <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
                    </div>
                    <div className='flex flex-col gap-y-6 border rounded-2xl p-6'>
                        <div className='flex items-center gap-x-6'>
                            <div className='bg-gray-100 w-24 h-24 rounded-full'></div>
                            <div>
                                <strong>박**</strong>
                                <p>너무 좋았어요</p>
                            </div>
                        </div>
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp"</p>
                        <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
                    </div>
                    <div className='flex flex-col gap-y-6 border rounded-2xl p-6'>
                        <div className='flex items-center gap-x-6'>
                            <div className='bg-gray-100 w-24 h-24 rounded-full'></div>
                            <div>
                                <strong>박**</strong>
                                <p>너무 좋았어요</p>
                            </div>
                        </div>

                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp"</p>
                        <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
                    </div>
            </div>
            </div>
            <div className='bottomsect px-24 py-24 border-t'>
                <div className='text-sm text-gray-600 font-semibold pb-4'>TARGET AUDIENCE</div>
                <p className='font-semibold text-3xl'>The last message for.. </p>
                <div className='flex-col gap-y-6'>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                    <div className='pt-8 text-lg font-semibold text-gray-500 tracking-tighter leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type sp</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Port1