export default ({ attributes }) => {
  return (
    <div>
      <h3 className="title">{attributes.title}</h3>
      <div className="desc">{attributes.desc}</div>
    </div>
  )
};