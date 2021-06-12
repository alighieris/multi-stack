import React from "react";
import {
  UserInfoContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInfo.style";

interface UserInfoProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInfoContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInfoContainer>
  );
};

export default UserInfo;
