const NumResult = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length ? movies?.length : "0"}</strong> results
    </p>
  );
};
export default NumResult;
