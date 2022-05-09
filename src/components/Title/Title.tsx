import { StyledTitle } from './styles';

interface IProps {
    text: string;
}

const Title = ({ text }: IProps) => {
    return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
