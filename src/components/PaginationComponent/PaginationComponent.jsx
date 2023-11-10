import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import PaginationComponentContainer from '@/components/PaginationComponent/PaginationComponent.styled';
import Button from '../Button';

const PaginationComponent = ({ currentPage, setCurrentPage, pageSize, total }) => {
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <Button
          btnType="secondary"
          contentType="icon"
          btnWidth={40}
          btnHeight={32}
          content="icon-arrow-accent"
          iconAngle={180}
        />
      );
    }
    if (type === 'next') {
      return (
        <Button
          btnType="secondary"
          contentType="icon"
          btnWidth={40}
          btnHeight={32}
          content="icon-arrow-accent"
          iconAngle={0}
        />
      );
    }
    return originalElement;
  };

  return (
    <PaginationComponentContainer>
      {total > pageSize && (
        <Pagination
          defaultCurrent={1}
          total={total}
          itemRender={itemRender}
          pageSize={pageSize}
          current={currentPage}
          onChange={(page) => {
            setCurrentPage(page);
          }}
          className="pagination"
        />
      )}
    </PaginationComponentContainer>
  );
};

PaginationComponent.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default PaginationComponent;
