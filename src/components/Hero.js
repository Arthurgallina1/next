export default function Navbar() {
    return (
        <div className='container mx-auto my-20 lg:flex'>
            <div className='text-center'>
                <h4 className=' text-sm text-blue-main mb-5'>
                    YOUR BRAND, PROMOTED
                </h4>
                <h1 className=' text-3xl text-black-300 font-bold mb-5'>
                    Creative solutions to improve your <br /> business!
                </h1>
                <h4 className=' text-sm text-gray-sec text-blue-100-sm px-2'>
                    We work hand-in-hand with industry-leading brands to help
                    redefine the possibilities and potential of digital
                    engagements.
                </h4>
                <input
                    type='text'
                    className='rounded-lg border-black p-4 w-full'
                    placeholder='Enter your email'
                />
                <button className='rounded-full px-8 py-4 bg-blue-main mt-6 text-white font-bold w-24 min-w-full'>
                    Entrar em contato
                </button>
            </div>
            <div className='flex justify-center my-8 md:my-0 md:ml-12'>
                <img
                    src={
                        "https://taiker-react.envytheme.com/_next/static/images/man-07579131ce0cf9c255f86e676390b31d.png"
                    }
                    className='rounded-full'
                    alt=''
                />
            </div>
        </div>
    );
}
