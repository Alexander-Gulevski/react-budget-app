import { StyledButton } from './styles';
import { ReactComponent as Icon } from '../../assets/cross.svg';

interface IProps {
    handleDeleteItem: () => void;
}

const CloseButton = ({ handleDeleteItem }: IProps) => {
    return (
        <StyledButton type="button" onClick={handleDeleteItem}>
            <Icon />
        </StyledButton>
    );
};

export default CloseButton;
