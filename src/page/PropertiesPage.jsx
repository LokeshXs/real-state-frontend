
import { useEffect, useReducer, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FilterPanel from "../components/filterPanel/FilterPanel";
import PropertiesApis from "../services/api/properties";
import CardSkeleton from "../components/ui/CardSkeleton";
import { useNavigate } from "react-router-dom";
import { Button, Pagination, Stack } from "@mui/material";




const propertyFetch = new PropertiesApis();
const skeletonArray = Array.from(Array(10).keys());
console.log(skeletonArray);


const initialState = {
  priceRange: [0, 100000000],
  areaRange: [0, 10000],
  bedRooms: 0,
  bathrooms: 0,
  facilities: {
    "Furnished": false,
    "Parking": false,
    "Swimming Pool": false,
    "Gym": false,
    "Security": false,
    "Garden": false
  }
};

const filterReducer = (prevState, action) => {

  if (action.type === 'PRICE_INPUT') {
    return {
      ...prevState,
      priceRange: action.payload
    }
  }
  if (action.type === 'ARIA_INPUT') {
    return {
      ...prevState,
      areaRange: action.payload
    }
  }
  if (action.type === 'BEDROOMS_INPUT') {
    return {
      ...prevState,
      bedRooms: action.payload
    }
  }
  if (action.type === 'BATHROOMS_INPUT') {
    return {
      ...prevState,
      bathrooms: action.payload
    }
  }
  if (action.type === 'FACILITIES_INPUT') {
    return {
      ...prevState,
      facilities: {
        ...prevState.facilities,
        [action.payload]: !prevState.facilities[action.payload]
      }
    }
  }

  return initialState;
}




const PropertiesPage = () => {


  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isFilterFormSubmitted, setIsFilterFormSubmitted] = useState(false);
  const [filterState, dispatchFilterAction] = useReducer(filterReducer, initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);


  const handleChange = (event, value) => {
    setPage(value);
  };


  useEffect(() => {


    const fetchProperties = async () => {
      setLoading(true);
      const filteredFacilites = {};

      const facilitesArray = Object.keys(filterState.facilities);
      console.log(facilitesArray);

      facilitesArray.forEach((key) => {
        if (filterState.facilities[key]) {
          let camelCaseKey = key.replace(" ", '');
          camelCaseKey = camelCaseKey.charAt(0).toLowerCase() + camelCaseKey.slice(1);
          console.log(camelCaseKey);
          filteredFacilites[camelCaseKey] = filterState.facilities[key]
        }
      })

      const queryString = Object.entries({
        ...filteredFacilites,
        sortBy: 'price',
        limit: limit,
        page: page,
        'price[gte]': filterState.priceRange[0],
        'price[lte]': filterState.priceRange[1],
        'area[gte]': filterState.areaRange[0],
        'area[lte]': filterState.areaRange[1],
        'bathrooms[gte]': filterState.bathrooms,
        'bedrooms[gte]': filterState.bedRooms,
      })
        .map(([key, value]) => `${key}=${value}`)
        .join('&');


      // Add a parameter to the URL
      // currentURL.searchParams.set('yourParameterName', 'yourParameterValue');

      console.log(queryString);

      const res = await propertyFetch.getAllProperties(queryString);

      const prop = res.data;

      console.log(prop);
      setFilteredProperties(prop);
      setIsFilterFormSubmitted(false);
      setLoading(false)

    }

    fetchProperties();
  }, [isFilterFormSubmitted, page]);


  return (
    <main className='pt-32 max-sm:pt-24  max-sm:h-auto   relative w-screen transition-all duration-[1s] max-sm:!block flex items-start '  >

      <FilterPanel filterState={filterState} dispatchFilterAction={dispatchFilterAction} setIsFilterFormSubmitted={setIsFilterFormSubmitted} />


      <section className=' py-24 max-sm:py-12 flex-1  '>
        <div className='card-section max-sm:px-4'>
          {loading ? skeletonArray.map((item) => <CardSkeleton key={item} />) :


            filteredProperties?.properties?.map((property, index) => {
              return (
                <PropertyCard key={index} name={property.name} price={property.price} img={property.images[0]} location={property.location} onClick={() => {
                  navigate(`/properties/${property._id}`)
                }} />
              )
            })

          }
        </div>
        <div className=" flex justify-center mt-12">
          <Pagination count={Math.ceil(filteredProperties.total / limit)} page={page} onChange={handleChange} shape="rounded" color="primary" />
        </div>


      </section>




    </main>
  )
}

export default PropertiesPage
