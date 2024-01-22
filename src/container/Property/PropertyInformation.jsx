import { CropRounded, BedRounded, ShowerRounded, LocalParkingRounded, RoofingRounded, PoolRounded, FitnessCenterRounded, CameraOutdoorRounded, YardRounded } from '@mui/icons-material';


const facilitiesAndIconsObject = {
  parking:<LocalParkingRounded color='primary' />,
  furnished:<RoofingRounded color='primary' />,
  gym:<FitnessCenterRounded color='primary' />,
  swimmingPool:<PoolRounded color='primary' />,
  security:<CameraOutdoorRounded color='primary' />,
  garden:<YardRounded color='primary' />
}

const PropertyInformation = ({propertyData}) => {
  return (
    <section className="">

      <div className=' text-text mt-8 flex flex-col gap-3 max-sm:gap-2'>
        <span className=' text-4xl max-md:text-3xl max-sm:text-2xl  font-bold max-md:font-semibold'>$ {propertyData.price}</span>
        <span className=' text-2xl max-sm:text-xl font-medium '>{propertyData.name}</span>
        <p className=' text-2xl max-sm:text-xl font-medium '>{propertyData.location}</p>
        <p className="text-lg max-sm:text-base">
          {propertyData.description}
        </p>
      </div>

      <div className=' bg-primary rounded-xl text-white flex py-4 px-12 max-sm:px-4 justify-between mt-12 max-sm:mt-6'>
        <div className='flex flex-col gap-2 items-center' >
          <CropRounded sx={{ fontSize: '60px','@media(max-width:640px)':{fontSize:'38px'} }}  />
          <p className='text-2xl max-sm:text-base font-medium'>{propertyData.area} Sqft.</p>
        </div>
        <div className='flex flex-col gap-2 items-center' >
          <BedRounded sx={{ fontSize: '60px','@media(max-width:640px)':{fontSize:'38px'}  }} />
          <p className='text-2xl max-sm:text-base font-medium'>{propertyData.bedrooms} BedRooms</p>
        </div>
        <div className='flex flex-col gap-2 items-center' >
          <ShowerRounded sx={{ fontSize: '60px','@media(max-width:640px)':{fontSize:'38px'}  }} />
          <p className='text-2xl max-sm:text-base font-medium'>{propertyData.bathrooms} Baths</p>
        </div>
      </div>

      <div className=' border-2  rounded-xl text-text py-4 px-12 max-sm:px-4 mt-12 max-sm:mt-6'>
        <h4 className=' text-2xl max-sm:text-xl font-medium'>Facilities</h4>

        <div className='mt-6 max-sm:mt-4 flex justify-between flex-wrap gap-12'>

          {Object.keys(propertyData).map((key,index)=>{
            if(Object.keys(facilitiesAndIconsObject).includes(key) && propertyData[key] === true){
              return <div key={key} className='text-lg text-text flex items-center gap-2'>
              <span className='w-10 h-10 max-sm:w-8 max-sm:h-8 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
                {facilitiesAndIconsObject[key]}
              </span>
              <p className=' max-sm:text-base text-xl'>{key}</p>
            </div>
            }
          })}
          {/* <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <LocalParkingRounded color='primary' />
            </span>
            <p>Parking</p>
          </div>
          <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <RoofingRounded color='primary' />
            </span>
            <p>Furnished</p>
          </div>
          <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <PoolRounded color='primary' />
            </span>
            <p>Swimming Pool</p>
          </div>
          <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <FitnessCenterRounded color='primary' />
            </span>
            <p>Gym</p>
          </div>
          <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <CameraOutdoorRounded color='primary' />
            </span>
            <p>Security</p>
          </div>
          <div className='text-lg text-text flex items-center gap-2'>
            <span className='w-10 h-10 flex items-center justify-center border-2 rounded-full border-primary bg-[#edf7ff]'>
              <YardRounded color='primary' />
            </span>
            <p>Garden</p>
          </div> */}
        </div>
      </div>


    </section>
  )
}

export default PropertyInformation