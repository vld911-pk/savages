import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CustomButton = styled(Button)`
    margin : 0px 10px;
    width  : ${({width}) => width};
`
export default CustomButton;