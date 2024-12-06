import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { TabLink } from "./tab-link";

export const TabLinkContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  // const navigate = useNavigate();

  // const onClick = () => navigate(`headphone/${id}`)

  if (!headhpone) {
    return;
  }

  return <TabLink title={headhpone.name} id={id} />;
};
