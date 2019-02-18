export default ({ attributes }) => {
  let el;

  if (attributes.url) {
    el = <a className="button" href={attributes.url}>{attributes.label}</a>
  } else {
    el = <button className="button">{attributes.label}</button>
  }
  return (
    <div>
      {el}
    </div>
  )
};