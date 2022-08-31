import imageDesk from './assets/image-header-desktop.jpg'
import imageMobile from './assets/image-header-mobile.jpg'

function App() {
  return (
    <div className='bg-mback h-screen w-full flex justify-center items-center px-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center max-w-[350px] md:max-w-[1000px] bg-cback rounded-2xl'>
        {/* left */}
        <div className='order-last md:order-first text-center flex items-center justify-center flex-col lg:p-10'>

          <div className='flex justify-between items-center text-center'>
            <h1 className='text-headwh font-bold text-3xl lg:text-4xl md:text-left lg:mb-10 mb-5 mx-5'>Get <span className='text-sviolet'>insights</span> that help your business grow.</h1>
          </div>

          <p className='text-para mb-5 lg:mb-16 px-6 text-center md:text-left opacity-75 '>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

          <div className='text-headings grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-start mb-8 md:mb-0'>
            <div>
              <h1 className='text-xl text-headwh font-bold mb-1 md:mb-0'>10k+</h1>
              <h6 className='text-xs uppercase opacity-75'>Companies</h6>
            </div>
            <div>
              <h1 className='text-xl text-headwh font-bold mb-1 md:mb-0'>314</h1>
              <h6 className='text-xs uppercase opacity-75'>Templates</h6>
            </div>
            <div>
              <h1 className='text-xl text-headwh font-bold mb-1 md:mb-0'>12M+</h1>
              <h6 className='text-xs uppercase opacity-75'>Queries</h6>
            </div>
          </div>
        </div>
        {/* right */}
        <div>
          <picture>
            <source srcSet={imageDesk} media='(min-width: 768px)' />
            <img src={imageMobile} className='md:rounded-r-2xl md:rounded-tl-none  rounded-t-2xl md:mb-0 mb-10'  alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default App;
