import styled from "styled-components";
import close from "../../assets/logo/close.svg";
const ExpenseButtonClose = () => {
  return <StyledExpenseButtonClose />;
};

export default ExpenseButtonClose;

export const StyledExpenseButtonClose = styled.div`
  width: 20px;

  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;

  cursor: pointer;
`;
