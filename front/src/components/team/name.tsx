type Props = {
  name?: string;
};

const Name: React.FC<Props> = ({ name }) => {
  return <h1>{name}</h1>;
};
export default Name;
