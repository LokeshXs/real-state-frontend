import { useEffect, useState } from 'react'
import PropertyThumbsGallery from '../container/Property/PropertyThumbsGallery'
import PropertyInformation from '../container/Property/PropertyInformation'
import { Avatar, Button, Skeleton } from '@mui/material'
import { CallRounded, CalendarMonthRounded } from '@mui/icons-material'
import { useParams } from "react-router-dom";
import PropertiesApis from '../services/api/properties'

const propertyFetch = new PropertiesApis();


const PropertyPage = () => {

  let { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const fetchPropertyData = async () => {
      setIsLoading(true);
      const response = await propertyFetch.getProperty(propertyId);

      const data = response.data.property;

      setPropertyDetails(data);
      setIsLoading(false);
    }

    fetchPropertyData();

  }, [propertyId]);


  return (
    <>
      <main className='pt-32 max-sm:pt-24 px-12 max-sm:px-4 flex items-start max-xl:flex-col'>

        <div className=' w-[70%] max-xl:w-full '>
          {isLoading ? <Skeleton component="div" variant="rectangular" height={800} sx={{width:'60vw',borderRadius:'12px'}}  /> : <>
            <PropertyThumbsGallery images={propertyDetails.images} />
            <PropertyInformation propertyData={propertyDetails} />
          </>}
        </div>
        <aside className='sticky top-0 pl-4 py-4 w-full  text-text max-sm:mt-6 max-sm:p-0 '>
          {isLoading ? <Skeleton component="div" variant="rectangular" height={400} width={400} className=' rounded-xl'  /> :
            <div className='border-2 p-4 rounded-xl '>
              <div className='bg-[#edf7ff] p-4 rounded-xl flex flex-col max-xl:items-center '>
                <span className='text-base font-medium '>Agent Details</span>
                <div className='flex max-xl:flex-col max-xl:items-center gap-4 mt-2 justify-start items-start'>
                  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{ width: 56, height: 56 }} />

                  <div className='flex flex-col max-xl:text-center gap-1 justify-center'>
                    <p className='text-lg font-medium '>Lokesh Singh</p>
                    <p>Bhiwadi, Rajasthan</p>
                    <Button variant='contained' startIcon={<CallRounded />} sx={{
                      borderRadius: "24px",
                      textTransform: "capitalize",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}>Contact Agent</Button>
                  </div>
                </div>
              </div>

              <div className='mt-6 flex flex-col gap-4 bg-[#edf7ff] p-4 rounded-xl  '>
                <span className='text-base font-medium'>Take a tour with Agent</span>
                <p>Monday to Friday (10:00 AM - 4:00 PM)</p>
                <div className=' flex flex-col gap-1'>
                  <label htmlFor='start'>Select Date</label>

                  <input type="date" id="start" name="trip-start" value="2024-01-14" min="2024-01-14" max="2024-12-31" className='border-2 w-[60%] max-xl:w-[200px]' />

                </div>
                <Button variant='contained' startIcon={<CalendarMonthRounded />} sx={{
                  borderRadius: "24px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                  fontWeight: "400",
                  width: '100%'
                }}>Book Appointment</Button>
              </div>

            </div>
          }
        </aside>



      </main>
    </>
  )
}

export default PropertyPage