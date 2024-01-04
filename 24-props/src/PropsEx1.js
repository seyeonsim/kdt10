const PropsEx1 = (props) => {
  const { food } = props;
  return (
    <p>
      제가 좋아하는 과일은 <b>{food}</b>입니다.
    </p>
  );
};

PropsEx1.defaultProps = {
  food: "수박",
};

export default PropsEx1;
