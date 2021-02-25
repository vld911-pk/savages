import styled from 'styled-components';

const UserDataWrapper = styled.div`
   display : flex; 
   justify-content : space-between;
   
      @media (max-width: 1150px) {
         flex-direction: column;

            img{
               width: 150px;
               height: 150px; 
            }
      }
`
export default UserDataWrapper;