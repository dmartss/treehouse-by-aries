export default function SectionHeader({ id, title, description, className }) {
  return (
    <div className="tc" id={id}>
      <h2 className="fp fw3">{title}</h2>
      {description && <p className="f-reset fs fw4">{description}</p>}
    </div>
  )
}
