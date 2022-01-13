type Props = {
  description?: string;
};

const Description: React.FC<Props> = ({ description }) => {
  return <p>{description}</p>;
};

export default Description;
