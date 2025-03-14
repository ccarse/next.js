export default function Layout({ bar, foo }) {
  return (
    <div>
      <h1>Parallel Routes Layout</h1>
      <div id="foo-slot">{foo}</div>
      <div id="bar-slot">{bar}</div>
    </div>
  )
}
