import { AddCircleRounded, RemoveCircleRounded, CloseRounded } from '@mui/icons-material';
import { Button, Checkbox, Chip, FormControlLabel, IconButton, Slider } from '@mui/material';
import { formatCurrency } from "../../utils/utils";
import { useState } from 'react';




const FilterPanel = ({ filterState, dispatchFilterAction, setIsFilterFormSubmitted }) => {

  const [filterOpen, setFilterOpen] = useState(false);
  const handleChange = (event, newValue) => {
    dispatchFilterAction({
      type: 'PRICE_INPUT',
      payload: newValue
    })
    // setValue(newValue);
  };
  const handleAreaChange = (event, newValue) => {
    dispatchFilterAction({
      type: 'ARIA_INPUT',
      payload: newValue
    })
    // setAriaValue(newValue);
  };
  const handleBedRoomschange = (value) => {
    if (value >= 1) {
      console.log(value);
      dispatchFilterAction({
        type: 'BEDROOMS_INPUT',
        payload: value
      })
      // setBedRooms(value);
    } else {
      dispatchFilterAction({
        type: 'BEDROOMS_INPUT',
        payload: 1
      })
    }
  }
  const handleBathRoomsChange = (value) => {
    if (value >= 1) {
      console.log(value);
      dispatchFilterAction({
        type: 'BATHROOMS_INPUT',
        payload: value
      })
      // setBathRooms(value);
    } else {
      dispatchFilterAction({
        type: 'BATHROOMS_INPUT',
        payload: 1
      })
    }
  }

  const applyFilterHandler = () => {
    setIsFilterFormSubmitted(true);
    setFilterOpen(false);
  }



  const facilitiesCheckboxChangeHandler = (event) => {
    console.log(event.target.name);
    dispatchFilterAction({
      type: 'FACILITIES_INPUT',
      payload: event.target.name
    })
    // setFacilities((prev) => ({ ...prev, [event.target.name]: !prev[event.target.name] }))

  }
  return (
    <>
      {/* <div className={`fixed  top-36 ${filterOpen ? 'left-2' : '-left-6'} transition-all duration-[1s]  z-10 cursor-pointer flex justify-between `} onClick={() => setFilterOpen((prev) => !prev)}>
        {filterOpen ? <Chip label="Close Filter" color='primary' /> : <Chip label="Open Filter" color='primary' sx={{ paddingLeft: '16px' }} />}

        <Button variant="contained" onClick={applyFilterHandler} sx={{
            width: '90%',
            borderRadius: "24px",
            textTransform: "capitalize",
            fontSize: "16px",
            marginTop: "12px",
            fontWeight: "400",  
          }}>Apply</Button>
      </div> */}
      {/* <div
        className="max-sm:fixed max-sm:block hidden max-sm:top-[80px] z-10 p-2 bg-white rounded-xl cursor-pointer"
        onClick={() => setFilterOpen(true)}
      >
       <Chip label="Open Filter" color='primary' />
      </div> */}

      <div
        className="max-md:fixed max-md:block max-md:w-full hidden max-md:bottom-0 max-md:z-[50]  bg-white rounded-xl cursor-pointer shadow-lg"
        onClick={() => setFilterOpen(prev=>!prev)}
      >
        <Button variant='contained' sx={{
          width: '100%', borderRadius: 0,
        }}>Filter</Button>
      </div>
      <aside className={` pt-4 pb-10 px-2   w-[340px] max-xl:w-[300px] max-md:w-full max-md:fixed max-md:h-[100vh] max-md:bottom-0 max-md:z-[40]  md:sticky md:top-0 flex flex-col gap-8 md:z-10   bg-white overflow-y-auto hide-scrollbar border-2 rounded-r-xl transition-all duration-500
      ${filterOpen?'max-md:translate-y-0':'max-md:translate-y-[100%]'}`}>
        <div className=' flex justify-between px-4 items-center '>
          

          <Button variant="contained" onClick={applyFilterHandler} sx={{

            borderRadius: "24px",
            textTransform: "capitalize",
            fontSize: "16px",
            marginTop: "12px",
            fontWeight: "400",
          }}>Apply</Button>
        </div>

        <div >
          <div className=' px-4 flex flex-col gap-2'>
            <h6 className='text-xl font-medium'>Price Range</h6>
            <div>
              <Slider
                name='priceRange'
                value={filterState.priceRange}
                onChange={handleChange}
                step={100000}
                max={100000000}
              />
            </div>
            <div className='flex justify-between'>
              <Chip label={formatCurrency(String(filterState.priceRange[0]))} color='primary' sx={{ padding: '4px 6px', fontSize: '16px', minWidth: '80px' }} />
              <Chip label={formatCurrency(String(filterState.priceRange[1]))} color='primary' sx={{ padding: '4px 6px', fontSize: '16px', minWidth: '80px' }} />
            </div>
          </div>

          <div className='mt-8 px-4 flex flex-col gap-2'>
            <h6 className='text-xl font-medium'>Area</h6>
            <div>
              <Slider
                name='priceRange'
                value={filterState.areaRange}
                onChange={handleAreaChange}
                step={10}
                max={10000}
              />
            </div>
            <div className='flex justify-between'>
              <Chip label={`${filterState.areaRange[0]} sqft.`} color='primary' sx={{ padding: '4px 6px', fontSize: '16px', minWidth: '80px' }} />
              <Chip label={`${filterState.areaRange[1]} sqft.`} color='primary' sx={{ padding: '4px 6px', fontSize: '16px', minWidth: '80px' }} />
            </div>
          </div>

          <div className='mt-8 px-4 flex  gap-2 items-center justify-between'>
            <h6 className='text-xl font-medium'>Bedrooms</h6>
            <div className='flex gap-4 items-center'>
              <IconButton aria-label="Add" onClick={() => {
                let current = filterState.bedRooms;
                handleBedRoomschange(++current);
              }}>
                <AddCircleRounded color='primary' fontSize='large' />
              </IconButton>
              <span className='text-xl font-medium'>{filterState.bedRooms}</span>
              <IconButton aria-label="Remove" onClick={() => {
                let current = filterState.bedRooms;
                handleBedRoomschange(--current);
              }}>
                <RemoveCircleRounded color='primary' fontSize='large' />
              </IconButton>

            </div>

          </div>
          <div className='mt-8 px-4 flex  gap-2 items-center justify-between'>
            <h6 className='text-xl font-medium'>Bathrooms</h6>
            <div className='flex gap-4 items-center'>
              <IconButton aria-label="Add" onClick={() => {
                let current = filterState.bathrooms;
                handleBathRoomsChange(++current);
              }}>
                <AddCircleRounded color='primary' fontSize='large' />
              </IconButton>
              <span className='text-xl font-medium'>{filterState.bathrooms}</span>
              <IconButton aria-label="Remove" onClick={() => {
                let current = filterState.bathrooms;
                handleBathRoomsChange(--current);
              }}>
                <RemoveCircleRounded color='primary' fontSize='large' />
              </IconButton>

            </div>

          </div>
          <div className='mt-8 px-4 '>
            <h6 className='text-xl font-medium'>Facilities</h6>
            <div className='flex gap-2 flex-col items-start mt-4 px-8'>
              {Object.keys(filterState.facilities).map((facility, index) => {
                return (
                  <FormControlLabel name={facility} control={<Checkbox checked={filterState.facilities[facility]} onChange={facilitiesCheckboxChangeHandler} />} label={facility} key={index} sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: "space-between"
                  }} />
                )
              })}

            </div>

          </div>

          {/* <div className='sticky bottom-0 w-full p-2 bg-secondary flex justify-center'>
          <Button variant="contained" onClick={applyFilterHandler} sx={{
            width: '90%',
            borderRadius: "24px",
            textTransform: "capitalize",
            fontSize: "16px",
            marginTop: "12px",
            fontWeight: "400",
          }}>Apply</Button>
        </div> */}
        </div>
      </aside>
    


    </>
  )
}

export default FilterPanel