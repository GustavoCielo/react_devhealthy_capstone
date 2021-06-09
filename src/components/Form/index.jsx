import {Container} from "./style"

export const Form = ({children, ...rest}) => {
    return <Container {...rest}>{children}</Container>
}