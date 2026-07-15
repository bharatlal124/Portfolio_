function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-on-surface sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
    </div>
  )
}

export default SectionHeading
