import { Container } from '@mui/material';
import { FC } from 'react';
import ProductItem from './ProductItem';
import Widget from './Widget';

const ProductList: FC = () => {
  return (
    <Container maxWidth="xl">
      <Widget title="Sản phẩm mới" buttonTitle="load more">
        <ProductItem list={[]} />
      </Widget>
    </Container>
  );
};

export default ProductList;
