import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h-page">We couldn't find that page.</h1>
        <div className="btn-row">
          <Link href="/" className="btn btn--solid">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
