import { Add, FavoriteBorder, Remove } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { CustomMuiButton, CustomMuiIconButton, CustomRadioGroupField } from 'components';
import { InputField } from 'components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

const options = [36, 37, 38, 39, 40];

const ProductInfor: FC = () => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      amount: 1,
      size: 36,
    },
  });

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" pb={3} borderBottom="1px solid #e7e7e7">
        <Box>
          <Typography
            variant="h5"
            color={(theme) => theme.palette.secondary.contrastText}
            fontWeight={500}
            textTransform="capitalize"
            mb={1.25}
          >
            Sport Shoes
          </Typography>
          <Box display="flex">
            <Typography variant="h6" color="secondary" fontWeight={500} fontSize="18px">
              $65.00 USD
            </Typography>
            <Typography
              variant="h6"
              color="#979797"
              fontWeight={500}
              sx={{ textDecoration: 'line-through', marginLeft: '10px' }}
              fontSize="18px"
            >
              $75.00 USD
            </Typography>
          </Box>
        </Box>
        <Box>
          <CustomMuiIconButton
            title="Add to wishlist"
            width="40px"
            height="40px"
            border="1px solid #e9e9e9"
          >
            <FavoriteBorder />
          </CustomMuiIconButton>
        </Box>
      </Box>
      <Box pt={3}>
        <Typography fontSize="15px" color="#969696" lineHeight={1.6}>
          Comfy shoes Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only...
        </Typography>
      </Box>
      <Box component="form" my={3} onSubmit={handleSubmit(handleFormSubmit)}>
        <Box display="flex" alignItems="flex-end" mb={4}>
          <Typography
            fontSize="16px"
            fontWeight={600}
            borderBottom={(theme) => `1px solid ${theme.palette.secondary.contrastText}`}
            mr={3}
            pb={0.5}
            minWidth="55px"
          >
            Size
          </Typography>
          <CustomRadioGroupField control={control} name="size" options={options} />
        </Box>
        <Box display="flex" alignItems="flex-end">
          <Typography
            fontSize="16px"
            fontWeight={600}
            borderBottom={(theme) => `1px solid ${theme.palette.secondary.contrastText}`}
            mr={3}
            pb={0.5}
            minWidth="55px"
          >
            Số lượng
          </Typography>
          <Box
            display="flex"
            sx={{
              '& .MuiFormControl-root': {
                margin: 0,

                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '& input': {
                    textAlign: 'center',
                    width: '70px',
                    height: '40px',
                    padding: 0,
                  },
                },
              },
            }}
          >
            <Button
              variant="contained"
              sx={(theme) => ({
                border: '1px solid #ced4da',
                borderRight: 'none',
                boxShadow: 'none',
                borderRadius: '4px 0 0 4px',
                minWidth: '40px',
                padding: 0,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
              onClick={() => setValue('amount', getValues().amount - 1)}
            >
              <Remove />
            </Button>
            <InputField control={control} name="amount" />
            <Button
              variant="contained"
              sx={(theme) => ({
                border: '1px solid #ced4da',
                borderLeft: 'none',
                boxShadow: 'none',
                borderRadius: '0 4px 4px 0',
                minWidth: '40px',
                padding: 0,
                '&:hover': {
                  backgroundColor: theme.palette.primary.main,
                  boxShadow: 'none',
                },
              })}
              onClick={() => setValue('amount', getValues().amount + 1)}
            >
              <Add />
            </Button>
          </Box>
        </Box>
        <Box display="flex" mt={5}>
          <CustomMuiButton
            fullWidth
            backgroundColor="#ff871d"
            color="#ffffff"
            borderColor="#ff871d"
            textColor="#ff871d"
            margin="0 15px 0 0"
          >
            Thêm vào giỏ hàng
          </CustomMuiButton>
          <CustomMuiButton
            fullWidth
            backgroundColor="#000000"
            color="#ffffff"
            borderColor="#000000"
            textColor="#000000"
            type="submit"
          >
            Mua ngay
          </CustomMuiButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfor;
