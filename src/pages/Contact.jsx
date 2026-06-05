function Contact() {
	return (
		<section className="page">
			<div className="hero-card">
				<p className="eyebrow">Contact</p>
				<h1>Talk to the CatStore team</h1>
				<p>Questions about breeds, delivery, or orders? Send us a message.</p>
			</div>

			<div className="contact-layout">
				{/* Show direct contact details beside the message form. */}
				<div className="contact-details panel">
					<h2>Reach us directly</h2>
					<p>
						Email: hello@catstore.se
					</p>
					<p>
						Phone: +46 8 555 12 340
					</p>
					<p>
						Address: Storgatan 14, 111 22 Stockholm
					</p>
					<p>
						Opening hours: Mon-Fri 09:00-18:00, Sat 10:00-15:00
					</p>
					<p>
						Warehouse pickup and same-day paw-sonal support available in central Stockholm.
					</p>
				</div>

				<form className="checkout-form contact-form">
					{/* Simple contact form for customer questions. */}
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
			</div>
		</section>
	)
}

export default Contact
