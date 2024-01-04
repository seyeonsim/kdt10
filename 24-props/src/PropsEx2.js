const PropsEx2 = (props) => {
  const { title, author, price, type } = props;
  return (
    <div className="BookBg">
      <h3 className="Best">이번주 베스트셀러</h3>
      <div>
        <img
          src="https://image.yes24.com/goods/93513663/S"
          alt="책커버이미지"
        />
      </div>
      <h3>{title}</h3>
      <div className="Sdetail">
        <h5>저자: {author}</h5>
        <h5>판매가: {price}</h5>
        <h5>구분: {type}</h5>
      </div>
    </div>
  );
};

export default PropsEx2;
