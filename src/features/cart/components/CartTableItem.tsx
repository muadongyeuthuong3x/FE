import { Add, Delete, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, TableCell, TableRow, TextField, Typography } from '@mui/material';
import ProductImage from 'assets/image/product.png';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../constants';

export interface CartTableItemProps {
  productList: Product[];
}

const CartTableItem: FC = () => {
  const [amount, setAmount] = useState<number>(1);

  return (
    <>
      <TableRow
        sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', '& > td': { padding: '12px' } }}
      >
        <TableCell sx={{ display: 'flex', borderBottom: 'none' }}>
          <Link to="">
            <img src={ProductImage} alt="" width="100px" height="100px" />
          </Link>
          <Box
            padding="12px 12px 12px 24px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            lineHeight={1.6}
            sx={{
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '15px',
              },
            }}
          >
            <Link to="">Black Shoes</Link>
            <Typography color="#959595" fontSize="14px">
              36
            </Typography>
          </Box>
        </TableCell>
        <TableCell align="center">
          <Typography>$55.00</Typography>
        </TableCell>
        <TableCell>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              '& .MuiFormControl-root': {
                margin: 0,

                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  '&.Mui-focused': {
                    border: '1px solid #000000',
                  },
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
              onClick={() => setAmount((prev) => prev - 1)}
            >
              <Remove />
            </Button>
            <TextField name="amount" value={amount} onChange={(e) => setAmount(+e.target.value)} />
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
              onClick={() => setAmount((prev) => prev + 1)}
            >
              <Add />
            </Button>
          </Box>
        </TableCell>
        <TableCell align="center">
          <Typography>$55.00</Typography>
        </TableCell>
        <TableCell align="center">
          <IconButton>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartTableItem;
