const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-details stroke animate "></div>
      <div className="shimmer-tags stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(15).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

{
  /* <div className="restaurant-list">
{Array(10)
  .fill("")
  .map((e, index) => (
    <div key={index} className="shimmer-card"></div>
  ))}
</div> */
}

export default Shimmer;
