import "./Style.scss";

const PageHeaderContent = (probs) => {
  const { headerText, icon } = probs;
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
