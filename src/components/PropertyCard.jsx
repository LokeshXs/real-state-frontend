import { Button, Chip } from "@mui/material";
import image from "../assets/image.jpeg";
import {LocationOnOutlined } from '@mui/icons-material';
import { formatCurrency } from "../utils/utils";
import CardType1 from "./ui/CardType1";
import Image from "./Image";

const PropertyCard = ({ name, price, img, location,area,onClick }) => {

  const propertyImage =  img;
  const formattedCurrency = formatCurrency(String(price));
  return (
    <CardType1 className="p-4 rounded-lg w-[400px] max-xl:min-w-[340px] max-md:w-[400px] max-sm:w-[92%] flex items-center flex-col">
      <div className="relative w-[98%] h-[300px] mt-[-60px] " >
      {/* <img src={propertyImage} alt="property" className="object-cover object-center h-full w-full rounded-lg" loading="lazy" /> */}
      <Image src={propertyImage} alt="Property" className="object-cover object-center h-full w-full rounded-lg" />
      </div>

      <div className="mt-4 flex justify-between gap-2  w-full">
        <div className="flex flex-col items-start gap-1">
          <p className="text-2xl font-bold max-sm:font-medium antialiased">{`${formattedCurrency}`}</p>
          <p className="text-xl max-sm:text-lg text-primaryDark font-medium whitespace-nowrap overflow-hidden truncate max-w-[200px] ">{name}</p>

          <Button onClick={onClick} variant="contained" sx={{
           borderRadius:"24px",
            textTransform: "capitalize",
            fontSize: "16px",
            marginTop: "12px",
            fontWeight: "400",
            '@media(max-width:640px)':{
              fontSize:'14px',
              marginTop:'8px'

            }
          }}>View Details</Button>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <Chip color="primary" icon={<LocationOnOutlined fontSize="small" />} label={location} variant="outlined" sx={{ fontSize: "14px",fontWeight:"420",letterSpacing:"0.4px",'@media(max-width:640px)':{
            fontSize:'12px'
          } }} />
          <p className="text-base  font-medium  ">{area} sqft.</p>

        </div>
      </div>
    </CardType1>
  )
}

export default PropertyCard;