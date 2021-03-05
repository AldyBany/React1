const About = ({ number, setNumber }) => {
  const set = () => {
    setNumber = number + 1;
    return setNumber;
  };
  return (
    <>
      <button type="button" class="btn btn-primary" onClick={() => set()}>
        Button
      </button>
    </>
  );
};
export default About;
