function Contact() {
	return (
		<section className="page">
			<div className="hero-card">
				<p className="eyebrow">Contact</p>
				<h1>Talk to the CatStore team</h1>
				<p>Questions about breeds, delivery, or orders? Send us a message.</p>
			</div>

			<form className="checkout-form contact-form">
				<label htmlFor="contact-name">Full name</label>
				<input id="contact-name" type="text" required />

				<label htmlFor="contact-email">Email</label>
				<input id="contact-email" type="email" required />

				<label htmlFor="contact-message">Message</label>
				<textarea id="contact-message" rows="6" required />

				<button type="submit" className="btn">
					Send message
				</button>
			</form>
		</section>
	)
}

export default Contact
