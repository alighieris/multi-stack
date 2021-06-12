import { styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;
