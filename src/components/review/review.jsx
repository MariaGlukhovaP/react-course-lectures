import { UserContainer } from "./../user/user-container.jsx";

export const Review = ({ text, userId }) => {
  return (
    <div>
      {text} - <UserContainer id={userId} />
    </div>
  );
};
