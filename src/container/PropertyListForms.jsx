
import TextFieldComponent from '../components/TextField';
import { Button, Checkbox, Divider, FormControl, FormControlLabel,  InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { createListingForm } from '../utils/FormSchema';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../store/notificationSlice';
import PropertiesApis from '../services/api/properties';

const property = new PropertiesApis();




const PropertyListForms = ({ value, handleChange, selectedImages, isSubmitting, setIsSubmitting, setOpen }) => {

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const { accessToken, email } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  const uploadImages = async (selectedImages) => {
    const images = [];


    selectedImages.forEach(async (image, index) => {
      const formData = new FormData();
      formData.append(`file`, image);
      formData.append("upload_preset", import.meta.env.VITE_CLOUD_UPLOAD_PRESET);
      try {
        const uploadResponse = property.uploadPropertyImages(formData);
        images.push(uploadResponse);
      } catch (err) {
        console.log(err);
      }
    })


    return images;

  }

  const addPropertyHandleSubmit = async (values) => {

    try {
      setIsSubmitting(true);
      const images = await uploadImages(selectedImages);
      const imagesData = await Promise.all(images);
      const urls = imagesData.map((res) => res.data.url);


      const response = await property.createNewProperty(email, urls, values, accessToken);


      setOpen(false);
      dispatch(notificationActions.notify({
        type: "success",
        message: "Property Created Successfully 😜"
      }))
      console.log(response);

    } catch (err) {
      console.log(err);
      dispatch(notificationActions.notify({
        type: "error",
        message: err.message,
      }))
    } finally {
      setIsSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: 100,
      area: 150,
      location: '',
      bedrooms: 1,
      bathrooms: 1,
      kitchens: 1,
      parking: false,
      furnished: false,
      swimmingPool: false,
      gym: false,
      security: false,
      garden: false,
    },
    validationSchema: createListingForm,
    onSubmit: addPropertyHandleSubmit,
  });

  const basicFormValidationHandler = () => {

    if (formik.errors.name || formik.errors.location || formik.errors.description || formik.errors.area || formik.errors.price) {
      formik.submitForm();
      return;
    }

    handleChange(1);

  }
  const moreInfoFormHandler = () => {
    if (!formik.values.name || !formik.values.location || !formik.values.description) {
      formik.submitForm();
      return;
    }

    handleChange(2);

  }

  console.log(formik.values);

  return (
    <>
      {value === 0 && (

        <form className="flex flex-col gap-6 justify-between h-full ">
          <div className='flex flex-col gap-6'>
            <TextFieldComponent name="name" label="Property Name" type="text" error={formik.errors.name && formik.touched.name ? true : false} helperText={formik.errors.name && formik.touched.name ? formik.errors.name : ''} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />

            <TextField
              type="number"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.errors.price && formik.touched.price ? true : false}
              onBlur={formik.handleBlur}
              helperText={formik.errors.price && formik.touched.price ? formik.errors.price : ''}
              sx={{
                width: '200px'
              }}
              inputProps={{
                min: "100"
              }}
              variant="outlined"
              required={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <p>Rs.</p>
                  </InputAdornment>
                ),

              }}

            />
            <TextField
              type="number"
              name="area"
              label="Area"
              value={formik.values.area}
              onChange={formik.handleChange}
              error={formik.errors.area && formik.touched.area ? true : false}
              helperText={formik.errors.area && formik.touched.area ? formik.errors.area : ''}
              onBlur={formik.handleBlur}
              sx={{
                width: '200px'
              }}
              inputProps={{
                min: 100
              }}
              variant="outlined"
              required={true}
              InputProps={{


              }}

            />

            <TextFieldComponent name="location" label="Location" type="text" error={formik.errors.location && formik.touched.location ? true : false} helperText={formik.errors.location && formik.touched.location ? formik.errors.location : ''} value={formik.values.location} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} />

            <TextFieldComponent name="description" label="Describe your Property" type="text" error={formik.errors.description && formik.touched.description ? true : false} helperText={formik.errors.description && formik.touched.description ? formik.errors.description : ''} value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} disabled={isSubmitting ? true : false} isRequired={true} isPassword={false} multiline={true} rows={6} />


          </div>
          <div className='flex justify-end'>
            <Button type="button" variant="contained" color="primary" onClick={basicFormValidationHandler} sx={{

              fontSize: '16px',
              letterSpacing: "1.2px",
              fontFamily: 'roboto',
              width: '140px',
              '@media(max-width:640px)': {
                fontSize: '14px'
              }
            }}>Next</Button>

          </div>
        </form>

      )}



      {/* MORE FEATURES FORM */}
      {value === 1 && (
        <form className="flex flex-col   justify-between h-full">
          <div className='flex flex-col gap-6'>
            <div className='flex gap-4 flex-wrap items-center justify-center'>
              <FormControl sx={{ width: '200px' }} variant='filled'>

                <InputLabel id="demo-simple-select-label">Bedrooms</InputLabel>
                <Select
                  labelId="bedroom"
                  name="bedrooms"
                  value={formik.values.bedrooms}
                  label="Bedrooms"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: '200px' }} variant='filled'>

                <InputLabel id="bathroom">Bathrooms</InputLabel>
                <Select
                  labelId="bathroom"
                  name="bathrooms"
                  value={formik.values.bathrooms}
                  label="bathrooms"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: '200px' }} variant='filled'>

                <InputLabel id="kitchen">Kitchens</InputLabel>
                <Select
                  labelId="kitchen"
                  name="kitchens"
                  value={formik.values.kitchens}
                  label="Kitchens"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>



            </div>

            <Divider />

            <div className='flex gap-6 flex-wrap'>
              <FormControlLabel
                value="Parking"
                control={<Checkbox name="parking" checked={formik.values.parking} onChange={formik.handleChange} />}
                label="Parking"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Furnished"
                control={<Checkbox name="furnished" checked={formik.values.furnished} onChange={formik.handleChange} />}
                label="Furnished"
                labelPlacement="start"
              />
              <FormControlLabel
                value="SwimmingPool"
                control={<Checkbox name="swimmingPool" checked={formik.values.swimmingPool} onChange={formik.handleChange} />}
                label="Swimming Pool"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Gym"
                control={<Checkbox name="gym" checked={formik.values.gym} onChange={formik.handleChange} />}
                label="Gym"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Secure"
                control={<Checkbox name="security" checked={formik.values.security} onChange={formik.handleChange} />}
                label="Security"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Garden"
                control={<Checkbox name="garden" checked={formik.values.garden} onChange={formik.handleChange} />}
                label="Garden"
                labelPlacement="start"
              />
            </div>
          </div>

          <div className='flex justify-between'>
            <Button type="button" variant="contained" color="primary" onClick={(event) => handleChange(0)} sx={{

              fontSize: '16px',
              letterSpacing: "1.2px",
              fontFamily: 'roboto',
              width: '140px',
              '@media(max-width:640px)': {
                fontSize: '14px'
              }
            }}>Back</Button>
            <Button type="button" variant="contained" color="primary" onClick={moreInfoFormHandler} sx={{

              fontSize: '16px',
              letterSpacing: "1.2px",
              fontFamily: 'roboto',
              width: '140px',
              '@media(max-width:640px)': {
                fontSize: '14px'
              }
            }}>Next</Button>

          </div>

        </form>
      )}
      {value === 2 && (
        <div className="flex flex-col justify-between h-full">
          <div className='flex-1 flex justify-center items-center'>
            <p>Please check all details before creating</p>
          </div>

          <div className='flex justify-between'>
            <Button type="button" variant="contained" color="primary" onClick={(event) => handleChange(1)} sx={{

              fontSize: '16px',
              letterSpacing: "1.2px",
              fontFamily: 'roboto',
              width: '140px',
              '@media(max-width:640px)': {
                fontSize: '14px'
              }
            }}>Back</Button>
            <Button type="button" onClick={formik.handleSubmit} variant="contained" color="primary" sx={{

              fontSize: '16px',
              letterSpacing: "1.2px",
              fontFamily: 'roboto',
              width: '140px',
              '@media(max-width:640px)': {
                fontSize: '14px'
              }
            }}>Confirm</Button>

          </div>
        </div>

      )}
    </>
  )
}

export default PropertyListForms