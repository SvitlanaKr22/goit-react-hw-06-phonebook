//import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Field, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <Formik initialValues={{ name: '' }}>
      <Label>
        Find contact by name
        <Field type="text" name="name" value={value} onChange={handleChange} />
      </Label>
    </Formik>
  );
};

// const Filter = ({ value, changeFilter }) => (
//   <Formik initialValues={{ name: '' }}>
//     <Label>
//       Find contact by name
//       <Field type="text" name="name" value={value} onChange={changeFilter} />
//     </Label>
//   </Formik>
// );

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
