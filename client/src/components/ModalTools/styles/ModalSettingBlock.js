import styled from "styled-components";

const ModalSettingBlock = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : space-between;
    width: 30%;
    min-height : 150px; 
    border-radius:10%;
    border : 1px solid black;
    box-shadow : 5px 5px 5px;
    background-color: #fafafa;
    margin-top : 15px; 
    padding: 20px;

    &:hover{
        box-shadow : 7px 7px 7px;
    }
`;
export default ModalSettingBlock;
